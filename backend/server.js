const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserData = require('./data/user.model');
const ProductData = require('./data/product.model');

require('dotenv').config();

const PORT = 4000;

const app = express();
app.use(bodyParser.json());
app.use(
  session({
    secret: 'el-ismaelillo', //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false //required
  })
)
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

const CON_STR = process.env.MONGO_DB_CON_STR;
mongoose.connect(CON_STR, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
})

passport.use(new LocalStrategy(
  (username, password, done) => {
    UserData.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  UserData.findById(id, function (err, user) {
    done(err, user);
  });
});

app.post('/login',
  passport.authenticate('local'), (req, res) => {
    res.send(req.user);
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.status(200).send();
});

app.post('/register', (req, res) => {
  let user = new UserData(req.body);
  user.save()
    .then(user => {
      req.login(user, err => {
        if (err) {
          res.status(401).send('failed during sign in');
        } else {
          res.send(user);
        }
      })
    })
    .catch(err => {
      console.log(err);
      res.status(400).send('adding new user failed');
    });
});

app.post("/products/add", (request, response) => {
  const product = new ProductData(request.body);
  product.save()
    .then(p => {
      response.send(p);
    })
    .catch(error => {
      response.status(400).send(error);
    });
});

app.get("/products/:id", (request, response, next) => {
  const { id } = request.params;
  if (!id) {
    return next();
  }
  ProductData.findById(id, (error, product) => {
    if (error) {
      console.log(error);
    } else {
      response.json(product);
    }
  });
});

app.get("/products", (request, response) => {
  let query = {};

  if (request.query.q) {
    query = { $text: { $search: request.query.q } };

  } else if (request.query.tags) {
    query = { tags: { $in: request.query.tags } };
  }

  ProductData.find(query, (error, products) => {
    if (error) {
      console.log(error);
    } else {
      response.json(products);
    }
  });
});

app.delete("/products/:id", (request, response) => {
  const { id } = request.params;
  ProductData.deleteOne({ _id: id }, (error) => {
    if (error) {
      response.status(400).send(error);
    } else {
      response.status(200).send();
    }
  });
});

app.post("/products/add-many", (request, response) => {
  const newProducts = request.body; // Validation

  ProductData.insertMany(newProducts)
    .then(products => {
      response.send(products);
    })
    .catch(error => {
      response.status(400).send(error);
    });
});
import React, { Component } from 'react';
import Iframe from 'react-iframe';


class Stats extends Component {
    render() {
        return (
                <div className="container">
                 <h2 className="text-center">Discover meaningful facts</h2>                  
                 <br></br> 
                <div class="row">
                    <div class="col-sm">
                    <h6>This year 5 trillion plastic bags will be consumed. That’s 160,000 a second! Put one after another they would go around the world 7 times every hour and cover an area twice the size of France.</h6>
                    <br></br>
                    <Iframe url='https://www.theworldcounts.com/counters/waste_pollution_facts/plastic_bags_used_per_year/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20&token=5ae3d47fec3697728c5c48201ddfb3996077a053' >
                    style={{border: "none"}}
                    height="00"
                    width="300"
                </Iframe>                
                 </div>
                <div class="col-sm">
                <h6>Every 2 hours we throw out enough stuff to fill the world's largest container ship with trash. That's 12 container ships every single day, and 4380 container ships in one year.</h6>
                <br></br>
                <Iframe url='https://www.theworldcounts.com/counters/waste_pollution_facts/household_waste_statistics/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20&token=5ae3d47fec3697728c5c48201ddfb3996077a053' >
                style={{border: "none"}}
                height="00"
                width="300"
                </Iframe>                    
                </div>
                <div class="col-sm">
                    <h6>Every year we extract 55 billion tons of bio-mass, fossil energy, metal and minerals from the earth. This is almost 10 tons for every person in the world. And for people in the western world this number is much higher.</h6>
                    <Iframe url='https://www.theworldcounts.com/counters/shocking_environmental_facts_and_statistics/resources_extracted_from_earth/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20&token=5ae3d47fec3697728c5c48201ddfb3996077a053' >
                    style={{border: "none"}}
                    height="00"
                    width="300"
                </Iframe>                   
                 </div>
                </div>
                 </div>
        );
    }
}

export default Stats;
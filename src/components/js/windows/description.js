import React, {Component} from 'react';


export default class Description extends Component {
    render(){
        return(
            <div className={this.props.name}>
                <h5>
                    Driven by a keen interest in emerging technologies. I thrive on exploring and mastering the dynamic landscape of innovation. My expertise is focused on developing impactful connected products that seamlessly integrate cutting-edge technology with practical applications.
                </h5>
                <h5>
                    I actively embrace collaboration, continuous learning, and the pursuit of excellence in my field. Committed to staying at the forefront of technological advancements, I actively seek opportunities to broaden my knowledge and skills.
                </h5>
            </div>    
        );
    }
}
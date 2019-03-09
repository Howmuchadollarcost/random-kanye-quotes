import React, { Component } from 'react';

import "./quote.css";

class Quote extends Component{

    render(){
        const yeezy = <p>-Yeezy</p>
        const kanye = <p>-Kanye</p>

        return(
            <div className="quote-wrapper">
                <div className="quote-wrapper_cont">
                <h1>{this.props.quote}</h1>
                {(Math.floor(Math.random() * 10) > 5)? yeezy : kanye }
                </div>
            </div>
        );
    }
}

export default Quote;

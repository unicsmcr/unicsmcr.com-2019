import React from "react";
import bet365_logo from './assets/bet365_logo.png';
import gt_logo from './assets/gt_logo.png'
//find non-copyright??
import './font.css';
import './sponsors.css';



const bet_text = (
    <p>bet365, the world's leading online betting and gaming company, is a driving force 
    in the development of enterprise and Internet technology. Delivering an unrivalled 
    online experience to more than 45 million customers in 20 languages. Innovation 
    continues to be our lifeblood and we pride ourselves on the standards of customer 
    service we deliver. Driven by a shared vision to be the best in our industry, a 
    technology team in excess of 1,300 people work in house to provide the technological 
    advances that enable us to maintain our leadership position. Giving our teams the freedom 
    to innovate is essential to our success. Our award winning business has worked hard to 
    cultivate a culture of creativity where good ideas and a techno entrepreneurial attitude 
    are encouraged and rewarded. Today we continue to push technological boundaries and break 
    new ground in software innovation. </p>
)

const gt_text = (
    <p>We are GradTouch. The innovative job advertising platform for graduate employers of all 
    sizes. Our employer profiles showcase your company ethos and culture, giving your employer 
    brand the platform it needs to attract the best and brightest in graduate talent. We reach 
    75% of the graduate market every week across our combined digital platforms. Each month, we 
    reach 3 million 18-24 year-olds across Facebook, Instagram and Twitter, making us the UK’s 
    largest graduate social network. 
    <a target="_blank" href="https://www.gradtouch.com/">gradtouch.com</a>.</p>
)
export default function Sponsors() {
    return(
        <div class="sponsors">
            <h1>Our Sponsors</h1>
            <h2>Gold</h2>
            <figure class="sponsors">
                <div class="logo">
                <a target="_blank" href="https://www.bet365.com/#/HO/">
                        <img src={bet365_logo}
                                alt="" style={{height: '100%'}} />
                    </a>
                </div>
                <figcaption>
                    {bet_text}
                </figcaption>
            </figure>

            <h2>Silver</h2>
            <figure class="sponsors">
                <div class="logo">
                    <a target="_blank" href="https://www.gradtouch.com/register?id=TECH-SOCIETY&src=">
                        <img src={gt_logo}
                                alt="" style={{width: '90%'}} />
                    </a>
                </div>
                <figcaption>
                    {gt_text}
                </figcaption>
            </figure>
        </div>
        
    )
}
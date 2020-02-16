import React from "react";
import bet365_logo from './assets/bet365_logo.png';
import gt_logo from './assets/gt_logo.png'
import ae_logo from './assets/ae_logo.png'
import bb_logo from './assets/bb_logo.png'
import ms_logo from './assets/ms_logo.png'
import bp_logo from './assets/bp_logo.png'
//find non-copyright??
import './font.css';
import './sponsors.css';



const bet_text = (
    <p>bet365, the world's leading online betting and gaming company, is a driving force in the development of enterprise and Internet technology. Delivering an unrivalled online experience to more than 45 million customers in 20 languages. Innovation continues to be our lifeblood and we pride ourselves on the standards of customer 
    service we deliver. Driven by a shared vision to be the best in our industry, a technology team in excess of 1,300 people work in house to provide the technological advances that enable us to maintain our leadership position. Giving our teams the freedom to innovate is essential to our success. Our award winning business has worked hard to cultivate a culture of creativity where good ideas and a techno entrepreneurial attitude are encouraged and rewarded. Today we continue to push technological boundaries and break new ground in software innovation. </p>
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

const ae_text = (
    <p>American Express is a global services company that provides consumers and businesses with exceptional access to products, insights and experiences that enrich lives and build business success. We make it easier, safer and more rewarding for consumers and businesses to purchase the things they need and for merchants to sell their goods and services through innovative payment, travel and expense management solutions.</p>
)

const ms_text = (
    <p>Morgan Stanley is a leading global financial services Firm providing investment banking, securities, wealth management and investment management services. With offices in more than 43 countries, the Firm's employees serve clients worldwide including corporations, governments, institutions and individuals. Solving complex challenges and fueling economic growth is what we do. We’re guided by our promise of doing first-class business in a first-class way. This means we help our clients create value by steering capital to fuel innovation and advance ideas that bring markets, communities and causes to life. We stand on 80 years of thoughtful investing, our rich heritage shaping our vision for the future. </p>
)

const bb_text =(
    <p>Bloomberg is a major global provider of 24-hour financial news and information, including real-time and historic price data, financials data, trading news, and analyst coverage, as well as general news and sports. Its services, which span its own platform, television, radio, and magazines, offer professional analysis tools for financial professionals. 
    <a target="_blank" href="https://www.bloomberg.com/europe">www.bloomberg.com</a></p>
)

const bp_text = (
    <p>Blush and Pose Photography is a photo booth hire, photography and videography business operating throughout Greater Manchester. We service weddings, birthdays and corporate events. We pride ourselves in providing professional service and high quality results. Our photo booths are uniquely designed in Australia and are sure to leave an impression on all your guests. We offer high quality wedding photography throughout Manchester. <a target="_blank" href="https://blushandposephotography.co.uk/">https://blushandposephotography.co.uk/</a> </p>
)
export default function Sponsors() {
    return(
        <div>
            <hr/>
            <h1 class="titles" style={{color:"#350B4D"}}>Our Sponsors</h1>
            <hr/>
            <h2 class="titles">Gold</h2>

            <div class="sponsors">
                <div class="figure">
                <a target="_blank" href="https://www.bet365.com/#/HO/">
                        <img class="logo_img" src={bet365_logo}
                                alt="" />
                    </a>
                </div>
                <div class="caption">
                    {bet_text}
                </div>
            </div>

            <hr/>

            <h2 class="titles">Silver</h2>

            <div class="sponsors">
                <div class="figure">
                    <a target="_blank" href="https://www.gradtouch.com/register?id=TECH-SOCIETY&src=">
                        <img class="logo_img" src={gt_logo}
                                alt="" />
                    </a>
                </div>
                <div class="caption">
                    {gt_text}
                </div>
            </div>
            
            <hr/>

            <h2 class="titles">Bronze</h2>

            <div class="sponsors">
                <div class="figure">
                    <a target="_blank" href="https://careers.americanexpress.com/students">
                        <img class="logo_img" src={ae_logo}
                                alt="" />
                    </a>
                </div>
                <div class="caption">
                    {ae_text}
                </div>
            </div>


            <div class="sponsors">
                <div class="figure">
                    <a target="_blank" href="https://www.morganstanley.com/people-opportunities/students-graduates">
                        <img class="logo_img" src={ms_logo}
                                alt="" />
                    </a>
                </div>
                <div class="caption">
                    {ms_text}
                </div>
            </div>

            <div class="sponsors">
                <div class="figure">
                    <a target="_blank" href="https://www.bloomberg.com/europe">
                        <img class="logo_img" src={bb_logo}
                                alt="" />
                    </a>
                </div>
                <div class="caption">
                    {bb_text}
                </div>
            </div>

            <h3 class="titles">Photobooth at the May Ball provided by:</h3>

            <div class="sponsors">
                <div class="figure">
                    <a target="_blank" href="https://blushandposephotography.co.uk/">
                        <img class="logo_img" src={bp_logo}
                                alt="" />
                    </a>
                </div>
                <div class="caption">
                    {bp_text}
                </div>
            </div>

            
        </div>
        
    )
}
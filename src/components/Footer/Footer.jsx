import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <div className='footer-logo-image'>
                        <img src={assets.logo} alt="" />
                        <h2>FOODBANK</h2>
                    </div>
                    <p>We celebrate cooking and the iconic dishes made by us can be seen on our following social media pages.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About-us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+919456746667</li>
                        <li>contact@foodBank_help.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 @FoodBank.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer;
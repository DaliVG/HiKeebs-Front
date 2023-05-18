import {FiFacebook , FiTwitter ,FiLinkedin ,FiInstagram , FiPhone} from 'react-icons/fi'; 
import {IoMailOutline } from 'react-icons/io5';
import keycapNav from '../img/keycapnav.png';

function Footer(){ 
    return ( 
        <>
        <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col item">
                <img src={keycapNav} alt="keycapnav" width="120" height="120"/>
                </div>
                <div class="col-sm-4 col item">
                    <h3><strong>Connect with us</strong></h3>
                    <ul class="footer-links">
                        <li><a><FiPhone style={{fontSize:'25px' , paddingRight: '1%'}}/>1234567890</a></li>
                        <li><a><IoMailOutline style={{fontSize:'25px' , paddingRight: '1%'}}/>hikeeps@gmail.com</a></li>
                        <br />                  
                    </ul>
                    </div>
                <div class="col-sm-4 col item">
                <li class="footer-icons"><a href="#"><FiLinkedin /></a><a href="#"><FiFacebook /></a><a href="#"><FiTwitter /></a><a href="#"><FiInstagram /></a></li>
                </div>
            </div>
            <p class="copyright">Hi-Keebs © 2023</p>
        </div>
    </footer>
        </>
    )
}
export default Footer; 
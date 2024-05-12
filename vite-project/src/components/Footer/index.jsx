import "./index.scss"
import { IoSearchOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";




const Footer = () => {
  return (
    <div>
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footertop">
            <h1>Snobella</h1>
            <input type="text" className="inputt" placeholder="Search all product"/><IoSearchOutline className="loopicon"/>

          </div>




{/* dsfsdf */}
          <div className="footermiddle">
            
            <div className="footermiddleleft">
              <p>The wise man therefore always holds selectionThe wise man therefore always rejects pleasures to secure other greater</p>

              <p><CgMail className="gmail" />Snobella@gmail.com</p>
            <p className="ptele">  <a className="aclas" href="#"><BsTelephone /> +748 383 23 14</a></p>
                                                    
            <button type="submit"><LiaTelegram className="submit" />
Send message</button>                
            </div>



            <div className="footermiddleright">
              <nav>
                <ul className="birinci">SHOP
                 
                  <li><a href="#">Shoulder Bag</a></li>
                  <li><a href="#">Backpack</a></li>
                  <li><a href="#">Tote Bag</a></li>
                  <li><a href="#">Hand Bag</a></li>
                  <li><a href="#">Evening bags</a></li>
                  <li><a href="#">Purse</a></li>
                </ul>


                <ul className="ikinci">COMPANY 
                  
                   { <li><a href="#">About us</a></li> }
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Customer service</a></li>
                <li><a href="#">~</a></li>
                <li><a href="#">~</a></li>
                </ul>


               <ul className="ucuncu">Help
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Cancellation of the order</a></li>
                <li><a href="">Dont go back</a></li>
                <li><a href="">Dont go back</a></li>
                <li><a href=""> ~</a></li>

                
               </ul>
              </nav>
            </div>
          </div>









          <div className="footerbottom">

           <div className="p"> <p>© 2020. All rights reserved.</p></div>

            <div className="icon">
            <FaInstagram className="ic"/>
            <CiFacebook className="ic" />
            <FaWhatsapp  className="ic"/>

            </div>
          </div>
        </div>
      </div>
    </footer>




  </div>

    
  )
}

export default Footer
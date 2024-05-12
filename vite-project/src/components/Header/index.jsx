import "./index.scss"
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsBasket3 } from "react-icons/bs";



const Header = () => {
  return (

    <div id="Header">

    <div className="headertop">
        <div className="container">
            <div className="headerleft">
                <a href="#"><BsTelephoneFill />+748 383 23 14</a>
            </div>
         <div className="headerright">
            <nav>
                <ul>
                    <li><a href="#">Terms of Use</a></li> 
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Customer Service</a></li>
                    </ul></nav></div>   
        </div>
    </div>









    <div className="headermiddle">
        <div className="container">
            <div className="headermiddleleft">
                <h1>ChicCharry</h1>
            </div>
            <div className="headermiddleorta">
                <input type="text" placeholder="Search all product" />
                 <IoIosSearch className="loopbt" />
            </div>
            <div className="headermiddleright">

                <nav>
                    <ul>
                        <li><a href="#"> <IoPersonOutline />
Sign Up</a></li>
                        <li><a href="#"><FaRegHeart />
Wishlist</a></li>
                        <li><a href="#"><BsBasket3 />
Basket</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    </div>









    <div className="headerbottom">
        <div className="container">
         <div className="headerbotto">
         <nav>
                <ul>
                    <li><a href="">Evening bags</a></li>
                    <li><a href="">Shoulder bag</a></li>
                    <li><a href="">Backpack</a></li>
                    <li><a href="">Handbag</a></li>
                    <li><a href="">Postman bag</a></li>
                    <li><a href="">Belt bags</a></li>
                </ul>
            </nav>
         </div>
        </div>
    </div>



</div>

  )
}

export default Header
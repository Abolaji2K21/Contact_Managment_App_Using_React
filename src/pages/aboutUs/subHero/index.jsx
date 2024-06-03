
import style from "./index.module.css"

const SubHero = () => {

    return (
        <div className={style.subHeroSection}>
            <div>
                <h3>Our Mission</h3>
                <p> At Contact_Made_Easy, we believe that managing your
                    contacts should be simple, intuitive, and productive.
                    Our mission is to empower individuals and businesses
                    to build stronger relationships through streamlined
                    contact management.</p>
            </div>
            <div>
                <h3>Our Commitment</h3>
                <p> At Contact_Made_Easy, we're committed to providing exceptional
                    customer service and support. Whether you have a question about a
                    feature or need assistance with troubleshooting, our team is here
                    to help you every step of the way.</p>
            </div>
        </div>

    );


}
export default SubHero;
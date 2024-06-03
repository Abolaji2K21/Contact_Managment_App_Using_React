import style from './index.module.css'

const SectionA = () => {
    return (
        <div className={style.subHeroSection}>
            <div>
                <h3>What Sets Us Apart <span style={{color: "#4caf4f", display: "block"}}> </span></h3>
                <ul>
                    <li>User-Centric Design: We prioritize user experience in everything we do. Our interface is
                        designed to be intuitive and easy to navigate, ensuring that you can access the information you
                        need quickly and efficiently.
                    </li>
                    <li>Robust Features: Contact_Made_Easy offers a comprehensive set of features to help you organize,
                        communicate, and collaborate with your contacts effectively. From customizable contact fields to
                        advanced search capabilities, we have everything you need to stay organized and productive.
                    </li>
                    <li>Data Security: We take the security and privacy of your data seriously. Contact_Made_Easy
                        employs industry-standard encryption protocols to keep your information safe and secure at all
                        times.
                    </li>
                </ul>
            </div>
        </div>
    );


}
export default SectionA;
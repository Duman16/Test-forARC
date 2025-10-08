import styles from "./cards.module.css"
import coffeeImage from "../../assets/images/coffee.png";

const Card = () => {
    return (
    <section className={styles.cards}>
        <div className="container">
            <div className={styles.cards_conteiner}>
                <div className={styles.cards_row}>
                    <div className={styles.coffee_image}>
                        <div className={styles.badge}>
                            <span>Новинка</span>
                        </div>
                        <img src={coffeeImage} alt="coffee" />
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
 
export default Card;
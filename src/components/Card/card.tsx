import styles from "./cards.module.css"
import coffeeImage from "../../assets/images/coffee.png";

const Card = () => {
    return (
    <main className={styles.cards}>
        <div className={styles.container}>
            <div className={styles.cards_conteiner}>
                <div className={styles.cards_row}>
                    <div className={styles.coffee_image}>
                        <img src={coffeeImage} alt="coffee" />
                        <div className={styles.badge}>
                            <span>Новинка</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>)
}
 
export default Card;
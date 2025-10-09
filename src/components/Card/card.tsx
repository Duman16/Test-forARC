import styles from "./cards.module.css";
import coffeeImage from "../../assets/images/coffee.png";
import { mockProducts } from "../../data/mockData";
import rating from "../../assets/images/rating.svg";

const Card = () => {
  return (
    <section className={styles.cards}>
      <div className="container">
        <div className={styles.cards_container}>
          {mockProducts.map((product) => (
            <div key={product.id} className={styles.card_item}>
              <div className={styles.cards_row}>
                {/* Изображение кофе */}
                <div className={styles.coffee_image}>
                {[1, 2, 3, 4, 5].includes(product.id) && (
                    <div className={styles.badge}>
                        <span>Новинка</span>
                    </div>
                )}
                  <img src={coffeeImage} alt={product.name} />
                </div>
                
                {/* Текстовая информация */}
                <div className={styles.coffee_text}>
                  <p className={styles.article}>Артикул: {product.article}</p>
                  <h3 className={styles.title}>{product.name}</h3>
                  <p className={styles.description}>{product.description}</p>
                  
                  {/* Выбор веса */}
                  <div className={styles.weight_selector}>
                    500g (1)
                  </div>
                  
                  {/* Детали продукта */}
                  <div className={styles.details}>
                    <div className={styles.detail_row}>
                      <span>Тип:</span>
                      <span>Кофе</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Обжарка:</span>
                      <img src={rating} alt="rating" />
                    </div>
                    <div className={styles.detail_row}>
                      <span>Форма:</span>
                      <span>Зерна</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Состав:</span>
                      <span>Арабика 100%</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Объем:</span>
                      <span>500g</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Страна происхождения:</span>
                      <span>Южная Америка</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Страна производитель:</span>
                      <span>Мексика</span>
                    </div>
                  </div>
                  <div className={styles.price_section}>
                    <span className={styles.price}>
                      {product.price.toLocaleString('ru-RU')} ₸
                    </span>
                    <button aria-label="Удалить" className={styles.delete_btn}>
                      
                    </button>
                    <div className={styles.quantity}>1</div>
                    <button aria-label="Добавить" className={styles.add_btn}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
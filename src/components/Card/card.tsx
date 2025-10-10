import React, { useEffect, useState } from "react";
import styles from "./cards.module.css";
import coffeeImage from "../../assets/images/coffee.png";
import rating from "../../assets/images/rating.svg";
import add from "../../assets/images/add.png";

interface Product {
  id: number;
  article: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  type: string;
  roast: string;
  form: string;
  composition: string;
  volume: string;
  origin: string;
  manufacturer: string;
}

const Card = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Загружаем данные из db.json
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    console.log("Текущая корзина:", [...cartItems, product]);
  };

  return (
    <section className={styles.cards}>
      <div className="container">
        <div className={styles.cards_container}>
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className={styles.card_item}>
              <div className={styles.cards_row}>
                {/* Изображение кофе */}
                <div className={styles.coffee_image}>
                  <div className={styles.badge}>
                    <span>Новинка</span>
                  </div>
                  <img src={coffeeImage} alt={product.name} />
                </div>

                {/* Текстовая информация */}
                <div className={styles.coffee_text}>
                  <p className={styles.article}>Артикул: {product.article}</p>
                  <h3 className={styles.title}>{product.name}</h3>
                  <p className={styles.description}>{product.description}</p>
                  <p className={styles.weight}>{product.weight}</p>

                  {/* Детали продукта */}
                  <div className={styles.details}>
                    <div className={styles.detail_row}>
                      <span>Тип:{product.type}</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Обжарка:</span>
                      <img src={rating} alt="rating" />
                    </div>
                    <div className={styles.detail_row}>
                      <span>Форма:{product.roast }</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Состав: {product.composition}</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Объем: {product.volume}</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Страна происхождения: {product.origin}</span>
                    </div>
                    <div className={styles.detail_row}>
                      <span>Страна производитель:: {product.manufacturer}</span>
                    </div>
                  </div>

                  {/* Цена и кнопка */}
                  <div className={styles.price_section}>
                    <span className={styles.price}>
                      {product.price.toLocaleString("ru-RU")} ₸
                    </span>
                    <button
                      className={styles.btnAddToCart}
                      onClick={() => handleAddToCart(product)}
                    >
                      <img src={add} alt="Добавить в корзину" />
                      Добавить в корзину
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
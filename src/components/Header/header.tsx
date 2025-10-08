import { useState } from "react";
import styles from "./header.module.css";

function Header() {
  const [language, setLanguage] = useState<"RU" | "ENG" | "KZ">("RU");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang: "RU" | "ENG" | "KZ") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_row}>
          <div className={styles.header_logo}>COFFEINO</div>

          <div className={styles.header_nav}>
            <ul>
              <li><a href="#!">{language === "RU" ? "Главная" : language === "ENG" ? "Home" : "Басты бет"}</a></li>
              <li><a href="#!">{language === "RU" ? "Каталог" : language === "ENG" ? "Catalog" : "Каталог"}</a></li>
              <li><a href="#!">{language === "RU" ? "Поиск заказов" : language === "ENG" ? "Order search" : "Тапсырыс іздеу"}</a></li>
              <li><a href="#!">{language === "RU" ? "О нас" : language === "ENG" ? "About" : "Біз туралы"}</a></li>
              <li><a href="#!">{language === "RU" ? "Контакты" : language === "ENG" ? "Contacts" : "Байланыс"}</a></li>
            </ul>
          </div>

          <div className={styles.header_lang}>
            <div className={styles.lang_dropdown}>
              <button
                className={styles.lang_button}
                onClick={() => setIsOpen((prev) => !prev)}>
                {language} ⌄
              </button>
              {isOpen && (
                <ul className={styles.lang_menu}>
                  <li onClick={() => handleSelect("ENG")}>ENG</li>
                  <li onClick={() => handleSelect("RU")}>RU</li>
                  <li onClick={() => handleSelect("KZ")}>KZ</li>
                </ul>)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

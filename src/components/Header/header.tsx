import { useState } from "react";
import "./header.css";

function Header() {
  const [language, setLanguage] = useState<"RU" | "ENG" | "KZ">("RU");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang: "RU" | "ENG" | "KZ") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_logo">COFFEINO</div>

          <div className="header_nav">
            <ul>
              <li><a href="#!">{language === "RU" ? "Главная" : language === "ENG" ? "Home" : "Басты бет"}</a></li>
              <li><a href="#!">{language === "RU" ? "Каталог" : language === "ENG" ? "Catalog" : "Каталог"}</a></li>
              <li><a href="#!">{language === "RU" ? "Поиск заказов" : language === "ENG" ? "Order search" : "Тапсырыс іздеу"}</a></li>
              <li><a href="#!">{language === "RU" ? "О нас" : language === "ENG" ? "About" : "Біз туралы"}</a></li>
              <li><a href="#!">{language === "RU" ? "Контакты" : language === "ENG" ? "Contacts" : "Байланыс"}</a></li>
            </ul>
          </div>

          <div className="header_lang">
            <div className="lang_dropdown">
              <button
                className="lang_button"
                onClick={() => setIsOpen((prev) => !prev)}>
                {language} ⌄
              </button>
              {isOpen && (
                <ul className="lang_menu">
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

import Card from '../../components/Card/card.tsx';
// import Cart from '../../components/Cart/Cart.tsx';
import styles from'./main.module.css'


const Main = () => {
    return ( <section className={styles.main}>
                
                <div className="container">
                    {/* <Cart /> */}
                    <p className={styles.Catalog}> Каталог товаров</p>
                    <Card />
                </div>
            </section>
);}
 
export default Main;
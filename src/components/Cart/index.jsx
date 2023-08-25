import React from 'react';
import classes from './cart.module.css';

import cartProduct1 from '../../assets/cartProduct-1.png';
import cartProduct2 from '../../assets/cartProduct-2.png';
import cartProduct3 from '../../assets/cartProduct-3.png'

export const Cart = () => {
  return (
    <div className={classes.cart}>
      <div className={classes.cartHeader}>
        <h3>Корзина</h3>
        <button>4</button>
      </div>
      <div className={classes.cartMain}>
        <article className={classes.cartBlock}>
          <img src={cartProduct1} alt="Product" />
          <div className={classes.cartInfo}>
            <h4 className={classes.cartName}>Картошка фри</h4>
            <p className={classes.cartG}>180г</p>
            <p className={classes.cartPrice}>245₽</p>
          </div>
          <div className={classes.cartCounts}>
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>
        </article>

        <article className={classes.cartBlock}>
          <img src={cartProduct2} alt="Product" />
          <div className={classes.cartInfo}>
            <h4 className={classes.cartName}>Супер сырный</h4>
            <p className={classes.cartG}>512г</p>
            <p className={classes.cartPrice}>550₽</p>
          </div>
          <div className={classes.cartCounts}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </article>

        <article className={classes.cartBlock}>
          <img src={cartProduct3} alt="Product" />
          <div className={classes.cartInfo}>
            <h4 className={classes.cartName}>Жгучий хот-дог</h4>
            <p className={classes.cartG}>245г</p>
            <p className={classes.cartPrice}>239₽</p>
          </div>
          <div className={classes.cartCounts}>
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>
        </article>
      </div>
      <div className={classes.cartFooter}>
        <button>Оформить заказ</button>
        <button>Бесплатная доставка</button>
      </div>
    </div>
  )
}
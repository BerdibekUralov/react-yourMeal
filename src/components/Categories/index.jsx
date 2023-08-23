import React from 'react';
import classes from './categories.module.css';

import ctgImages1 from '../../assets/ctg-1.png';
import ctgImages2 from '../../assets/ctg-2.png';
import ctgImages3 from '../../assets/ctg-3.png';
import ctgImages4 from '../../assets/ctg-4.png';
import ctgImages5 from '../../assets/ctg-5.png';
import ctgImages6 from '../../assets/ctg-6.png';
import ctgImages7 from '../../assets/ctg-7.png';
import ctgImages8 from '../../assets/ctg-8.png';
import ctgImages9 from '../../assets/ctg-9.png';

export const Categories = () => {
  return (
    <div className={classes.categories}>
      <button className={`${classes.active} ${classes.categoriesButton}`}><img src={ctgImages1} alt="Бургеры" /> Бургеры</button>
      <button className={classes.categoriesButton}><img src={ctgImages2} alt="Закуски" /> Закуски</button>
      <button className={classes.categoriesButton}><img src={ctgImages3} alt="Хот-доги" /> Хот-доги</button>
      <button className={classes.categoriesButton}><img src={ctgImages4} alt="Комбо" /> Комбо</button>
      <button className={classes.categoriesButton}><img src={ctgImages5} alt="Шаурма" /> Шаурма</button>
      <button className={classes.categoriesButton}><img src={ctgImages6} alt="Пицца" /> Пицца</button>
      <button className={classes.categoriesButton}><img src={ctgImages7} alt="Вок" /> Вок</button>
      <button className={classes.categoriesButton}><img src={ctgImages8} alt="Десерты" /> Десерты</button>
      <button className={classes.categoriesButton}><img src={ctgImages9} alt="Соусы" /> Соусы</button>
    </div>
  )
}

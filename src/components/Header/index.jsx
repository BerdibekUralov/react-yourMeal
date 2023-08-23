import React from 'react'
import classes from './header.module.css';
import Logo from '../../assets/logo.png';
import HeaderBurger from '../../assets/header-burger.png'
export const Header = () => {
  return (
    <div className={classes.header}>
      <img className={classes.headerLogo} src={Logo} alt="Your Meal :)" />
      <div className={classes.headerBlock}>
        <img className={classes.headerBurger} src={HeaderBurger} alt="Только самые сочные бургеры!" />

        <div className={classes.headerInfo}>
          <h1 className={classes.headerTitle}>Только самые <span>сочные бургеры!</span></h1>
          <p className={classes.headerDescription}>Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </div>
  )
}
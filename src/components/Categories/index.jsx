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


const categories = [
  {
    id: 1,
    name: 'Бургеры',
    icon: ctgImages1,
  },
  {
    id: 2,
    name: 'Закуски',
    icon: ctgImages2,
  },
  {
    id: 3,
    name: 'Хот-доги',
    icon: ctgImages3,
  },
  {
    id: 4,
    name: 'Комбо',
    icon: ctgImages4,
  },
  {
    id: 5,
    name: 'Шаурма',
    icon: ctgImages5,
  },
  {
    id: 6,
    name: 'Пицца',
    icon: ctgImages6,
  },
  {
    id: 7,
    name: 'Вок',
    icon: ctgImages7,
  },
  {
    id: 8,
    name: 'Десерты',
    icon: ctgImages8,
  },
  {
    id: 9,
    name: 'Соусы',
    icon: ctgImages9,
  }
]

export const Categories = () => {
  return (
    <ul className={classes.categories}>
      {categories &&
        categories.map((categorie) => {
          return(
            <li key={categorie.id} className={classes.categoriesButton}>
              <img src={categorie.icon} alt={categorie.name} />
              {categorie.name}
            </li>
          )
        })
      }
    </ul>
  )
}

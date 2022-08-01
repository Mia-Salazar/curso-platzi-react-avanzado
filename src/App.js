import React from 'react'

import { ListCategories } from './components/ListCategories'
import { GlobalStyle } from './GlobalStyles'
import { CardList } from './components/CardList'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListCategories />
    <CardList />
  </div>
)

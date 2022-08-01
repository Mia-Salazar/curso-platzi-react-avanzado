import React from 'react'

import { ListCategories } from './components/ListCategories'
import { GlobalStyle } from './GlobalStyles'
import { CardList } from './components/CardList'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListCategories />
    <CardList />
  </div>
)

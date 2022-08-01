import React from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const list = [1, 2, 3, 4, 5, 6]
  return (
    <List>
      {
        list.map(category => <Item key={category}><Category /></Item>)
      }
    </List>
  )
}
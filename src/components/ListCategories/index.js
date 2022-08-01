import React from 'react'

import { Category } from '../Category'
import { List, Item } from './styles'
import data from '../../../api/db.json'

export const ListCategories = () => {
  return (
    <List>
      {
        data.categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
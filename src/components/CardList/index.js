import React from 'react'
import { Card } from '../Card'

export const CardList = () => {
  return (
    <ul>
      {[1, 2, 3].map(id => <Card key={id} id={id} />)}
    </ul>
  )
}

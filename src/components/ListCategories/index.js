import React, { useEffect, useState } from 'react'

import { Category } from '../Category'
import { List, Item } from './styles'

export const ListCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(function () {
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
  /* with async await
    useEffect(() => {
        const fetchCategories = async () => {
        const response = await window.fetch(
            'https://petgram-server-edsf8xpy2.now.sh/categories'
        )
        const data = await response.json()
        setCategories(data)
        }

        fetchCategories()
    }, [])
  */
  /* with axios
    useEffect(() => {
        const fetchApiServerCategories = async () => {
        const apiServer = await axios.get(
            'https://clongram-api-j2hwstk1d.now.sh/categories'
        );
        setCategories(apiServer.data);
        };
        fetchApiServerCategories();
    }, []);
  */
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
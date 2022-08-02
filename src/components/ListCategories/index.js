import React, { Fragment, useEffect, useState } from 'react'

import { Category } from '../Category'
import { List, Item } from './styles'

export const ListCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
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
    }, []);
  */
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    /* Avoid memory leak */
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

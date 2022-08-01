import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = 'unknown', alt = 'a image', aria = 'a link'}) => (
  <Anchor href={path} aria-label={aria}>
    <Image src={cover} alt={alt} />
    {emoji}
  </Anchor>
)
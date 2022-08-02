import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  list-style-type: none;
  margin-bottom: 20px;

  &.fixed {
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.6);
    z-index: 1;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`

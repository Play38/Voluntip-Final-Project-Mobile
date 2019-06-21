/**
 * @format
 */

import React from 'react'
import ListItem from '../src/Comp/ListItem'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('ListItem tests', function() {
  test('renders correctly', async () => {
    const item = {
      id: 20,
      image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
      name: 'test',
      price: 100,
      updateCoins: 80
    }

    const testRenderer = renderer.create(
      <ListItem
        id={item.id}
        coins={item.coins}
        price={item.price}
        name={item.name}
        img={item.image}
        update={item.updateCoins}
      />
    )
    expect(testRenderer.root.props).toHaveProperty('id')
    expect(testRenderer.root.props).toHaveProperty('coins')
    expect(testRenderer.root.props).toHaveProperty('price')
    expect(testRenderer.root.props).toHaveProperty('name')
    expect(testRenderer.root.props).toHaveProperty('img')
    expect(testRenderer.root.props).toHaveProperty('update')
  })

  test('checks if undefiened ', async () => {
    const item = {
      id: 20,
      image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
      name: 'test',
      price: 100,
      updateCoins: 80
    }

    const testRenderer = renderer.create(
      <ListItem
        id={item.id}
        coins={item.coins}
        price={item.price}
        name={item.name}
        img={item.image}
        update={item.updateCoins}
      />
    )
    expect(testRenderer.root.props.item).toBeUndefined()
  })
  afterAll(() => setTimeout(() => process.exit(), 1000)) // Had to put it, without it jest is stuck
})

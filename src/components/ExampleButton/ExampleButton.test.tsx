import React from 'react'
import { shallow } from 'enzyme'
import ExampleButton from './ExampleButton'

describe('Example Button component', () => {
  it('Test click event', () => {
    const handleClick = jest.fn()
    const button = shallow(<ExampleButton label="Normal" onClick={handleClick} />)
    button.find('button').simulate('click')
    expect(handleClick.mock.calls.length).toEqual(1)
  })
})

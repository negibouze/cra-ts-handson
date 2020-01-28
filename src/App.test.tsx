import React from 'react'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react'
import App from './App'

describe('Example Button component', () => {
  it('renders welcome message element', () => {
    const wrapper = shallow(<App />)
    const welcome = <h2>Welcome to React</h2>
    expect(wrapper).toContainReact(welcome)
  })

  it('renders message', () => {
    const { getByText } = render(<App />)
    expect(getByText('Learn React')).toBeInTheDocument()
  })
})

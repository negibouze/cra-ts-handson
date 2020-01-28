import React from 'react'
import './ExampleButton.scss'

export interface ExampleButtonProps {
  label: string
  onClick: () => void
}

const ExampleButton: React.FC<ExampleButtonProps> = props => {
  return (
    <button className="test" onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default ExampleButton

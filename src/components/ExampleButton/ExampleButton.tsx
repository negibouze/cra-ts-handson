import React from 'react'

export interface ExampleButtonProps {
  label: string
  onClick: () => void
}

const ExampleButton: React.FC<ExampleButtonProps> = props => {
  return <button onClick={props.onClick}>{props.label}</button>
}

export default ExampleButton

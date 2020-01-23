import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ExampleButton from './ExampleButton'

storiesOf('Button', module).add('normal', () => <ExampleButton label="Normal" onClick={action('clicked')} />)

import React from 'react'
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'

import App from './App'
import './index.css'
import { Provider } from './context/context'

ReactDOM.render(
    <SpeechProvider appId = "e939bb82-f188-4ee5-9320-11258cce5089" language="en-US" >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
     document.querySelector('#root'));
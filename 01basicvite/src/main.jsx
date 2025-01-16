import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Youtube from './Youtube.jsx'


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to vist google'
}

function MyApp() {
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target= "_blank">Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
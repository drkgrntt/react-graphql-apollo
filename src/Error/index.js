import React from 'react'

import '../style.css'

const ErrorMessage = ({ error }) => (
    <div classname="ErrorMessage">
        <small>{error.toString()}</small>
    </div>
)

export default ErrorMessage
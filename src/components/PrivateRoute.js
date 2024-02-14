import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ isLoggedIn, children }) {
    return (
        <div>
            {
                isLoggedIn ? children : <Navigate to="/login" />
            }
        </div>
    )
}
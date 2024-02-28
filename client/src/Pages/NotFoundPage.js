import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../NotFoundPage.css'; // Import the CSS file for styling

export default function NotFoundPage() {
    const location = useLocation();

    return (
        <div className="not-found-container">
            <h1 className="not-found-text">404 Not Found</h1>
            <p className="not-found-message">The page at <strong>{location.pathname}</strong> does not exist.</p>
            <Link to="/" className="back-button">Go Back</Link>
        </div>
    );
}

import React from "react";
import NotFound from "../assets/images/empty.svg";

import './EmptyState.css';

const EmptyState = () => {
    return (
        <div className="empty-state">
            <img src={NotFound} alt="Not Found" width="200" height="200"/>
            <span>No Pokemon Found.</span>
        </div>
    );
};

export default EmptyState;

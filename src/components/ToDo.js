import React from 'react';

export const ToDo = ({ isCompleted, toggleComplete, description }) => (
    <li>
        <input type="checkbox" checked={ isCompleted } onChange={ toggleComplete } />
        <span>{ description }</span>
    </li>
)

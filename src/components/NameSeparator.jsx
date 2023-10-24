import React from 'react'

export default function NameSeparator({ name }) {
    const nameTab = name.split(" ");
    return (
        <ul>
            {nameTab.map(n => <li key={n}>{n}</li>)}
        </ul>
    )
}
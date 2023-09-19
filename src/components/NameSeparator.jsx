import React from 'react'

export default function NameSeparator({ name }) {
    const nameTab = name.split(" ");
    console.log(nameTab)
    return (
        <ul>
            {nameTab.map(n => <li key={n}>{n}</li>)}
        </ul>
    )
}
'use client'
import { useState } from 'react'
import { Input } from 'antd';

export default function Header() {
    const [count, setCount] = useState(0)

    return (
        <Input placeholder="Basic usage" size="large" />
    )
}
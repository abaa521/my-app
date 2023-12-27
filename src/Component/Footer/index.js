'use client'

import { Checkbox } from 'antd'
import { useState } from 'react'

export default function Footer() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Checkbox>Checkbox</Checkbox>
            <span>0/0 全部/已完成</span>
        </div>

    )
}
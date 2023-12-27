'use client'

import { useState } from 'react'
import { Checkbox } from 'antd'

export default function Item() {
    const [count, setCount] = useState(0)
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
    )
}
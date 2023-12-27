'use client'

import { useState } from 'react'
import { Checkbox, List, Typography } from 'antd'

export default function TodoList({ todos }) {

    return (
        <List
            bordered
            dataSource={todos}
            renderItem={(item) => (
                <List.Item>
                    <Checkbox>{item.name}</Checkbox>
                </List.Item>
            )}
        />
    )
}
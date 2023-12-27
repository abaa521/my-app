'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Button, Flex } from 'antd';
import Counter from '../Component/Counter'
import List from '@/Component/TodoList';
import Footer from '@/Component/Footer';
import Header from '@/Component/Header';
import { useState } from 'react';
import { Card, Space } from 'antd'
import TodoList from '@/Component/TodoList';

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, name: '吃飯', done: false },
    { id: 2, name: '睡覺', done: false },
    { id: 3, name: '打程式', done: false },
  ]);

  return (
    <main>
      <Card>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Header />
          <TodoList todos={todos} />
          <Footer />
        </Space>
      </Card>
      <span>修改</span>
    </main>
  );
}


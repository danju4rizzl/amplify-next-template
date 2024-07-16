'use client'

import { useState, useEffect } from 'react'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '@/amplify/data/resource'
import { Amplify } from 'aws-amplify'
import outputs from '@/amplify_outputs.json'
import '@aws-amplify/ui-react/styles.css'

import { Button, useAuthenticator } from '@aws-amplify/ui-react'
import { redirect } from 'next/navigation'
import { PerformanceTable } from '@/components/performanceTable/PerformanceTable'

import { demoPerformanceData } from '@/components/performanceTable/data'

Amplify.configure(outputs)

const client = generateClient<Schema>()

export default function Page() {
  const { user } = useAuthenticator((context) => [context.user])

  const [todos, setTodos] = useState<Array<Schema['Todo']['type']>>([])

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items])
    })
  }

  useEffect(() => {
    listTodos()
  }, [])

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt('Todo content')
    })
  }

  // Redirect the user when we user changes can do this in middleware
  useEffect(() => {
    if (!user) {
      redirect('/')
    }
  }, [user])

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
      <PerformanceTable data={demoPerformanceData} />
    </main>
  )
}

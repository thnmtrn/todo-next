import Head from 'next/head'
import TodoApp from '../components/TodoApp'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoApp/>
    </div>
  )
}

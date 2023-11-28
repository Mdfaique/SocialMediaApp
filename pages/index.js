import Layout from '../components/Layout'
import { useContext } from 'react'
import { UserContext } from '../context'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [state,setState] = useContext(UserContext)
  return (
    <Layout >
    <h1 className='text-success'>My app </h1>
    <p>{JSON.stringify(state)}</p>
    </Layout>
  )
} 
 
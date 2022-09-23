import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1 className= {'title'}>Home Page</h1>
      <h2>
        Ir a <Link href="/about">About</Link>
      </h2>

      <p className={'description'}>        
        <code className={'code'}>/about.js</code>
      </p>
    </MainLayout>
  )
}

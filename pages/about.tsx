import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (    
    <>
      <h1 className={'title'}>About Page</h1>
      <h2> Ir a <Link href="/">Home</Link> </h2>     
      <p className={'description'}>
        <code className={'code'}>/about</code>
      </p>        
    </>
  )
}

// use this function in: _app.js
AboutPage.getLayout = function getLayout(page: JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )  
}
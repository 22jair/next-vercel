import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (    
    <>
      <h1 className={'title'}>Pracing Page</h1>
      <h2> Ir a <Link href="/">Home</Link> </h2>     
      <p className={'description'}>
        <code className={'code'}>/index</code>
      </p>        
    </>
  )
}

// use this function in: _app.js
PricingPage.getLayout = function getLayout(page: JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )  
}
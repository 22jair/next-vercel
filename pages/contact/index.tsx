
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>
        
      <h1 className={'title'}>Contact Page</h1>

      <h2>
        Ir a <Link href="/">Home</Link>
      </h2>     

      <p className={'description'}>
        <code className={'code'}>/contact</code>
      </p>

    </MainLayout>    
  )
}

import { redirect } from 'next/navigation'
 
export default async function Page({ params }) {
    redirect('https://github.com/Tolga1452/elysium/blob/main/resources/terms-of-service.md')
    return (
        <p>Redirected to the Terms of Service...</p>
    )
  }
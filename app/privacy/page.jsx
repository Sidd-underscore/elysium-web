import { redirect } from 'next/navigation'
 
export const metadata = {
    title: 'Privacy Policy | Elysium',
    description: 'The privacy policy of your favorite open-source Discord AI bot.',
  }  


export default async function Page({ params }) {
    redirect('https://github.com/Tolga1452/elysium/blob/main/resources/privacy-policy.md')
    return (
        <p>Redirected to the Privacy Policy...</p>
    )
  }
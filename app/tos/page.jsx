import { redirect } from 'next/navigation'

export const metadata = {
    title: 'Terms of Service | Elysium',
    description: 'The terms of service of your favorite open-source Discord AI bot.',
}

export default async function Page({ params }) {
    redirect('https://github.com/Tolga1452/elysium/blob/main/resources/terms-of-service.md')
    return (
        <p>Redirected to the Terms of Service...</p>
    )
}
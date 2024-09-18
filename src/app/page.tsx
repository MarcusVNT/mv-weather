import { ApolloClient, InMemoryCache } from '@apollo/client'
import HomePage from '@/Pages/Home'

const client = new ApolloClient({
  uri: 'https://weather-graphql.onrender.com/',
  cache: new InMemoryCache(),
})

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.tsx'
import { ApolloProvider } from '@apollo/client'
import client from './Apollo/apolloClient.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
   <RouterProvider router={router}></RouterProvider>
   </ApolloProvider>
  </StrictMode>,
)

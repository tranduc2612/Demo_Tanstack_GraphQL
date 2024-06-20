import { useEffect } from 'react';
import './App.css'
import client from './client';
import { gql } from '@apollo/client';
function App() {
  useEffect(() => {
    
    client
      .query({
        query: gql`
          query GetLocations {
            locations {
              id
              name
              description
              photo
            }
          }
        `,
      })
      .then((result) => console.log(result));
  }, [])
  return (
    <>

    </>
  )
}

export default App

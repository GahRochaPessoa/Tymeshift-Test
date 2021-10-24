import { useEffect, useState } from 'react';
import { GlobalStyle } from './styles/global';
import { AppContainer, CardsContainer } from './styles/AppStyles'
import { Header } from './components/header';
import { Card } from './components/card';
/* import {useFetch} from './hooks/useFetch'; */
import {ApiTypes} from './types/apiTypes'
function App() {

  const [infoCards, setInfoCards] = useState([])
/* const {data: infoCards} = useFetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations') */
  
  useEffect(()=>{
      fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
      .then(res => res.json())
      .then(data => setInfoCards(data))
  }, [])

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <CardsContainer>       
         { 
          infoCards && infoCards.map((info: ApiTypes, index: number)=>{
            return (
            <Card 
              description={info.description} 
              name={info.name} 
              key={index} 
              createdAt={info.createdAt} 
              userCount={info.userCount}
            />
            )
          })

        }
      </CardsContainer>
    </AppContainer>
  );
}

export default App;

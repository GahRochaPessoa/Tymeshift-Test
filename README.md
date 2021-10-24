Tymeshift Test

Hey! First of all it's really a pleasure to participate of this part of the interview.

I got two ways to implement the task, and i will explain in next steps:

1) I thougth in a better way to ensure usability to final user, using SWR (state-while-revalidate).
If was asking to implement a full CRUD, delete, create and update some card element would bring some performance complications. 
The principal one: Everytime that we would need to call the endpoint from API, all the data would re-render the entire application. 
Using SWR this won't happen, because it will just re-render the parts that really need to be re-rendered.

2) I thougth in the most basic example of fetching the data from an API, and just rendering in a useEffect hook as usual.
I really prefer the first one, not because of time to calling an api or something (in the end it's almost the same), but just because it's better for the final user.
Ok, to make the SWR call work, will be so simple:
just uncomment the lines below:
import {useFetch} from './hooks/useFetch'; at line 8
const {data: infoCards} = useFetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations'); at line 13

And comment this lines here:
import { useEffect, useState } from 'react'; line 1
const [infoCards, setInfoCards] = useState([]); line 11
/* useEffect(()=>{
      fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
      .then(res => res.json())
      .then(data => setInfoCards(data))
  }, []) */ (all the useEffect hook, lines 14 until 18)

I hope you guys enjoy!
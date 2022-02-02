import { createContext } from 'react';
import {useState, useEffect} from 'react';

export const JokeContext = createContext();

export const Joke = (props) => {
    const [getJoke, setJoke] = useState([]);
    //curJoke is used to keep track of current notifications joke reference
    const [curJoke, setCurJoke] = useState([]);
    //retrieveJoke is used to alert the useEffect to obtain a new joke
    const [retrieveJoke, setRetrieveJoke] = useState(false);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const response = await fetch('https://v2.jokeapi.dev/joke/Any');
          const json = await response.json();
      
          setJoke(json);
        }catch (error) {
            console.error(error);
        }
      }
  
      loadData();
    }, [retrieveJoke]);
    
    return(
        <JokeContext.Provider value={[curJoke, getJoke, retrieveJoke, setRetrieveJoke, setCurJoke]}>
            {props.children}
        </JokeContext.Provider>
    );
}
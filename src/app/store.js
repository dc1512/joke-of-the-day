import { useState, createContext, useContext, useCallback } from 'react';

const useStore = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [punchlineHidden, setPunchlineHidden] = useState(true);

  return (
    {
      error,
      loading,
      setup,
      punchline,
      punchlineHidden,
      getRandomJoke: useCallback(async () => {
        setPunchlineHidden(true);
        setError(false);
        setLoading(true);
      
        // const jokesDomain = 'https://karljoke.herokuapp.com';
        // karljoke.herokuapp.com is currently down so I downloaded the repo locally and tested it from there:
        const jokesDomain = 'http://localhost:5000';
        const jokesPath = '/jokes/random';
        const jokesUrl = `${jokesDomain}${jokesPath}`;
      
        try {
          const response = await fetch(jokesUrl);
          // const response = {};
          // response.status = 404;
          if (response.status === 200) {
            const joke = await response.json();
            setSetup(joke.setup);
            setPunchline(joke.punchline);
          } else {
            throw new Error("Bad response");
          }
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }, []),
      togglePunchline: useCallback(() => setPunchlineHidden(state => !state), []),
    }
  )
};

const JokeContext = createContext(null);

export default function JokeContextProvider({children}) {
  return (
    <JokeContext.Provider value={useStore()}>
      {children}
    </JokeContext.Provider>
  );
}

export const useError = () => useContext(JokeContext).error;
export const useLoading = () => useContext(JokeContext).loading;
export const useGetRandomJoke = () => useContext(JokeContext).getRandomJoke;
export const useSetup = () => useContext(JokeContext).setup;
export const usePunchline = () => useContext(JokeContext).punchline;
export const usePunchlineHidden = () => useContext(JokeContext).punchlineHidden;
export const useTogglePunchline = () => useContext(JokeContext).togglePunchline;

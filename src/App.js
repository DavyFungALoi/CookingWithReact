import React, {useState} from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme}}>
    Counter
   <Counter initialCount = {0} />
   CounterHooks
   <CounterHooks initialCount = {0} />
   <button onClick = {() => setTheme(PrevTheme => {
    return PrevTheme === 'red' ? 'blue': 'red'})}
    >Toggle Theme</button>

   </ThemeContext.Provider>
  )
}

export default App;

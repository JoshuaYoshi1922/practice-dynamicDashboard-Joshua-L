
import './App.css';
import Greeting from './components/Greeting';
import IsPremium from './components/IsPremium';
import TaskList from './components/TaskList';


function App() {

  return (
    <>
    {new Date().toLocaleDateString()}
    <Greeting />  
    <IsPremium />
    <TaskList  />
    
  
      
    </>
  )
}

export default App


import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/userContextProvider';

function App() {
  
  return (
    <UserContextProvider>
      <h1> this the context api's </h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App

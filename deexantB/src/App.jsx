import Navbar from "./components/Navbar.jsx";
import './main.css'
function App() {
  console.log('hi');
  return (
    <div>
      <h1 className="bg-blue-700 underline text-white animate-bounce to-lime-200">MY first react app</h1>
       <Navbar username="DEExant Bharti"/>
    </div>
  );
}
export default App;
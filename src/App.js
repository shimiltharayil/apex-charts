import "./App.css";
import ApexCharts from "./ApexCharts";
import { auth, provider } from "./firebase";


function App() {
  const signIn = ()=>{
    auth.signInWithPopup(provider).then((user)=>)
  }

  return (
    <div className="app">
        <h1>Graph App</h1>
        <button>Sign In</button>
        <ApexCharts />
    </div>
  );
}

export default App;

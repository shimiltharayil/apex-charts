import "./App.css";
import ApexCharts from "./ApexCharts";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {
  const [user, loading, error] = useAuthState(auth);
  const signIn = ()=>{
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }

  return (
    <div className="app">
      <h1>Graph App</h1>
      {loading && <h1>Loading..</h1>}
      {user ? <ApexCharts /> : <button onClick={signIn}>Sign In</button>}
    </div>
  );
}

export default App;

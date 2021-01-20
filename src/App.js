import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header.jsx";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import {useStateValue} from "./StateProvider"
function App() {
  const [{user},dispatch]=useStateValue()

  return (
    <div className="App">
      {!user ? (
        <Login/>
      ) : (
        <div>
          <Header />
          <div className="App_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

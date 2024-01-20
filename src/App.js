import "./App.css";
import LoginPage from "./Components/LoginPage";
import { AuthProvider } from "./Context/AuthContext";
import { UserProvider } from "./Context/UserContext";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <Navigation />
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

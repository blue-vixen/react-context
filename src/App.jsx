import Users from './components/Users';
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './contexts/Store';
import './App.css';

function App() {
  return (
    <div className="App container mt-5">
      <Store>
        <Users></Users>
      </Store>
    </div>
  );
}

export default App;

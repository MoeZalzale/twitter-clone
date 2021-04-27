
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Right from './components/Right'
function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed />
      <Right />
    </div>
  );
}

export default App;

import './App.css';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function App() {
  const click = () => 
  {
    alert('hello')
  }

  return (
    <div className="App">
      <Button
      color='secondary'
        onClick={() => { click() }}
        startIcon={<Delete/>}>
        hello
      </Button>
    </div>
  );
}

export default App;

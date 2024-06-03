import './App.css';
import ListGroup from './components/ListGroup';

function App() {
  let items = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
  let heading = 'Tottie Kop';
  return (
    <>
      <ListGroup items={items} heading={heading} />
    </>
  );
}

export default App;

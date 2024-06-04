import './App.css';
import Like from './components/Like';
import ListGroup from './components/ListGroup';
// import ListGroup from './components/ListGroup';
import Alert from './components/alert';
import Button from './components/button';
import { useState } from 'react';

function App() {
  let items = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
  let heading = 'Cities';

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          Hello Owen!
        </Alert>
      )}

      <Button
        color={'primary'}
        onClick={() => {
          setShowAlert(true);
        }}
      >
        Show Alert
      </Button>

      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />

      <Like />
    </>
  );
}

export default App;

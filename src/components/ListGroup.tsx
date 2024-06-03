import { useState } from 'react';

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup(props: ListGroupProps) {
  // let items = ['new York', 'Los Angeles', 'Chicago', 'Houston'];
  // items = [];

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {props.items.length === 0 ? (
          <p>No Items Found</p>
        ) : (
          props.items.map((item: string, index: number) => (
            <li
              onClick={() => {
                let selectedIndex = index;
                setSelectedIndex(selectedIndex);
                console.log(selectedIndex);
                console.log(item);
              }}
              key={index}
              className={
                selectedIndex === index
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ListGroup;

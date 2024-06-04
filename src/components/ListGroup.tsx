import { useState } from 'react';

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>No Items Found</p>
        ) : (
          items.map((item: string, index: number) => (
            <li
              onClick={() => {
                let selectedIndex = index;
                setSelectedIndex(selectedIndex);
                onSelectItem(item);
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

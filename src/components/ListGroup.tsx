import { MouseEvent } from 'react';

function ListGroup() {
  let items = ['new York', 'Los Angeles', 'Chicago', 'Houston'];
  //   items = [];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>No Items Found</p>
        ) : (
          items.map((item: string, index: number) => (
            <li onClick={handleClick} key={index} className="list-group-item">
              {item}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ListGroup;

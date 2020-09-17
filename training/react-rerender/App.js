import React, { useState } from 'react';
import './styles.css';

const users = ['John', 'Mary', 'Peter', 'Bob'];

export default function App() {
  const [activeUser, setActiveUser] = useState(0);

  return (
    <div className="root">
      {users.map((user, idx) => {
        return (
          <ListElement
            key={idx} // idx не должен быть key
            name={user}
            isActive={idx === activeUser}
            setActiveHandler={() => {
              setActiveUser(idx);
            }}
          />
        );
      })}
    </div>
  );
}

const ListElement = ({ name, setActiveHandler, isActive }) => {
  return (
    <div className="listItem">
      <span className="listItemLabel">{name}</span>
      <Button
        className="listItemButton"
        title="Activate"
        onClick={setActiveHandler}
      />
      {isActive && <strong>[active]</strong>}
    </div>
  );
};

const Button = ({ className, onClick, title }) => {
  console.log('<Button /> rendered');

  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

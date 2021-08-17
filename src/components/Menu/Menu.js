import { useState } from "react";

import "./Menu.css";

const Menu = () => {
  const initialState = [
    { id: 1, name: "Hamburger" },
    { id: 2, name: "Pizza" },
    { id: 3, name: "Hot-Dog" },
    { id: 4, name: "Carbonara" },
  ];

  const [menu, setMenu] = useState(initialState);

  return (
    <div className="menu">
      <ul>
        {menu.map((item) => (
          <li key={item.id} className="menu__item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

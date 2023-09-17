import React, { createContext, useState } from "react";

const cardItem = createContext();

const BasketContext = ({ children }) => {
  const [card, setCard] = useState([]);
  return (
    <cardItem.Provider value={{ card, setCard }}>{children}</cardItem.Provider>
  );
};

export { cardItem, BasketContext };

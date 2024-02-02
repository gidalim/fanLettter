import { createContext, useState } from "react";
import data from "../shared/data.json";

export const UserDataContext = createContext(null);

export function UserDataProvide({ children }) {
  const [list, setList] = useState([...data]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [isDivVisible, setIsDivVisible] = useState(true);

  const callModal = (content) => {
    setIsModalOpen(true);
    setEditContent(content);
    setIsDivVisible(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDivVisible(true);
  };

  const addFanLetter = (newLetter) => {
    console.log("새로운 팬레터 생성", newLetter);
    setList((list) => [...list, newLetter]);
  };

  const deleteFanLetter = (id) => {
    setList(list.filter((letter) => letter.id !== id));
  };

  const updateFanLetter = (updateLetter) => {
    setList(
      list.map((letter) =>
        letter.id === updateLetter.id ? updateLetter : letter
      )
    );
  };
  return (
    <UserDataContext.Provider
      value={{
        list,
        // addFanLetter,
        // deleteFanLetter,
        // updateFanLetter,
        isModalOpen,
        setIsModalOpen,
        editContent,
        setEditContent,
        // callModal,
        // closeModal,
        isDivVisible,
        setIsDivVisible,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

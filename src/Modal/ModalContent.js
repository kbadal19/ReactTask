// App.js
import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";

const ModalContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("isModalOpen", isModalOpen);
  }, [isModalOpen]);

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="bg-blue-500 text-white p-2" onClick={openModal}>
        Open Modal
      </button>

      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-xl font-bold mb-4">Modal Content</h1>
        <p>This is the content of the modal.</p>
        <button className="bg-red-500 text-white p-2 mt-4" onClick={closeModal}>
          Close Modal
        </button>
      </CustomModal>
    </div>
  );
};

export default ModalContent;

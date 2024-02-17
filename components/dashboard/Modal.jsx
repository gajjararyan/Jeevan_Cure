// Modal.js
import React, { useState } from "react";
import Modal from "react-modal";

// Modal.setAppElement("#__next");

export default function AddContact({
  isOpen,
  onRequestClose,
  onAddContact,
}) {
  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    number: null,
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    setFormData({ name: "", relation: "", number: null, image: "" }); // Reset form values
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute top-20 right-40 rounded-3xl shadow-xl
    shadow-black flex flex-col gap-5 text-white bg-black w-[400px] p-10"
    >
      <h2 className="text-2xl font-serif font-semibold tracking-wider">
        Add Contact
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Contact Name"
            value={formData.name}
            onChange={handleChange}
            className="form"
          />
        </label>
        <br />
        <label className="label">
          Relation:
          <input
            type="text"
            name="relation"
            placeholder="Father/Mother/Brother..."
            value={formData.relation}
            onChange={handleChange}
            className="form"
          />
        </label>
        <br />
        <label className="label">
          Number:
          <input
            type="tel"
            name="number"
            placeholder="919009009099"
            value={formData.number}
            onChange={handleChange}
            className="form"
          />
        </label>
        {/* <label className="label">
          Image:
          <input
            type="text"
            name="image"
            placeholder="Image Location"
            value={formData.image}
            onChange={handleChange}
            className="form"
          />
        </label> */}
        {/* <br /> */}
        <button type="submit">Add Contact</button>
      </form>
    </Modal>
  );
}

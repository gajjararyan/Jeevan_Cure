// EditContactModal.js
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

export default function EditContact({
  isOpen,
  onRequestClose,
  onEditContact,
  contactToEdit,
}) {
  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    number: null,
    image: "./luffy.png",
  });

  useEffect(() => {
    // Set the initial form data when the modal opens
    setFormData({
      name: contactToEdit.name,
      relation: contactToEdit.relation,
      number: contactToEdit.number,
      image: contactToEdit.image,
    });
  }, [contactToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditContact(contactToEdit.id, formData);
    setFormData({ name: "", relation: "", number: null, image: "./luffy.png" }); // Reset form values
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute top-20 left-40 rounded-3xl shadow-xl
    shadow-black flex flex-col gap-5 text-white bg-black w-[400px] p-10"
    >
      <h2 className="text-2xl font-serif font-semibold tracking-wider">
        Edit Contact
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
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </Modal>
  );
}

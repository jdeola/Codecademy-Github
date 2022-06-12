import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Appt Title"
        required
      />
      <br/>

      <ContactPicker 
        name="contact"
        value={contact}
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appt with ..."
      />
      <br/>

      <input 
        name="date"
        type="date"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Appt Date"
      />
      <br/>

      <input 
        name="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Appt Time"
      />
      <br />

      <input type="submit" value="Add Appointment" />
    </form>
  );
};

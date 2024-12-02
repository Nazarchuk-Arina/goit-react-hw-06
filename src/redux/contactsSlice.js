import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",

  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", tel: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", tel: "443-89-12" },
      { id: "id-3", name: "Eden Clements", tel: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", tel: "227-91-26" },
    ],
  },

  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

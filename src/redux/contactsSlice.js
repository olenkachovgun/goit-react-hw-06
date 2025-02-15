import { createSlice } from "@reduxjs/toolkit";
// Початковий стан редюсера слайсу:
const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  //   filters: {
  //     name: "",
  //   },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    editContact: (state, action) => {
      const item = state.contacts.items.find(
        (item) => item.id === action.payload.id
      );
      item.name = action.payload.name;
      item.number = action.payload.number;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const contactsReducer = slice.reducer;
export const { deleteContact, addContact, editContact, reset } = slice.actions;

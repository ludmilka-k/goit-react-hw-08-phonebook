import {createAsyncThunk} from '@reduxjs/toolkit';
import { $instance } from 'redux/auth/operations'

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async ( _, thunkAPI) => {
    try {
      const response = await $instance.get('/contacts');
      return response.data;
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk (
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await $instance.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export  const deleteContactThunk = createAsyncThunk (
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response= await $instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

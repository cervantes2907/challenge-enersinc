import { createSlice } from "@reduxjs/toolkit";
import Api from "../../../services/Api";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    user: {
        id: '',
        name: '',
        email: '',
        gender: '',
        status: '',
    },
    message: '',
    modalCreate: false,
    modalEdit: false,
    modalDelete: false,
    modalMessage: false
  },
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
    },
    setUser: (state, action) => {
        state.user = action.payload;
    },
    setMessage: (state, action) => {
        state.message = action.payload;
    },
    setModalCreate: (state, action) => {
        state.modalCreate = action.payload;
    },
    setModalEdit: (state, action) => {
        state.modalEdit = action.payload;
    },
    setModalDelete: (state, action) => {
        state.modalDelete = action.payload;
    },
    setModalMessage: (state, action) => {
        state.modalMessage = action.payload;
    } 
  },
});

export const { setUsers, setUser, setMessage, setModalCreate, setModalEdit, setModalDelete, setModalMessage } = userSlice.actions;

export default userSlice.reducer;


export const fetchAllUsers = () => (dispatch) => {
  Api.get('/users')
    .then((response) => {
      dispatch(setUsers(response.data.data));
    })
    .catch(() => {
        dispatch(setMessage('Error. No fué posible consultar los usuarios'))        
        dispatch(setModalMessage(true))
      });
};


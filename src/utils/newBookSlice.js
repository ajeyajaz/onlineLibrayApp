import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    books: []
}


const newBookSlice = createSlice({
    name: 'newBooks',
    initialState,
    reducers: {
        addBook: (state, action) => {
            console.log('acton', action.payload);
            state.books.push(action.payload);
        }
    }
});

export const {addBook} =  newBookSlice.actions;
export default newBookSlice.reducer;
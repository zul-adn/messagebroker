"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getQuestionsAPI, getTagsAPI } from "./homepage.api";

export interface Items {
  data: any;
  loading: boolean;
  page?: any;
}

export interface HomePageState {
    tags: Items;
    questions: Items;
    filteredText: string | undefined | null;
    page: number;
  }
  
const initialState: HomePageState = {
  tags: {
    data: [],
    loading: true,
  },
  questions: {
    data: [],
    loading: true,
    page: 1
  },
  page: 1,
  filteredText: ''
};

export const getTags = createAsyncThunk("homepage/getTags", async () => {
    let response = await getTagsAPI('');
    return response;
});

export const getQuestions = createAsyncThunk("homepage/getQuestions", async (_, thunkAPI) => {
  const state: any  = thunkAPI.getState();
  try {
    const {page, filteredText} = state.homepage
    let response = await getQuestionsAPI(page, filteredText);
    return response;
  } catch (error) {
    console.error(error)
  }
});

export const searchByTag = createAsyncThunk("homepage/seacrhByTags", async (_, thunkAPI) => {
  const state: any  = thunkAPI.getState();
  try {
    const {filteredText} = state.homepage

    const [tags, questions] = await Promise.all([
      getTagsAPI(filteredText),
      getQuestionsAPI(1, filteredText),
    ])

    return {tags, questions};
  } catch (error) {
    console.error(error)
  }
});

export const searchByClickTag = createAsyncThunk("homepage/searchByClickTag", async (tag: string) => {
  try {
    let response = await getQuestionsAPI(1, tag);
    return {response, tag};
  } catch (error) {
    console.error(error)
  }
});




export const HomePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
     setFilteredTag:  (state, action) => {
        console.log(action.payload);
        state.filteredText = action.payload
     }
  },
  extraReducers: (builder) => {
    builder
     
      // Tags
      .addCase(getTags.pending, (state) => {
        state.tags.loading = true;
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.tags.data = action.payload.data?.items;
        state.tags.loading = false;
      })
      .addCase(getTags.rejected, (state) => {
        state.tags.loading = false;
      })
       // Questions
      .addCase(getQuestions.pending, (state) => {
        state.questions.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        let updatedQuestions = state.questions.data.concat(action.payload?.data?.items);
        state.questions.data = updatedQuestions;
        state.questions.loading = false;
        state.page += 1;
      })
      .addCase(getQuestions.rejected, (state) => {
        state.questions.loading = false;
      })
        // seacrh
      .addCase(searchByTag.pending, (state) => {
          state.questions.loading = true;
          state.tags.loading = true;
      })
      .addCase(searchByTag.fulfilled, (state, action) => {
          state.questions.data = action.payload?.questions.data?.items;
          state.tags.data = action.payload?.tags.data?.items;
          state.questions.loading = false;
          state.tags.loading = false;
          state.page = 1;
      })
      .addCase(searchByTag.rejected, (state) => {
          state.questions.loading = false;
          state.tags.loading = false;
       })
        // seacrh by click
      .addCase(searchByClickTag.pending, (state, action) => {
        state.questions.loading = true;
      })
      .addCase(searchByClickTag.fulfilled, (state, action) => {
        state.questions.data = action.payload?.response.data?.items;
        state.questions.loading = false;
        state.filteredText = action.payload?.tag;
      })
      .addCase(searchByClickTag.rejected, (state) => {
          state.questions.loading = false;
      })
      
  }
});

export const { setFilteredTag } = HomePageSlice.actions
export default HomePageSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from './bit.types';
import { getBitcoins } from '../../Actions/bitcoins';

export interface ArticlesState {
  data: Article;
  loading: boolean;
  error: string | null;
  oneArticleInfo: Article | null;
}

const initialState: ArticlesState = {
  data: {
    bpi: {},
    chartName: '',
    disclaimer: '',
    time: {
      updated: '',
      updatedISO: '',
      updateduk: '',
    },
  },
  loading: true,
  error: null,
  oneArticleInfo: null,
};

export const loadAsyncArticles: any = createAsyncThunk<Article, void>(
  'articles/loadAsyncArticles',
  async () => {
    const response = await getBitcoins();
    if (response.status >= 400) {
      throw response;
    } else {
      return response;
    }
  }
);
const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    clearlastArticle: (state) => {
      state.oneArticleInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAsyncArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadAsyncArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadAsyncArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      });
  },
});
export default articlesSlice.reducer;
export const { clearlastArticle } = articlesSlice.actions;

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import i18n from '../i18n';

export type Language = 'en' | 'es';

interface LanguageState {
  lang: Language;
}

// Load saved lang from localStorage (if any)
const initialLang = (localStorage.getItem('lang') as Language) || 'en';

i18n.changeLanguage(initialLang);


const initialState: LanguageState = {
  lang: initialLang,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload); // persist to localStorage
      console.log(localStorage.getItem('lang'));
      
      i18n.changeLanguage(action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;

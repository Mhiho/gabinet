import {combineReducers} from 'redux';

const initState = {
  content: [],
  aboutShow: false
}
function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'ABOUT_ME':
    const text = 'tekst';
    const contentAboutMe =  ["Nazywam się Sylwia Wesołowska-Komar. Ukończyłam studia na Uniwersytecie Śląskim na kierunku psychologia poznawcza.",
              "Moje sesje maja swoje korzenie w psychoterapii dynamicznej. Uważam, że jest to najlepsza możliwa metoda poradzenia sobie z problemami psychicznymi."]
      return{
      ...state, content: [contentAboutMe],
                aboutShow: !state.aboutShow
      }
  }
  return state;
}

export default rootReducer;

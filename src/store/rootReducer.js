import {combineReducers} from 'redux';

const initState = {
  content: ["Psychoterapia to wciąż temat tabu. Ludzie obawiają się na nią wybrać, by nie uznano ich za chorych psychicznie. Nie wierzą też, że specjalista może pomóc im rozwiązać problemy. Tymczasem coraz więcej osób cierpi na zaburzenia lękowe, depresję czy zespół stresu pourazowego."],
  activeforAct: 'active',
  activeforAbo: '',
  activeforHel: '',
  activeforPri: '',
  activeforCon: ''

}
function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'ABOUT_ME':
      const contentAbout = ["Nazywam się Prototyp Strony. Ukończyłam studia na Uniwersytecie Śląskim na kierunku psychologia poznawcza. Moje sesje maja swoje korzenie w psychoterapii dynamicznej. Uważam, że jest to najlepsza możliwa metoda poradzenia sobie z problemami psychicznymi. Odbyłam długa drogę w leczeniu pacjentów z wieloma zaburzeniami."]
      return{
      ...state, content: [...contentAbout],
      activeforAct: '',
      activeforAbo: 'active',
      activeforHel: '',
      activeforPri: '',
      activeforCon: ''
      }
    case 'PSYCHOLOGICAL_HELP':
    const contentHelp = ["Podejście psychodynamiczne jest stanowiskiem teoretyczno-terapeutycznym, w którym istotą współpracy między pacjentem i terapeutą jest dynamika przeżyć psychicznych zachodzących u obydwu tych osób oraz w obrębie stworzonej przez nich relacji. Bazą teoretyczną psychoterapii psychodynamicznej jest psychoanaliza i odkrycia jej autora Z. Freuda, ale zarazem późniejsze osiągnięcia i założenia przedstawicieli teorii relacji z obiektem (m.in. M. Klein), psychologii ego czy psychologii self H. Kohuta. Warto podkreślić, że myślenie psychodynamiczne jest z założenia otwarte na wszelkiego rodzaju nowości z zakresu psychiatrii oraz psychoterapii, płynnie integrując najważniejsze z nich w swoich ramach."]
    return{
      ...state, content: [...contentHelp],
      activeforAct: '',
      activeforAbo: '',
      activeforHel: 'active',
      activeforPri: '',
      activeforCon: ''
    }
    case 'PRICES':
    const prices = [
      "Ceny za leczenie przestawiają się następująco:",
      "Jednorazowa sesja z wywiadem: 120zł",
      "Cotygodniowa sesja: 100zł"];
    return{
      ...state, content: [...prices],
      activeforAct: '',
      activeforAbo: '',
      activeforHel: '',
      activeforPri: 'active',
      activeforCon: ''
    }
    case 'CONTACT':
    const contact = [
      "Gabinet psychoterapii znajduje się w Sosnowcu na ulicy Modrzejewskiej 15",
      "Telefon: 555 555 555",
      "Mail: prototyp.strony@gmail.com"
    ]
    return{
      ...state, content: [...contact],
      activeforAct: '',
      activeforAbo: '',
      activeforHel: '',
      activeforPri: '',
      activeforCon: 'active'
    }
    case 'ACTUALITIES':
    const backtoInitial = {
      content: ["Psychoterapia to wciąż temat tabu. Ludzie obawiają się na nią wybrać, by nie uznano ich za chorych psychicznie. Nie wierzą też, że specjalista może pomóc im rozwiązać problemy. Tymczasem coraz więcej osób cierpi na zaburzenia lękowe, depresję czy zespół stresu pourazowego."]
      };
    return{
      ...state, content: [...initState.content],
      activeforAct: 'active',
      activeforAbo: '',
      activeforHel: '',
      activeforPri: '',
      activeforCon: ''
    }
  }
  return state;
}

export default rootReducer;

import React, {Component} from 'react';
import './navigation.css';

class Navigation extends Component {

state = {
  aboutShow: false,
  content: ["Nazywam się Sylwia Wesołowska-Komar. Ukończyłam studia na Uniwersytecie Śląskim na kierunku psychologia poznawcza.",
            "Moje sesje maja swoje korzenie w psychoterapii dynamicznej. Uważam, że jest to najlepsza możliwa metoda poradzenia sobie z problemami psychicznymi."]
}

toggleState(){
  this.setState({aboutShow: !this.state.aboutShow})
}

componentDidUpdate(){}
render(){
  return(
    <nav>
      <div>
        <div>
          <ul>
            <li onClick={()=>this.toggleState()}>O mnie</li>

            <li>Pomoc psychologiczna</li>
            <li>Cennik</li>
            <li>Kontakt</li>
          </ul>

          { this.state.aboutShow ?
          this.state.content.map(text=>
          (<div className="aboutMe">{text}</div>)
        ) : null
          }
        </div>
      </div>
    </nav>
  )
}


}

export default Navigation;

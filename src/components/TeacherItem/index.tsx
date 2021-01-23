import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'
function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="User"/>
        <div>
          <strong>
            Luis Carlos
          </strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        xxxxxxx
        <br/><br/>
        xxxxxxxxxxxxxxxxx
      </p>
      <footer>
        <p>Preço/Hora
          <strong>R$ 80,00</strong>
        </p>            
        <button type="button" >
          <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em Contato
        </button>    
      </footer>        
    </article>
  )
}

export default TeacherItem
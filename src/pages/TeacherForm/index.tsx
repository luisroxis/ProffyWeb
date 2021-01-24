import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css'
function TeacherForm() {
  return (
    <>
     <div id="page-teacher-form" className="container">
        <PageHeader 
          title="Que bom que você quer dar aula"
          description="O primeiro passo é preencher este formulario de inscrição."
        />

        <main>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input name="name" label="Nome Completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="WhatsApp" />  
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>
            <Input name="subject" label="Materia" />
            <Input name="cost" label="Custo da sua hora por aula" />
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante"/>
              Importante! <br/>
              Preencher todos os dados
            </p>
            <button type="button">
              Salvar Cadastro
            </button>
          </footer>
         </main>
      </div>
    </>
  )
}

export default TeacherForm
import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem';

import './styles.css'
function TeacherList() {
  return (
    <>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Esses são os Proffys disponiveis">
          <form id="search-teachers">
            <Input name="subject" label="Matéria" />

            <Input name="week_day" label="Dia da Semana" />

            <Input type="time" name="time" label="Hora" />  
          </form>
        </PageHeader>
        <main>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />          
        </main>
      </div>
    </>
   
  )
}

export default TeacherList
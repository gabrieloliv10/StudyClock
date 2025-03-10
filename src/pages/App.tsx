import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro/Index';
import React, {useState} from 'react';
import { Itarefa } from '../Types/tarefas';

  function App() {
    const [tarefas, setTarefas] = useState <Itarefa[] | []>([]);
    const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map
      (tarefa => ({
        ...tarefa, 
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })
    ));
  }
  function finalizarTarefa(){
    if (selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores =>
         tarefasAnteriores.map(tarefa =>{
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
         } ))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
        <Lista
          tarefas={tarefas}
          selecionaTarefa={selecionaTarefa}
          />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
        />
    </div>
  );
}

export default App;

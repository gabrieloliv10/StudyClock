import style from './Lista.module.scss';
import Item from "./Item/Index";
import { Itarefa } from '../../Types/tarefas';

interface Props {
    tarefas:Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({ tarefas, selecionaTarefa }:Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id} // Considere usar um identificador único se disponível
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
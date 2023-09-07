import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) &&
        <section className='time' style={{ backgroundColor: props.corClara }}>
            <h3 style={{borderColor: props.corEscura}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corEscura} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time;
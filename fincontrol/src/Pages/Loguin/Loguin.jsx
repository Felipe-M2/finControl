import './Loguin.css';

import PredImg from '../../assets/pred.svg';
import Logo from '../../assets/logo.svg';

const Loguin = ()=>{
    return(
        <section className="loguin">
            <div className="img">
                <img src={PredImg} alt="" />
            </div>

            <div className="formDiv">
                <img src={Logo} alt="" className="logoForm" />

                <form action="" className='formLoguin'>

                    <div className="inputFormLoguin">
                        <input required type="text" name="usuario" id="usuario" />

                        <label htmlFor="usuario">Usuario:</label>
                    </div>
                    
                    <div className="inputFormLoguin">
                        <input required type="password" name="senha" id="senha" />

                        <label htmlFor="senha">Senha:</label>
                    </div>

                    <button className='btnLoguin'>Loguin</button>

                </form>

                <button className='btnResetPassword'>Esqueci a senha!</button>
            </div>
        </section>    
    )
}

export default Loguin;
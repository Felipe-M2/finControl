import './CadDados.css';
import { useState } from 'react';
import Logo from '../../assets/logo.svg';

const CadDados = () => {

    const [ cidade, setCidade ] = useState();

    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(
            async function(position){
                const { latitude, longitude } = position.coords;

                const urlApi = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

                try{
                    const response = await fetch(urlApi);
                    const data = await response.json();

                    if(response.ok){
                        const city = data.address.city;

                        setCidade(city);
                    }else{
                        setCidade('');
                    }
                }catch(error){
                    setCidade('');
                }
            });
    }else{
        console.log("sem API para geolocalização!");
    }

    return (
        <section className="cadDados">
            
            <div className="logoCad">
                <img src={Logo} alt="" />
            </div>

            <button className="btnRetorno">⭠Home</button>

            <div className="dadosCar_Emer">
                <div>
                    <p>Carteira:</p>
                    <span>R$:280,00</span>
                </div>
                <div>
                    <p>Emergência:</p>
                    <span>R$:280,00</span>
                </div>
            </div>

            <section className="formCad">

                <div className="selectTipo">
                    <select name="" id="">
                        <option value="">Compra</option>
                        <option value="">Entrada</option>
                    </select>
                </div>

                <form action="" className="formCad compra">
                    <div className="inputFormCad">
                        <input required type="text" name="" id="" />
                        <label htmlFor="">Item:</label>
                    </div>

                    <select name="" id="">
                        <option value="Supermecado">Supermecado</option>
                        <option value="Farmacia">Farmacia</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Despezas">Despezas</option>
                        <option value="Assinaturas">Assinaturas</option>
                        <option value="Compras">Compras</option>
                    </select>

                    <div className="inputFormCad">
                        <input required type="text" name="cidade" id="cidade" value={cidade} />
                        <label htmlFor="cidade">Localização:</label>
                    </div>

                    <div className="inputFormCad">
                        <input required type="number" name="" id="qtd" />
                        <label htmlFor="qtd">Qunatidade:</label>
                    </div>

                    <div className="inputFormCad">
                        <input required type="number" name="" id="valor" />
                        <label htmlFor="valor">Valor:</label>
                    </div>

                    <button className="btnAdcionar">Adicionar</button>

                </form>

            </section>

        </section>
    );
};

export default CadDados;

import './Supermecado.css';

const Supermecado = () => {

    return (
        <section className="supermecado">
            <form action="">
                <div className="cardInput">
                    <label htmlFor="itemSup">Item:</label>
                    <input type="text" name="" id="itemSup" />
                </div>
                
                <div className="cardInput">
                    <label htmlFor="localSup">Localização:</label>
                    <input type="text" name="" id="localSup" />
                </div>

                <div className="cardInput">
                    <label htmlFor="qtdSup">Quantidade:</label>
                    <input type="number" name="" id="qtdSup" />
                </div>

                <div className="cardInput">
                    <label htmlFor="valorSup">Valor(R$):</label>
                    <input type="number" name="" id="valorSup" />
                </div>

                <button className='btnAddSupList'>Adicionar</button>
            </form>

            <div className="menuSup">

                <div className="dadosSupList">
                    <span>Valor total:</span>
                    <span className="valorTotalSup">R$:3500,00</span>
                    <span>-</span>
                    <span className='totalitensSup'>53 itens</span>
                </div>

                <button className="btnConfirmSup">Confirmar Compra</button>

            </div>
        </section>
    )
}

export default Supermecado;
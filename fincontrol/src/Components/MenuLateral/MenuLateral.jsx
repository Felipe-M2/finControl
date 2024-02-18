import './MenuLateral.css';
import PropTypes from 'prop-types';

const MenuLateral = ({ setComponentAtual }) => {
    return (
        <section className="menuLateral">

            <div className="usuarioMenuLateral">
                <p>Felipe M.</p>

                <div className="iconMenuLateral">
                    <button>
                        <span className="material-symbols-outlined">
                            notifications
                        </span>
                    </button>

                    <button>
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                    </button>
                </div>
            </div>

            <nav className="navBarMenuLateral">
                <tr>
                    <td>
                        <button onClick={() => setComponentAtual('comp')}>
                            <span className="material-symbols-outlined">
                                local_mall
                            </span>

                            Compras
                        </button>
                    </td>

                    <td>
                        <button onClick={() => setComponentAtual('emgc')}>
                            <span className="material-symbols-outlined">
                                e911_emergency
                            </span>

                            Emergência
                        </button>

                    </td>

                    <td>
                        <button onClick={() => setComponentAtual('invest')}>
                            <span className="material-symbols-outlined">
                                finance_chip
                            </span>

                            Investimentos
                        </button>
                    </td>

                    <td>
                        <button onClick={() => setComponentAtual('viagens')}>
                            <span className="material-symbols-outlined">
                                flight_takeoff
                            </span>

                            Viagens BR
                        </button>
                    </td>

                    <td>
                        <button onClick={() => setComponentAtual('relPdf')}>
                            <span className="material-symbols-outlined">
                                donut_large
                            </span>

                            Relatorios PDF
                        </button>
                    </td>

                    <td>
                        <button onClick={() => setComponentAtual('relSlides')}>
                            <span className="material-symbols-outlined">
                                web_asset
                            </span>

                            Relatorios SLIDES
                        </button>
                    </td>

                </tr>
            </nav>

        </section>
    )
}

MenuLateral.propTypes = {
    setComponentAtual: PropTypes.func.isRequired
};

export default MenuLateral;
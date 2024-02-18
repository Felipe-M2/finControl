import "./Header.css";
import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Logo from '../../assets/logo.svg';

const Header = ({ setComponentAtual }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 380,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section className="header">
            <div className="logo">
                <img className="imgLogo" src={Logo} alt="Logo FinControl na cor branca" />
            </div>

            <section className="dadosHeader">
                <div className="cardDados">
                    <h3>Recebeu:</h3>
                    <p>R$:1650,00</p>
                </div>
                <div className="cardDados">
                    <h3>Gastou:</h3>
                    <p>R$:1650,00</p>
                </div>
                <div className="cardDados">
                    <h3>Carteira:</h3>
                    <p>R$:1650,00</p>
                </div>
                <div className="cardDados">
                    <h3>Investimentos:</h3>
                    <p>R$:1650,00</p>
                </div>

                <div className="btnCadDados" onClick={handleOpen}>
                    <span alt="Botão de cadastro" className="material-symbols-outlined">new_window</span>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Tipo de cadastros:
                        </Typography>
                        <Typography className="modalCad" id="modal-modal-description" sx={{ mt: 2 }}>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setComponentAtual('entrada')
                                }}>
                                Entrada
                            </button>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setComponentAtual('sup')
                                }}>
                                Supermecado
                            </button>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setComponentAtual('compra')
                                }}>
                                Compra
                            </button>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setComponentAtual('fixa')
                                }}>
                                Fixa
                            </button>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setComponentAtual('despeza')
                                }}>
                                Despezas
                            </button>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setComponentAtual('lazer')
                                }}>
                                Lazer
                            </button>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setComponentAtual('farmacia')
                                }}>
                                Farmacia
                            </button>

                        </Typography>
                    </Box>
                </Modal>

            </section>
        </section>
    )
}

Header.propTypes = {
    setComponentAtual: PropTypes.func.isRequired
};

export default Header;
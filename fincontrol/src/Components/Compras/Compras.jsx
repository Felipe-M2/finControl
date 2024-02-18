import '../Geral/Geral.css';
import { Chart } from "react-google-charts";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Compras = () => {

    const dataArray = [
        {
            id: 1,
            item: 'lata',
            data: "17/02/2024",
            tipo: 'farmacia',
            localizacao: 'Goiânia',
            quantidade: 1,
            valor: 2.40
        },
        {
            id: 2,
            item: 'lata',
            data: "17/02/2024",
            tipo: 'farmacia',
            localizacao: 'Goiânia',
            quantidade: 1,
            valor: 2.40
        }
        ,
        {
            id: 3,
            item: 'lata',
            data: "17/02/2024",
            tipo: 'farmacia',
            localizacao: 'Goiânia',
            quantidade: 1,
            valor: 2.40
        }
        ,
        {
            id: 4,
            item: 'lata',
            data: "17/02/2024",
            tipo: 'farmacia',
            localizacao: 'Goiânia',
            quantidade: 1,
            valor: 2.40
        }
        
    ]

    const mes = "Janeiro";

    const data = [
        ["Dia", "Gastou"],
        ["Seg", 2000],
        ["Ter", 10000],
        ["Qua", 660],
        ["Qui", 1030],
        ["Sex", 1030],
    ];

    const options = {
        backgroundColor: 'transparent',
        title: `Gastos de ${mes}`,
        colors: ["red"],
        titleTextStyle: { color: "#fff" },
        curveType: "function",
        legend: { position: "bottom", textStyle: { color: "#DFD6DF" } },
        vAxis: {
            textStyle: { color: '#DFD6DF' },
            viewWindow: {
                min: 0,
            },
            baselineColor: "#fff",
        },
        hAxis: {
            textStyle: { color: '#DFD6DF' }
        },
    };

    return (
        <section className="compras">
            <div className="dadosCompras">
                <div className="cardDadosCompras">
                    <h3>Recebeu:</h3>

                    <p>R$1500,00</p>
                </div>
                <div className="cardDadosCompras">
                    <h3>Gastou:</h3>

                    <p>R$1500,00</p>
                </div>
                <div className="cardDadosCompras">
                    <h3>Carteira:</h3>

                    <p>R$1500,00</p>
                </div>
                <div className="cardDadosCompras">
                    <h3>Max Gasto Previsto:</h3>

                    <p>R$1500,00</p>
                </div>
                <div className="cardDadosCompras">
                    <h3>Assinatura:</h3>

                    <p>R$1500,00</p>
                </div>
                <div className="cardDadosCompras">
                    <h3>Cartão de credito:</h3>

                    <p>R$1500,00</p>
                </div>
                <div className="cardDadosCompras">
                    <h3>Supermecado:</h3>

                    <p>R$1500,00</p>
                </div>
            </div>

            <div className="graficoCompras">
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="100%"
                    data={data}
                    options={options}
                />
            </div>

            <div className="listaCompras">
                <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Item</TableCell>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Data</TableCell>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Tipo</TableCell>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Localização</TableCell>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Quantidade</TableCell>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataArray.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                >
                                    <TableCell 
                                        align="center"
                                        sx={{color: "#cccccc"}}
                                        component="th" 
                                        scope="row">
                                        {row.item}
                                    </TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.data}</TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.tipo}</TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.localizacao}</TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.quantidade}</TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.valor}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    )
}

export default Compras;
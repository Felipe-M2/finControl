import '../Geral/Geral.css';
import { Chart } from "react-google-charts";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Emergencia = () => {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const mes = "Janeiro";

    const data = [
        ["Dia", "Resgate", "Deposito"],
        ["Seg", 2000, 300],
        ["Ter", 1000, 300],
        ["Qua", 660, 300],
        ["Qui", 1030, 300],
        ["Sex", 1030, 300],
    ];

    const options = {
        backgroundColor: 'transparent',
        title: `Gastos de ${mes}`,
        colors: ["red", "blue"],
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
                    <h3>Disponivel:</h3>

                    <p>R$1500,00</p>
                </div>
                <div className="cardDadosCompras">
                    <h3>Resgatou:</h3>

                    <p>R$1500,00</p>
                </div>
                <div className="cardDadosCompras">
                    <h3>Depositado:</h3>

                    <p>R$1500,00</p>
                </div>
            </div>

            <div className="graficoCompras" style={{height: "220px"}}>
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
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Tipo</TableCell>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Localização</TableCell>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Quantidade</TableCell>
                                <TableCell sx={{color: "#fff", fontWeight: "bold"}} align="center">Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                >
                                    <TableCell 
                                        align="center"
                                        sx={{color: "#cccccc"}}
                                        component="th" 
                                        scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.calories}</TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.fat}</TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.carbs}</TableCell>
                                    <TableCell sx={{color: "#cccccc"}} align="center">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    )
}

export default Emergencia;
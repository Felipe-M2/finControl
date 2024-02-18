import { Chart } from 'react-google-charts';

const Viagens = () => {

    const data = [
        ['State', 'Data'],
        ['BR-AC', 0],
        ['BR-AL', 20],
        ['BR-AP', 30],
        ['BR-AM', 40],
        ['BR-BA', 50],
        ['BR-CE', 50],
        ['BR-DF', 50],
        ['BR-ES', 50],
        ['BR-GO', 50],
        ['BR-MA', 50],
        ['BR-MT', 500],
        ['BR-MS', 500],
        ['BR-MG', 500],
        ['BR-PA', 500],
        ['BR-PB', 500],
        ['BR-PR', 500],
        ['BR-PE', 500],
        ['BR-PI', 500],
        ['BR-RJ', 500],
        ['BR-RN', 500],
        ['BR-RS', 500],
        ['BR-RO', 500],
        ['BR-RR', 500],
        ['BR-SC', 500],
        ['BR-SP', 500],
        ['BR-SE', 500],
        ['BR-TO', 500],
    ];

    return (
        <section className="supermecado">
            <div style={{ width: '100%', maxWidth: 800 }}>
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="GeoChart"
                    data={data}
                    options={{
                        region: 'BR',
                        resolution: 'provinces',
                        colorAxis: { colors: ['#FFf', 'red'] },
                        backgroundColor: 'transparent',
                        datalessRegionColor: '#f8bbd0',
                        defaultColor: '#f5f5f5',
                    }}
                />
            </div>
        </section>
    )
}

export default Viagens;
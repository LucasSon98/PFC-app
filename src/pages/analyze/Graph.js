import './Graph.scss';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = ({data,toggle1,toggle2,toggle3,toggle4,toggle5,toggle6}) => {

    return (
        <div className='graph'>
            <ResponsiveContainer width="100%" height="100%" key={`rc_${data.length}`}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    key={`lc_${data.length}`}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis domain={[0,1]} dataKey="tiempo" label={{ value: 'Tiempo(ms)', position: 'insideBottomRight', offset: 0 }}/>
                    <YAxis domain={[0,100]} ticks={[0,25,50,75,100]} label={{ value: 'Nivel de Fuerza (%)', angle: -90, position: 'insideLeft' }}/>
                    <Tooltip />
                    <Legend />
                    {toggle1 && <Line type="monotone" dataKey="Anular" stroke="#FF2D00" activeDot={{ r: 8 }} />}
                    {toggle2 && <Line type="monotone" dataKey="Medio" stroke="#0070FF" activeDot={{ r: 8 }} />}
                    {toggle3 && <Line type="monotone" dataKey="Índice" stroke="#0ABD0D" activeDot={{ r: 8 }} />}
                    {toggle4 && <Line type="monotone" dataKey="Pulgar" stroke="#9008B8" activeDot={{ r: 8 }} />}
                    {toggle5 && <Line type="monotone" dataKey="Temperatura" stroke="#17A589" activeDot={{ r: 8 }} />}
                    {toggle6 && <Line type="monotone" dataKey="Distancia" stroke="#17202A" activeDot={{ r: 8 }} />}

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
 
export default Graph;
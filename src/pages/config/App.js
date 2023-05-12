import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Card from "../../componentes/Card";
import Layout from "../../componentes/Layout";
import ConfigInputs from "./ConfigInputs";
import DefaultButton from "../../componentes/DefaultButton";
import Container from "../../componentes/Container";
import { Server } from "../../context";


const ConfigPage = () => {
    const {socket} = useContext(Server);
    const [fumax, setFumax] = useState(undefined);
    const navigate = useNavigate();

    const handleVolverButton = () => {
        navigate("/");
    };

    useEffect(() => {
        socket.on("FUMax", (data)=> {
            setFumax(data.message);
            console.log("Dato recibido");
        });
    },[socket])

    return (
        <div className="ConfigPage">
            <Layout>
                <p>Parametros</p>
                <DefaultButton onClick={handleVolverButton} button_text={"Volver"}/>
                <Container>
                    <Card cardTitle={"Fuerza"} cardClass={"Fuerza"}>
                        <ConfigInputs className={"column-align"} max={fumax}/>
                    </Card>

                    <Card cardTitle={"Distancia"} cardClass={"Distancia"}>
                        <ConfigInputs className={"column-align"} max={0}/>
                    </Card>

                    <Card cardTitle={"Temperatura"} cardClass={"Temperatura"}> 
                        <ConfigInputs className={"column-align"} max={0}/>
                    </Card>
                </Container>
                <Container>
                    <Card cardTitle={"Tiempo de Vibración"} cardClass={"TV"}>
                        <ConfigInputs className={"row-align"}/>
                    </Card>
                </Container>
                <DefaultButton button_text={"Enviar Configuracion"}/>
            </Layout>
        </div>
        
    );
}
 
export default ConfigPage;
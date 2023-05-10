import { useNavigate } from "react-router-dom";

import Card from "../../componentes/Card";
import Layout from "../../componentes/Layout";
import ConfigInputs from "./ConfigInputs";
import DefaultButton from "../../componentes/DefaultButton";
import Container from "../../componentes/Container";


const ConfigPage = () => {
    const navigate = useNavigate();

    const handleVolverButton = () => {
        navigate("/");
    };

    return (
        <div className="ConfigPage">
            <Layout>
                <p>Parametros</p>
                <DefaultButton onClick={handleVolverButton} button_text={"Volver"}/>
                <Container>
                    <Card cardTitle={"Fuerza"} cardClass={"Fuerza"}>
                        <ConfigInputs className={"column-align"}/>
                    </Card>

                    <Card cardTitle={"Distancia"} cardClass={"Distancia"}>
                        <ConfigInputs className={"column-align"}/>
                    </Card>

                    <Card cardTitle={"Temperatura"} cardClass={"Temperatura"}> 
                        <ConfigInputs className={"column-align"}/>
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
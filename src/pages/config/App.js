import { useContext,  useState, useRef } from "react";
import { Server } from "../../context";

import Layout from "../../componentes/Layout";
import UpperConfigs from "./UpperConfigs";
import LowerConfigs from "./LowerConfigs";
import ConfigFooter from "./ConfigFooter";
import ConfigHeader from "./ConfigHeader";
import './App.scss';

const ConfigPage = () => {
    const {socket} = useContext(Server);
    const [showConfig, setShowConfig] = useState(false);
    const null_data = {FC: null, FM: null, FG: null, DC: null, DM: null, DG: null, TT: null, VC: null, VM: null, VG: null};
    const [variables, setVariables] = useState(null_data);
    const [variablesSend, setVariablesSend] = useState(null_data);
    const isComplete = useRef(false);
    
    const SaveData = (data) => {
        socket.off('Data');
        setVariables((prev_variables) => {
            prev_variables.FC = data.CFC;
            prev_variables.FM = data.CFM;
            prev_variables.FG = data.CFG;
            prev_variables.DC = data.CDC;
            prev_variables.DM = data.CDM;
            prev_variables.DG = data.CDG;
            prev_variables.TT = data.CTT;
            prev_variables.VC = data.CVC;
            prev_variables.VM = data.CVM;
            prev_variables.VG = data.CVG;

            return prev_variables;
        });
        setShowConfig(true);
    }

    if(!isComplete.current){
        (function () {
            socket.on("Data", (data)=> {
                SaveData(data);
            });
        })();
    }

    const InputChangeHandler = (e) => {
        if(e.target.value){
            setVariablesSend((prev_variables) => {
                prev_variables[e.target.id] = Number(e.target.value);
                return prev_variables;
            })
        }
    }
    
    
    const pageContent = <Layout>
                            <ConfigHeader/>
                            <UpperConfigs variables={variables} inputChangeHandler = {InputChangeHandler}/>
                            <LowerConfigs variables={variables} inputChangeHandler = {InputChangeHandler}/>
                            <ConfigFooter variables={variablesSend}/>
                        </Layout>;
    
    const loadingContent = <Layout><div className="loader"><h1>Loading...</h1></div></Layout>

    return (
        <div className="config-page">
            {showConfig ? pageContent : loadingContent}
        </div>
        
    );
}
 
export default ConfigPage;
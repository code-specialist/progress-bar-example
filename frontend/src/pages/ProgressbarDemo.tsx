import { useContext } from "react";
import {ProgressContext} from "../context/ProgressContext";
import Progressbar from "./components/Progressbar";
import Button from "@mui/material/Button";


const ProgressbarDemo = () => {
    const {
        progress,
        startProcess
    } = useContext(ProgressContext);

    return(
        <>
            <h1 style={{color: 'white'}}>Demo for progressbar</h1>
            <Button variant="contained" onClick={()=>startProcess()}>Start Process</Button>
            <div style={{width: '50%', margin: 'auto', marginTop: '25px'}}>
                <Progressbar progress={progress}></Progressbar>
            </div>
        </>
    )

}

export default ProgressbarDemo;
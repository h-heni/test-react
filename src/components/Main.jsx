import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './bootstrap.css';

const Main = () => {
    const [results , setResults]=useState([{"os":"Ubuntu","lastKeepAlive":"9999-12-31T23:59:59Z","dateAdd":"2022-07- 18T07:14:54Z","ip":"127.0.0.1","name":"cyr-customer-ossec.local","id":"000","version":"Wazuh v4.3.8","status":"active"},{"os":"Microsoft Windows 11 Pro","lastKeepAlive":"2022-10- 19T14:33:38Z","dateAdd":"2022-08-01T08:49:55Z","ip":"192.168.1.216","name":"DESKTOPUD0U8ND","id":"024","version":"Wazuh v4.3.6","status":"disconnected"},{"os":"Microsoft Windows 11 Pro","lastKeepAlive":"2022-10-20T10:21:02Z","dateAdd":"2022-10- 11T09:31:22Z","ip":"10.127.0.4","name":"Win11Agent","id":"025","version":"Wazuh v4.3.6","status":"active"},{"os":"Microsoft Windows 11 Pro","lastKeepAlive":"2022-10- 19T10:41:01Z","dateAdd":"2022-10-11T09:35:53Z","ip":"192.168.43.45","name":"customer-05- DESKTOP-UH5KTO9","id":"026","version":"Wazuh v4.3.8","status":"disconnected"},{"os":"Microsoft Windows 10 Enterprise","lastKeepAlive":"2022-10-20T09:52:41Z","dateAdd":"2022-10- 20T08:14:44Z","ip":"192.168.1.65","name":"customer-05-DESKTOP9LE2G01","id":"027","version":"Wazuh v4.3.8","status":"disconnected"}])

    
    useEffect(()=>{
        axios.get('path/to/data.json')
            .then(res=>{setResults(res.data);
            })
            .catch(err=>console.log(err))
            console.log(results);
    },[results])
    return (
    <section className='p-3'>
        <p>Hello admin,</p>
        <p>View the status of your agents and the evolution of their latest alerts</p>
        <h3>Installed agents by their status</h3>
        {/* Cards */}
        <div className="mt-5 container d-flex justify-content-between align-items-center flex-wrap">
        <div className="card">
            <p className="title">Total agents</p>
            <p className='number' style={{color:"rgb(0, 107, 180)"}}>{results.filter(r=>r.id!=="000").length}</p>
        </div>
        <div className="card">
            <p className="title">Active agents</p>
            <p className='number' style={{color:"rgb(0, 120, 113)"}}>{results.filter(r=>r.id!=="000" && r.status==="active").length}</p>
        </div>
        <div className="card">
            <p className="title">Disconnected agents</p>
            <p className='number' style={{color:"rgb(189, 39, 30)"}}>{results.filter(r=>r.id!=="000" && r.status==="disconnected").length}</p>
        </div>
        <div className="card">
            <p className="title">Pending agents</p>
            <p className='number' style={{color:"rgb(254, 197, 20)"}}>{results.filter(r=>r.id!=="000" && r.status==="pending").length}</p>
        </div>
        <div className="card">
            <p className="title">Never connected agents</p>
            <p className='number' style={{color:"rgb(100, 106, 119)"}}>{results.filter(r=>r.id!=="000" && r.status==="never_connected").length}</p>
        </div>
        </div>
    </section>
    )
}

export default Main
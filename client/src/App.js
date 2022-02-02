import './App.css';
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Graph from './Graph.jsx'
import NavBar from './components/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  grid : {
    marginTop:"100px"
  },

}));


function App() {


  const classes = useStyles();
  const [mulagoData, setMulagoData] =  useState([])
  const [kirudduData, setKirudduData] = useState([])
  const [muhData, setMuhData]=useState([])
  const [showPrediction,setPredication] = useState(false)


  
//---------------------mulago data -----------------------------------------------
  const getMulagoData = ()=>{

        axios.get("http://localhost:3002/mulago/getMulagoPatients").then((response)=>{
      setMulagoData(response.data)

    }
  ).catch()
  }

  
  // -------------------kirudu data---------------------------------------------------

  const getKiruduData = ()=>{

    axios.get("http://localhost:3002/kiruddu/getKirudduPatients").then((response)=>{
  setKirudduData(response.data)

}
).catch()
}

//-------------------- makerere university hospital ---------------------------
const getMuhData = ()=>{

  axios.get("http://localhost:3002/muh/getMuhPatients").then((response)=>{
    setMuhData(response.data)

}
).catch()
}
//--------------------------------------------------------------------------
  
  useEffect(() => {

    getMuhData()
    getMulagoData()
    getKiruduData()

  }, [])


  //------------------------malaria patients -------------------
 const mulagoMalaria=  mulagoData.filter((patients)=>{

    return (patients.disease === "Malaria")

  })

  const kirudduMalaria=  kirudduData.filter((patients)=>{

    return (patients.disease === "Malaria")
    
  })

  const Muhalaria=  muhData.filter((patients)=>{

    return (patients.disease === "Malaria")
    
  })
  //----------------------------------end of malaria----------------------


  //----------------------------covid-19 -----------------------------------
const mulagoCovid=  mulagoData.filter((patients)=>{

    return (patients.disease === "COVID-19")

  })

  const kirudduCovid =  kirudduData.filter((patients)=>{

    return (patients.disease === "COVID-19")
    
  })

  const MuhCovid=  muhData.filter((patients)=>{

    return (patients.disease === "COVID-19")
    
  })

 //----------------------------end of covid-19-------------------
 
 //------------------------------T.B ------------------------------

 const mulagoTB=  mulagoData.filter((patients)=>{

  return (patients.disease === "T.B")

})

const kirudduTB =  kirudduData.filter((patients)=>{

  return (patients.disease === "T.B")
  
})

const MuhTB=  muhData.filter((patients)=>{

  return (patients.disease === "T.B")
  
})


//--------------------------------Typhoid ---------------------------------


const mulagoTyphoid=  mulagoData.filter((patients)=>{

  return (patients.disease === "Typhoid")

})

const kirudduTyphoid =  kirudduData.filter((patients)=>{

  return (patients.disease === "Typhoid")
  
})

const MuhTyphoid=  muhData.filter((patients)=>{

  return (patients.disease === "Typhoid")
  
})
//------------------------------------Typhoid -------------------------------------


const totalMalaria = (mulagoMalaria.length + kirudduMalaria.length + Muhalaria.length)
const totalCovid = (mulagoCovid.length + kirudduCovid.length + MuhCovid.length)
const totalTB = (mulagoTB.length + kirudduTB.length + MuhTB.length)
const totalTyphoid = (mulagoTyphoid.length + kirudduTyphoid.length + MuhTyphoid.length)

const diseases=["","Malaria","COVID-19","T.B","Typhoid",""]
const total=[0,totalMalaria,totalCovid,totalTB,totalTyphoid,0]

  return (
    <div>
      <NavBar/>
      <Grid container className={classes.grid} alignContent="center" justifyContent="center">
        <Grid item xs={12} sm={7}>
        <Graph diseases={diseases} total={total}/>
        </Grid>
      </Grid>
     
    </div>
    
  );
}

export default App;

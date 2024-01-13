import React,{useEffect, useState} from 'react'
import Chart from "react-apexcharts";

function Visualization({entry}) {
  const [data,setData]=useState([30, 40, 45, 50, 49, 60, 70, 91])

  useEffect(()=>{
    if (entry==='purchase'){
      setData([10, 20, 45, 50, 49, 60, 70, 91])
    }
    else{
      setData([20, 50, 30, 40, 70, 20, 40, 100])
    }
  },[entry])
  
  return (
    <div className='w-full h-full duration-0'>
       <Chart 
       options={  
                { 
                   chart: {
                        foreColor:"#000",
                        id: "history-data",
                        toolbar: {
                            show:true,
                            tools:{
                            download: false,
                            selection: true,
                            zoom: false,
                            zoomin: true,
                            zoomout: true,
                            pan: true
                            }
                            
                        }
                        
                    },
                    dataLabels: {
                      enabled: false
                    },
                    xaxis: {
                        categories: ["1 jan","2 jan","3 jan","4 jan","5 jan","6 jan","7 jan","8 jan"]
                    },
                    colors:['#14b8a6','#042f2e','#5eead4'],
                    stroke: {
                      show: true,
                      curve: 'smooth',
                      lineCap: 'round',
                      width: 5,
                      // dashArray: 0, 
                  }
                }
            }
              
              series={
                [
                    {
                      name: entry,
                      data: data
                    }
                  ]
              }
              type="area"
              height={'100%'}
              width={'100%'}
            />
    </div>
  )
}

export default Visualization

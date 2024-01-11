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
    <div className='w-full h-full'>
       <Chart 
       options={  
                { 
                   chart: {
                        foreColor:"#000",
                        id: "history-data",
                        toolbar: {
                            show:false,
                        }
                        
                    },
                    dataLabels: {
                      enabled: false
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
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

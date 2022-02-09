const labels = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "June",
     "Jul",
     "Aug",
     "Sept",
     "Oct",
     "Nov",
     "Dec"
];
const data = {
    labels:labels,
    datasets:[{
        label:"lifetime earnings",
        backgroundColor:"#000",
        borderColor:"#3d5a80",
        data:[30, 58, 55, 40, 59, 50, 47,60,51,49,62,64],
        tension:0.4
    }]
}
const config = {
    type: 'line',
    data: data,
    options: {
      plugins:{
        legend:{
          display: false
        }
      },
      scales:{
        x:{
          grid:{
            display:false
          }
        },
        y:{
          grid:{
              display:false
            },
          
          ticks:{
            display:false
          }
        }      
      }
    }
  };
  const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
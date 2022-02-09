const labels = [
    'wk1',
    'wk2',
    'wk3',
    'wk4',
    'wk5',
    'wk6',
    'wk7',
    'wk8',
    'wk9',
    'wk10',
    'wk11',
    'wk12',

  ];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: '#fff',
    borderColor: '#fca311',
    data: [0, 18, 10, 11, 20, 20, 18,25,43,40,35,38],
  }]
};

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

const starTotal = 5;
const starRate = 4.5;
//run star when dom loads
document.addEventListener("DOMContentLoaded",()=>{
  // get percentage
  const starPercentage = starRate/starTotal * 100
  console.log(starPercentage)

  // round to the nearest 10
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`
  console.log(starPercentageRounded)

  //set width of stars-inner to percentage
  document.querySelector(" .stars .stars-inner").style.width = starPercentageRounded;


})



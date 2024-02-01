const MY_CHART = document.querySelector("#myChart");

// const LABELS = Utils.months({count: 7});
const data = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
  datasets: [{
    label: 'Price in rs',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: "blue",
    borderWidth: 1
  }]
};

const CONFIG = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
};

// console.log(Chart)

new Chart(MY_CHART,CONFIG);

anime({
  targets:MY_CHART,
  scale:1.5,
  duration:3000,
})

setTimeout(()=>{
  anime({
    targets:MY_CHART,
    scale:1,
    duration:5000
  })
},3000);
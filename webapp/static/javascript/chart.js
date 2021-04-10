const drawChart = async (datesList, timelineList) => {
  const dates = [];
  for (let i = 0; i < parseInt(datesList.length/10); i++) {
    dates.push(i);
  }
  const ctx = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["March 2020", "April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020"],
      // labels: dates, 
      datasets: timelineList
    },
    options: {
      title: {
        display: true,
        text: 'Number of Cases per Day in Each Region'
      },
      scales: {
        y: {
          max: 400
        }
      }
    },
  });
}
const getRegionDetails = async () => {
  try {
    const response = await axios.get('https://covid19-api-philippines.herokuapp.com/api/top-regions');
    if (response.status === 200) { 

      return response.data.data.map(obj => obj.region);
    }
  } catch (err) {
    console.log(err)
  }
}


const getRegionTimeline = async (region) => {
  try {
    let total = 0;
    let regionDetails = [];
    const response = await axios.get(`https://covid19-api-philippines.herokuapp.com/api/timeline?region=${region}`);
    if (response.status === 200) { 
      for (let i = 0; i < response.data.data.length; i++ ) {
        obj = response.data.data[i];
        // total += obj.cases - obj.recovered - obj.died;
        total += obj.cases;
        regionDetails.push(obj.cases);
      }
      const timelineDates = response.data.data.map(obj => obj.date);
      return [regionDetails, timelineDates];
    }
  } catch (err) {
    console.log(err)
  }
}

const mainChart = async () => {
  let timelineList = [];
  let datesList = [];
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const regionDetails = await getRegionDetails()
  for (let i = 0; i < regionDetails.length; i++) {
    let lineChartObj = { 
      data: [],
      label: "",
      borderColor: "#3e95cd",
      fill: false
    }
    const timelineDetails = await getRegionTimeline(regionDetails[i]);
    if (datesList.length === 0) {
      datesList = timelineDetails[i];
    } 
    lineChartObj['data'] = timelineDetails[0];
    lineChartObj['label'] = regionDetails[i];
    lineChartObj['borderColor'] = colors[i % 7];
    timelineList.push(lineChartObj);
  }

  await drawChart(datesList, timelineList);
}

mainChart();


function fetchData()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Fetching data...');
            resolve('data found');
        },2000);
    });
};
fetchData().then(result => {console.log(`Outside Function -- ${result}`);});
function displayData()
{
 fetchData().then(result => { console.log(`displayData -- ${result}`);});
}

async function getData()
{

  let result =   await fetchData();
  console.log("getData -- "+result);
}

displayData();
getData();
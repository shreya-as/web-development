// get user data
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetched data successfully!");
    }, 2000);
  });
}

// getUserData()
//   .then((data) => console.log(data, "data"))
//   .catch((error) => console.error(error, "error"));

// async function fetchData() {
//   console.log("Fetching data...");
//   let data = await getUserData();
//   console.log(data);
// }

async function fetchData() {
  try {
    console.log("fetching data");
    let data = await getUserData();
    console.log(data, "data with async await");
  } catch (error) {
    console.log(error, "error in async");
  }
}
fetchData();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

function getUserData(callback) {
  setTimeout(() => {
    callback("User data received");
  }, 2000);
}
console.log("Fetching user data...");
getUserData((data) => console.log(data));

// call back hell
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
}

function step3() {
  setTimeout(() => {
    console.log("Step 3 complete");
  }, 1000);
}

step1(() => {
  step2(() => {
    step3();
  });
});

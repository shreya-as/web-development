let form = document.getElementById("form");
let input = document.getElementById("input");

let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent reloading
  console.log("button clicked");

  formValidation();
});

// validate the form
let formValidation = () => {
  // check if the input is empty
  if (input.value === "") {
    msg.textContent = "Required!";
    console.log("failed");
  } else {
    console.log("success");
    acceptData();
  }
};

let data = {};
// accept the user input data
let acceptData = () => {
  data["text"] = input.value;
  createPost();
};
// create post
let createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
};

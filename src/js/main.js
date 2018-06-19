require("../css/main.css")
require("../index.html")
// alert("Hello World!! Checking");

const a = async () => {
  await message("Hello from the future", 1);
}
a()

const message = (msg, time) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(`${msg} (with a delay) of ${time} sec`);
    }, time * 1000)
  );
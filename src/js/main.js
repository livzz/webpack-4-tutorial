require("../css/main.css")
require("../index.html")
// alert("Hello World!! Checking");

const message = ({
    time,
    ...rest
  }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(`${rest.msg} (with a delay) of ${time} sec`);
    }, time * 1000)
  );

const a = async () => {
  await message({
    time: 1,
    msg: "Hello from the future"
  });
}
a()
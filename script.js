color = ["red", "blue", "yellow", "green"];
count = 5;
x = 0;
myimage = document.querySelector("#mainimage");
img = [
  "image/img12.jpg",
  "image/img13.jpg",
  "image/img14.jpg",
  "image/img17.jpg",
  "image/img16.jpg",
  "image/img28.jpg",
  "image/img30.jpg",
];
imgindex = 1;
function f1() {
  myimage.setAttribute("src", img[imgindex]);

  if (img.length - 1 == imgindex) {
    imgindex = 1;
  } else {
    imgindex++;
  }
  document.querySelector(".e").style.backgroundColor = color[x];
  if (color.length - 1 == x) {
    x = 0;
  } else {
    x++;
  }
  document.querySelector("#counter").innerText = count;
  if (count === 0) {
    count = 5;
    document.querySelector(".a").style.backgroundImage = "url('image/1.jpg')";
    document.querySelector("#counter").innerHTML =
      "<h3>Hello friends RAM RAM</h3>";
    ("hello frienDs ram ram");
  } else {
    count--;
  }
}

document.querySelector("#ck").addEventListener("click", f2);
function f2() {
  let info = document.querySelector("#ck").checked;
  console.log(info);
  let mess = document.querySelector("#mess").value;
  console.log(mess);
  if (info) {
    document.querySelector("#tran").value = mess;
  } else {
    document.querySelector("#mess").value = "";
  }
}
function f3() {
  document.querySelector("#btn1").style.backgroundImage =
    "url('image/img1.jpg')";
}

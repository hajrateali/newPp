const token = "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";
//------------------------------------------//
let all = document.querySelector('.all');
all.addEventListener('click', allpic);

function allpic() {
  console.log("Function called");
  fetch('https://raw.githubusercontent.com/hajrateali/newrepo/main/01shama-images.json')
    .then(res => res.json())
    .then(data => {
      data.images.forEach(image => {
        //console.log(image);
        const img = new Image();
        img.src = image.url;
        document.querySelector(".imgb").appendChild(img);
      });
    });
}

//-------------------------------------------//

let your = document.querySelector('.your');
your.addEventListener('click', youraa);

function youraa() {
  console.log("Function called");
  fetch('https://raw.githubusercontent.com/hajrateali/newrepo/main/02shama-images.json')
    .then(res => res.json())
    .then(dat => {
      dat.images.forEach(image => {
        const img = new Image();
        img.src = image.url;
        document.querySelector(".imgb").appendChild(img);
      });
    });
}


const relo = document.querySelector(".relo");
relo.addEventListener('click', reload);
function reload() {
  let imgb = document.querySelector(".imgb");
  imgb.innerHTML = "";
};

let allimg = document.querySelector('.allimg');
allimg.addEventListener('click', allimg1);
function allimg1() {
  console.log("Function called");
  fetch('https://api.github.com/repos/shamaali86055/PicAl/contents')
    .then(res => res.json())
    .then(dat1 => {
      console.log(dat1);
      dat1.forEach(file => {
        //console.log(file.);
        const img = new Image();
        img.src = file.download_url;
        document.querySelector(".imgb").appendChild(img);
      });
    });
}

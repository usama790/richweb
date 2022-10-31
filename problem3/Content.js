//array of images
let catsImages = [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7l1BexP97cFy7zLu5x3mBIqoZD_XpVR1LwA&usqp=CAU"
];

//reverse through array of images§
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about cats.";
    p[i].style.color = "red";

    p[i].style.writingmode = "vertical-rl";
}
document.body.style.backgroundColor = "green";
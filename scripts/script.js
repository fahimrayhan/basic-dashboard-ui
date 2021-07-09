const body = document.getElementsByTagName('body')[0];
const nav = document.getElementsByClassName('navLinks')[0];
DarkTheme = () => {
    body.style.backgroundColor = "#272822";
}
LightTheme = () => {
    body.style.backgroundColor = "#f1efef"
}

openNav = () => {
    nav.style.width = "250px";
}
closeNav = () => {
    nav.style.width = "0";  
}

Hello = () => {
    console.log("Hello");
    console.log(body);
}
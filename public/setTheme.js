function setTheme(){
        if (window.matchMedia("(prefers-color-scheme: dark)").matches){
            document.getElementById("checkbox").checked = true;
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.getElementById("hero-img-light").classList.add("hidden");
            document.getElementById("hero-img-dark").classList.remove("hidden");
        }
}
module.exports = setTheme;
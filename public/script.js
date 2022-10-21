// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
  
//     if (currentTheme === 'dark') {
//         document.getElementById("checkbox").checked = true;
//     }
// }

function switchTheme() {
    if (document.getElementById("checkbox").checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById("hero-img-light").classList.add("hidden");
        document.getElementById("hero-img-dark").classList.remove("hidden");
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          document.getElementById("hero-img-dark").classList.add("hidden");
        document.getElementById("hero-img-light").classList.remove("hidden");
    }  

    
}
module.exports = switchTheme;

//toggleSwitch.addEventListener('change', switchTheme, false);

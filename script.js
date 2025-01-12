// Fetch and inject navbar
fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-container').innerHTML = data;
                // Initialize toggle functionality after injection
                const toggleButton = document.querySelector('.navbar-toggle');
                const navbarLinks = document.querySelector('.navbar-links');
                setupLoginLogout()

                if (toggleButton && navbarLinks) {
                    toggleButton.addEventListener('click', () => {
                        navbarLinks.classList.toggle('active');
                    });
                }
            })
            .catch(error => console.error('Error loading navbar:', error));
        
fetch('footer.html')
    .then(response => response.text())
    .then(data1 =>{
                    document.getElementById('footer-container').innerHTML = data1;
                })

console.log(localStorage.getItem("authToken"));
function setupLoginLogout() {
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    // Check if authToken exists in localStorage
    if (localStorage.getItem("authToken")) {
        loginLink.style.display = "none";
        logoutLink.style.display = "block";
    } else {
        loginLink.style.display = "block";
        logoutLink.style.display = "none";
    }

    // Handle logout functionality
    logoutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        localStorage.removeItem("authToken"); // Remove the auth token
        alert("You have been logged out.");
        loginLink.style.display = "block";
        logoutLink.style.display = "none";
        window.location.href = "index.html"; // Redirect after logout
    });
}
                // document.addEventListener("DOMContentLoaded", function () {
                //       const loginLink = document.getElementById("loginLink");
                //       const logoutLink = document.getElementById("logoutLink");
              
                //       // Check for authToken in local storage
                //       if (localStorage.getItem("authToken")) {
                //           loginLink.style.display = "none";
                //           logoutLink.style.display = "block";
                //       }
              
                //       // Handle logout functionality
                //       logoutLink.addEventListener("click", function (event) {
                //           event.preventDefault();  // Prevent default link behavior
                //           console.log("hello");
                          
                //           localStorage.removeItem("authToken");
                //           alert("You have been logged out.");
                //           loginLink.style.display = "block";
                //           logoutLink.style.display = "none";
                //           window.location.href = "index.html"; // Redirect to home page after logout
                //       });
                //   });
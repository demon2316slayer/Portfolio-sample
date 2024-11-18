
/*Code for drop down menu*/
document.getElementById("menu-toggle").addEventListener('click',function(){
   const menu=document.getElementById("menu")
   menu.classList.toggle("show"); // Toggle the 'show' class

})

/*code for animation working on scroll*/
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to handle scroll event
function handleScroll() {
    const items = document.querySelectorAll('.str3, .str4, .str5,.grid-item');
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible'); // Add the visible class when in viewport
        } else {
            item.classList.remove('visible'); // Remove the visible class when out of viewport
        }
    });
}

// Listen to scroll events
window.addEventListener('scroll', handleScroll);

// Trigger the scroll handler initially to check items on load
handleScroll();

// JavaScript to enable the "Download Template" button functionality
document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    
    // Create an anchor element for the download
    const link = document.createElement('a');
    link.href = 'template.zip'; // Replace 'template.zip' with the actual path to your ZIP file
    link.download = 'template.zip'; // Name of the downloaded file
    link.click(); // Trigger the download
});

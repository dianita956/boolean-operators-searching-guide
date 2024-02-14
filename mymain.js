// Select all the top-level li elements
const listItems = document.querySelectorAll('.toggle > li');

// Add a click event listener to each li element
listItems.forEach(function(listItem) {
    listItem.addEventListener('click', function() {
        // Select the ul element within the clicked li element
        const subList = this.querySelector('ul');

        // Toggle the visibility of the ul element
        if (subList.style.display === 'none') {
            subList.style.display = 'block';
        } else {
            subList.style.display = 'none';
        }
    });
});

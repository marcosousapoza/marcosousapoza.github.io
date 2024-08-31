// Function to send data to the Raspberry Pi
function sendDataToPi() {
    const data = {
        message: "Hello, Raspberry Pi!",
        timestamp: new Date().toISOString()
    };

    // Fetch request to the Raspberry Pi's Flask server
    fetch('https://sousa-poza.xyz/test', {  // Connect to backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();  // Parse the JSON from the response
    })
    .then(data => {
        // Log the success and update the page with the response
        console.log('Success:', data);
        document.getElementById('pi-response').innerText = "Response from Pi: " + data.message + " | Received: " + JSON.stringify(data.received);
    })
    .catch((error) => {
        // Log any errors and update the page with an error message
        console.error('Error:', error);
        document.getElementById('pi-response').innerText = "Error communicating with Pi.";
    });
}

// Event listener to ensure the DOM is loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Attach the sendDataToPi function to the button's click event
    document.getElementById('test-pi-button').addEventListener('click', sendDataToPi);
});



function loadFeaturedProject() {
    const projects = [
        {
            title: "Project One",
            description: "This project demonstrates my skills in web development...",
            technologies: "HTML, CSS, JavaScript",
            detailsLink: "project1-details.html",
            repoLink: "https://github.com/yourusername/project-one"
        },
        {
            title: "Project Two",
            description: "A mobile app built with React Native...",
            technologies: "React Native, JavaScript",
            detailsLink: "project2-details.html",
            repoLink: "https://github.com/yourusername/project-two"
        }
    ];

    const featuredProject = projects[Math.floor(Math.random() * projects.length)];
    
    document.getElementById('project-highlight').innerHTML = `
        <h3>${featuredProject.title}</h3>
        <p>${featuredProject.description}</p>
        <p><strong>Key Technologies:</strong> ${featuredProject.technologies}</p>
        <a href="${featuredProject.detailsLink}" class="button">View Project Details</a>
        <a href="${featuredProject.repoLink}" class="button">View on GitHub</a>
    `;
}

document.addEventListener('DOMContentLoaded', loadFeaturedProject);

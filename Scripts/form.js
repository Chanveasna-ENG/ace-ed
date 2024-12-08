function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Convert form data to JSON object
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Simulate sending JSON data using AJAX
    setTimeout(function() {
        // Mimic a backend response directly in the front end
        const containerDiv = document.getElementById('form-container');
        containerDiv.innerHTML = `<p>Thank you for contacting us, <span style='color: green;'>${formData.name}</span>!</p>`;

        // Wait for 5 seconds, then recreate the original container
        setTimeout(function() {
            containerDiv.innerHTML = `
                <form id="form" action="submit" method="post">
                    <div class="form-control">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required>
                    </div>
                    <div class="form-control">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required>
                    </div>
                    <div class="form-control">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" cols="60" rows="10" required></textarea>
                    </div>
                    <button type="submit" class="primary_button" style="margin-top: 0; width: 100%;">Submit</button>
                </form>
            `;

            // Reattach the event listener to the new form
            document.getElementById('form').addEventListener('submit', handleFormSubmit);
        }, 5000); // Wait for 5 seconds
    }, 1000); // Simulate network delay
}

// Attach the event listener to the form
document.getElementById('form').addEventListener('submit', handleFormSubmit);
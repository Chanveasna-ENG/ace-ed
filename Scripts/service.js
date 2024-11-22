// Tutor data
const tutors = {
    Math: [
        {
            name: 'Dr. Sarah Chen',
            education: 'Ph.D. in Mathematics',
            experience: '8 years',
            rating: 4.9,
            price: 45,
            subjects: ['Calculus', 'Algebra', 'Statistics'],
            availability: ['9:00', '10:00', '14:00', '15:00'],
            description: 'Specializes in advanced mathematics and test preparation'
        },
        {
            name: 'Prof. Michael Torres',
            education: 'M.S. in Applied Mathematics',
            experience: '6 years',
            rating: 4.8,
            price: 35,
            subjects: ['Geometry', 'Trigonometry', 'Pre-Calculus'],
            availability: ['11:00', '13:00', '16:00'],
            description: 'Expert in making complex concepts simple and engaging'
        },
        {
            name: 'Lisa Wang',
            education: 'B.S. in Mathematics Education',
            experience: '4 years',
            rating: 4.7,
            price: 30,
            subjects: ['Basic Math', 'Algebra', 'Geometry'],
            availability: ['12:00', '14:00', '17:00'],
            description: 'Specializes in foundational mathematics and early education'
        }
    ],
    Science: [
        {
            name: 'Dr. James Wilson',
            education: 'Ph.D. in Physics',
            experience: '10 years',
            rating: 4.9,
            price: 50,
            subjects: ['Physics', 'Chemistry', 'Biology'],
            availability: ['9:00', '11:00', '15:00'],
            description: 'Experienced in teaching all science subjects at advanced levels'
        },
        {
            name: 'Dr. Emily Roberts',
            education: 'Ph.D. in Chemistry',
            experience: '7 years',
            rating: 4.8,
            price: 45,
            subjects: ['Chemistry', 'Biology', 'Environmental Science'],
            availability: ['10:00', '13:00', '16:00'],
            description: 'Specializes in chemistry and laboratory techniques'
        },
        {
            name: 'Mark Johnson',
            education: 'M.S. in Biology',
            experience: '5 years',
            rating: 4.7,
            price: 35,
            subjects: ['Biology', 'Earth Science', 'Environmental Science'],
            availability: ['11:00', '14:00', '17:00'],
            description: 'Focus on life sciences and environmental studies'
        }
    ],
    English: [
        {
            name: 'Prof. Elizabeth Brown',
            education: 'M.A. in English Literature',
            experience: '12 years',
            rating: 4.9,
            price: 40,
            subjects: ['Literature', 'Writing', 'Grammar'],
            availability: ['9:00', '12:00', '15:00'],
            description: 'Expert in literature analysis and essay writing'
        },
        {
            name: 'Robert Smith',
            education: 'M.F.A. in Creative Writing',
            experience: '8 years',
            rating: 4.8,
            price: 35,
            subjects: ['Creative Writing', 'Essay Writing', 'Grammar'],
            availability: ['10:00', '13:00', '16:00'],
            description: 'Specializes in creative writing and composition'
        },
        {
            name: 'Amanda Lee',
            education: 'B.A. in English Education',
            experience: '5 years',
            rating: 4.7,
            price: 30,
            subjects: ['Basic English', 'Grammar', 'Reading'],
            availability: ['11:00', '14:00', '17:00'],
            description: 'Focus on foundational English skills and reading'
        }
    ]
};

// Service card selection
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        serviceCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

// Filter handlers
const subjectFilter = document.getElementById('subject-filter');
const priceFilter = document.getElementById('price-filter');

function getFilteredTutors() {
    const subject = subjectFilter.value;
    const priceRange = priceFilter.value;

    let filtered = [];
    if (subject === 'all') {
        Object.values(tutors).forEach(subjectTutors => {
            filtered = filtered.concat(subjectTutors);
        });
    } else {
        filtered = tutors[subject] || [];
    }

    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filtered = filtered.filter(tutor => 
            tutor.price >= min && (max ? tutor.price <= max : true)
        );
    }

    return filtered;
}

function renderTutors() {
    const tutorsGrid = document.getElementById('tutors-grid');
    const filteredTutors = getFilteredTutors();
    
    tutorsGrid.innerHTML = filteredTutors.map(tutor => `
        <div class="tutor-card">
            <div class="tutor-header">
                <div>
                    <h3 class="tutor-name">${tutor.name}</h3>
                    <div class="tutor-rating">
                        ⭐ ${tutor.rating} (${tutor.experience} experience)
                    </div>
                    <div>${tutor.education}</div>
                </div>
                <div class="tutor-price">$${tutor.price}/hr</div>
            </div>
            <div class="tutor-subjects">
                ${tutor.subjects.map(subject => 
                    `<span class="tutor-subject">${subject}</span>`
                ).join('')}
            </div>
            <p class="tutor-description">${tutor.description}</p>
            <div class="booking-section">
                <select class="time-select">
                    ${tutor.availability.map(time => 
                        `<option value="${time}">${time}</option>`
                    ).join('')}
                </select>
                <button class="book-btn">Book Session</button>
            </div>
        </div>
    `).join('');

    // Add booking button handlers
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Booking functionality would go here!');
        });
    });
}

// Initial render
renderTutors();

// Add filter change handlers
subjectFilter.addEventListener('change', renderTutors);
priceFilter.addEventListener('change', renderTutors);


// Modal and form handling
const modal = document.getElementById('booking-modal');
const closeBtn = document.querySelector('.close');
const bookingForm = document.getElementById('booking-form');

// Close modal when clicking the X or outside the modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function renderTutors() {
    const tutorsGrid = document.getElementById('tutors-grid');
    const filteredTutors = getFilteredTutors();
    
    tutorsGrid.innerHTML = filteredTutors.map(tutor => `
        <div class="tutor-card">
            <div class="tutor-header">
                <div>
                    <h3 class="tutor-name">${tutor.name}</h3>
                    <div class="tutor-rating">
                        ⭐ ${tutor.rating} (${tutor.experience} experience)
                    </div>
                    <div>${tutor.education}</div>
                </div>
                <div class="tutor-price">$${tutor.price}/hr</div>
            </div>
            <div class="tutor-subjects">
                ${tutor.subjects.map(subject => 
                    `<span class="tutor-subject">${subject}</span>`
                ).join('')}
            </div>
            <p class="tutor-description">${tutor.description}</p>
            <div class="booking-section">
                <select class="time-select">
                    ${tutor.availability.map(time => 
                        `<option value="${time}">${time}</option>`
                    ).join('')}
                </select>
                <button class="book-btn" 
                    data-tutor="${tutor.name}"
                    data-price="${tutor.price}">
                    Book Session
                </button>
            </div>
        </div>
    `).join('');

    // Add booking button handlers
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tutorName = e.target.dataset.tutor;
            const price = e.target.dataset.price;
            const timeSelect = e.target.parentElement.querySelector('.time-select');
            const selectedTime = timeSelect.value;

            // Set hidden form values
            document.getElementById('tutor-name').value = tutorName;
            document.getElementById('session-time').value = selectedTime;
            document.getElementById('session-price').value = price;

            // Update booking summary
            document.getElementById('summary-tutor').textContent = tutorName;
            document.getElementById('summary-time').textContent = selectedTime;
            document.getElementById('summary-price').textContent = `$${price}/hr`;

            // Show modal
            modal.style.display = "block";
        });
    });
}

// Form submission handling
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        tutorName: document.getElementById('tutor-name').value,
        sessionTime: document.getElementById('session-time').value,
        sessionPrice: document.getElementById('session-price').value,
        userName: document.getElementById('user-name').value,
        userEmail: document.getElementById('user-email').value,
        userPhone: document.getElementById('user-phone').value,
        cardNumber: document.getElementById('card-number').value,
        cardExpiry: document.getElementById('card-expiry').value,
        cardCvv: document.getElementById('card-cvv').value
    };

    // Here you would typically send this data to your server
    console.log('Booking submitted:', formData);
    
    // Show success message
    alert('Booking successful! You will receive a confirmation email shortly.');
    
    // Clear form and close modal
    bookingForm.reset();
    modal.style.display = "none";
});

// Initial render
renderTutors();

// Add filter change handlers
subjectFilter.addEventListener('change', renderTutors);
priceFilter.addEventListener('change', renderTutors);

// Add input validation for card fields
document.getElementById('card-number').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').slice(0, 16);
});

document.getElementById('card-expiry').addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    this.value = value;
});

document.getElementById('card-cvv').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').slice(0, 4);
});
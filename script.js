// Global appointments array
let appointments = [];
let lastAddedAppointmentId = null;
let viewMode = 'today'; // 'today' or 'all'

// Initialize app on page load
document.addEventListener('DOMContentLoaded', function() {
    loadAppointments();
    initializeEventListeners();
    setTodayAsDefaultDate();
    displayAppointments();
});

// Load appointments from localStorage
function loadAppointments() {
    const stored = localStorage.getItem('appointments');
    if (stored) {
        appointments = JSON.parse(stored);
    }
}

// Save appointments to localStorage
function saveAppointments() {
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Generate unique appointment ID
function generateAppointmentId() {
    if (appointments.length === 0) {
        return 'APT001';
    }
    
    // Get the highest number from existing IDs
    const numbers = appointments.map(apt => {
        const num = parseInt(apt.id.replace('APT', ''));
        return isNaN(num) ? 0 : num;
    });
    
    const maxNum = Math.max(...numbers);
    const newNum = maxNum + 1;
    return 'APT' + String(newNum).padStart(3, '0');
}

// Set today's date as default in filter
function setTodayAsDefaultDate() {
    // Don't set default date - let users see all appointments
    // const today = new Date().toISOString().split('T')[0];
    // document.getElementById('filterDate').value = today;
}

// Initialize all event listeners
function initializeEventListeners() {
    // Form submission
    document.getElementById('appointmentForm').addEventListener('submit', handleFormSubmit);
    
    // Clear form button
    document.getElementById('clearBtn').addEventListener('click', clearForm);
    
    // Patient search button
    document.getElementById('searchPatientBtn').addEventListener('click', searchPatient);
    
    // Generate confirmation script button
    document.getElementById('generateScriptBtn').addEventListener('click', generateConfirmationScript);
    
    // Filter and sort buttons
    document.getElementById('applyFiltersBtn').addEventListener('click', displayAppointments);
    document.getElementById('sortByTimeBtn').addEventListener('click', sortByTime);
    document.getElementById('sortByDoctorBtn').addEventListener('click', sortByDoctor);
    
    // Delete button
    document.getElementById('deleteBtn').addEventListener('click', deleteAppointment);
    
    // Auto-refresh: Listen for filter changes (live filtering)
    document.getElementById('filterDoctor').addEventListener('change', displayAppointments);
    document.getElementById('filterDate').addEventListener('change', displayAppointments);
    
    // Quick filter buttons
    document.getElementById('todayBtn').addEventListener('click', showTodayAppointments);
    document.getElementById('showAllBtn').addEventListener('click', showAllAppointments);
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        patientName: document.getElementById('patientName').value.trim(),
        dob: document.getElementById('dob').value,
        patientId: document.getElementById('patientId').value.trim(),
        contact: document.getElementById('contact').value.trim(),
        email: document.getElementById('email').value.trim(),
        doctor: document.getElementById('doctor').value,
        date: document.getElementById('appointmentDate').value,
        time: document.getElementById('appointmentTime').value,
        reason: document.getElementById('reason').value,
        priority: document.getElementById('priority').value,
        allergies: document.getElementById('allergies').value.trim(),
        notes: document.getElementById('notes').value.trim()
    };
    
    // Validate form
    if (!validateForm(formData)) {
        return;
    }
    
    // Check for conflicts
    if (checkConflict(formData)) {
        return;
    }
    
    // Set default for allergies if empty
    if (!formData.allergies) {
        formData.allergies = 'None known';
    }
    
    // Create appointment object
    const appointment = {
        id: generateAppointmentId(),
        ...formData
    };
    
    // Add to array and save
    appointments.push(appointment);
    saveAppointments();
    
    // Store the ID of newly added appointment for highlighting
    lastAddedAppointmentId = appointment.id;
    
    // Show success message
    alert('Appointment saved successfully. Ready for next call.');
    
    // Clear form and refresh display
    clearForm();
    displayAppointments();
    
    // Scroll to dashboard to show the new appointment
    setTimeout(() => {
        document.querySelector('.dashboard').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Validate form data
function validateForm(data) {
    // Patient Name validation
    if (!data.patientName || data.patientName.length < 2) {
        alert('Patient name is required (minimum 2 characters)');
        return false;
    }
    
    // Patient ID validation - exactly 6 digits
    if (!/^\d{6}$/.test(data.patientId)) {
        alert('Patient ID must be 6 digits (for example 123456)');
        return false;
    }
    
    // Contact validation - 10+ digits
    const contactDigits = data.contact.replace(/\D/g, '');
    if (contactDigits.length < 10) {
        alert('Contact number must be 10 or more digits (for example 6135551234)');
        return false;
    }
    
    // Email validation
    if (!data.email.includes('@')) {
        alert('Please enter a valid email (for example john@example.com)');
        return false;
    }
    
    // Doctor validation
    if (!data.doctor) {
        alert('Please select a doctor');
        return false;
    }
    
    // Date validation - no past dates
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('Date cannot be in the past');
        return false;
    }
    
    // Reason validation
    if (!data.reason) {
        alert('Please provide a reason for visit');
        return false;
    }
    
    // Allergies validation
    if (!data.allergies) {
        alert('Allergies field is required. List allergies or enter \'None known\'');
        return false;
    }
    
    return true;
}

// Check for appointment conflicts (PDF Requirement: Same Patient ID + Same Doctor + Same Date + Same Time)
function checkConflict(newAppointment) {
    const conflict = appointments.find(apt => 
        apt.patientId === newAppointment.patientId &&
        apt.doctor === newAppointment.doctor &&
        apt.date === newAppointment.date &&
        apt.time === newAppointment.time
    );
    
    if (conflict) {
        // Calculate alternative times
        const [hours, minutes] = newAppointment.time.split(':').map(Number);
        const time30 = new Date(2000, 0, 1, hours, minutes + 30);
        const time60 = new Date(2000, 0, 1, hours, minutes + 60);
        
        const format = (date) => {
            const h = String(date.getHours()).padStart(2, '0');
            const m = String(date.getMinutes()).padStart(2, '0');
            return `${h}:${m}`;
        };
        
        alert(`Error: ${newAppointment.doctor} is already booked at ${newAppointment.time} on ${newAppointment.date}. Try ${format(time30)}, ${format(time60)}...`);
        return true;
    }
    
    return false;
}

// Clear form
function clearForm() {
    document.getElementById('appointmentForm').reset();
    // Reset priority to default
    document.getElementById('priority').value = 'Routine';
}

// Search for returning patient (Custom Feature 1 - Enhanced)
function searchPatient() {
    const searchId = document.getElementById('searchPatientId').value.trim();
    const resultsContainer = document.getElementById('patientSearchResults');
    
    if (!searchId) {
        alert('Please enter a Patient ID to search');
        return;
    }
    
    // Search for ALL patients with this ID (handle multiple matches)
    const foundPatients = appointments.filter(apt => apt.patientId === searchId);
    
    // Remove duplicates based on patient details (same name + DOB = same person)
    const uniquePatients = [];
    foundPatients.forEach(apt => {
        const exists = uniquePatients.find(p => 
            p.patientName === apt.patientName && 
            p.dob === apt.dob
        );
        if (!exists) {
            uniquePatients.push(apt);
        }
    });
    
    if (uniquePatients.length === 0) {
        // No patient found
        resultsContainer.style.display = 'none';
        alert(`No patient found with ID: ${searchId}`);
    } else if (uniquePatients.length === 1) {
        // Single patient found - auto-fill directly
        const patient = uniquePatients[0];
        autoFillPatientInfo(patient);
        resultsContainer.style.display = 'none';
        alert(`Patient found! Information has been auto-filled.`);
    } else {
        // Multiple patients found - show selection
        displayPatientSelection(uniquePatients);
    }
}

// Auto-fill patient information into form
function autoFillPatientInfo(patient) {
    document.getElementById('patientName').value = patient.patientName;
    document.getElementById('dob').value = patient.dob;
    document.getElementById('patientId').value = patient.patientId;
    document.getElementById('contact').value = patient.contact;
    document.getElementById('email').value = patient.email;
    document.getElementById('allergies').value = patient.allergies;
}

// Display patient selection when multiple matches found
function displayPatientSelection(patients) {
    const resultsContainer = document.getElementById('patientSearchResults');
    
    let html = '<h4>Multiple patients found. Please select:</h4>';
    html += '<div class="patient-results-grid">';
    
    patients.forEach((patient, index) => {
        // Get last visit details
        const patientAppointments = appointments.filter(apt => 
            apt.patientId === patient.patientId && 
            apt.patientName === patient.patientName &&
            apt.dob === patient.dob
        );
        
        // Sort by date to get most recent
        patientAppointments.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });
        
        const lastAppointment = patientAppointments[0];
        const lastVisitFormatted = new Date(lastAppointment.date + 'T00:00:00').toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        html += `
            <div class="patient-result-item" onclick="selectPatient(${index})">
                <strong>${patient.patientName}</strong>
                <div class="patient-details">
                    <span><strong>DOB:</strong> ${patient.dob}</span>
                    <span><strong>Contact:</strong> ${patient.contact}</span>
                    <span><strong>Doctor:</strong> ${lastAppointment.doctor}</span>
                    <span><strong>Reason:</strong> ${lastAppointment.reason}</span>
                    <span><strong>Last Visit:</strong> ${lastVisitFormatted}</span>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
    resultsContainer.style.display = 'block';
    
    // Store patients in global variable for selection
    window.searchedPatients = patients;
}

// Select patient from search results
function selectPatient(index) {
    const patient = window.searchedPatients[index];
    autoFillPatientInfo(patient);
    
    // Hide results
    document.getElementById('patientSearchResults').style.display = 'none';
    
    alert(`Patient selected! Information has been auto-filled.`);
}

// Generate confirmation script (Custom Feature 2)
function generateConfirmationScript() {
    const patientName = document.getElementById('patientName').value.trim();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;
    const reason = document.getElementById('reason').value;
    
    if (!patientName || !doctor || !date || !time || !reason) {
        alert('Please fill in all required fields before generating confirmation script');
        return;
    }
    
    // Format date for better readability
    const dateObj = new Date(date + 'T00:00:00');
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Format time for better readability
    const [hours, minutes] = time.split(':');
    const timeObj = new Date(2000, 0, 1, hours, minutes);
    const formattedTime = timeObj.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
    
    const script = `I have you booked with ${doctor} on ${formattedDate} at ${formattedTime} for ${reason}. Is that correct?`;
    
    alert(script);
}

// Show today's appointments
function showTodayAppointments() {
    viewMode = 'today';
    
    // Update button states
    document.getElementById('todayBtn').classList.add('active');
    document.getElementById('showAllBtn').classList.remove('active');
    
    // Clear date filter when viewing today
    document.getElementById('filterDate').value = '';
    
    // Update display
    displayAppointments();
}

// Show all appointments
function showAllAppointments() {
    viewMode = 'all';
    
    // Update button states
    document.getElementById('todayBtn').classList.remove('active');
    document.getElementById('showAllBtn').classList.add('active');
    
    // Update display
    displayAppointments();
}

// Display appointments in table
function displayAppointments() {
    const tbody = document.getElementById('appointmentsTableBody');
    const filterDoctor = document.getElementById('filterDoctor').value;
    const filterDate = document.getElementById('filterDate').value;
    const today = new Date().toISOString().split('T')[0];
    
    // Filter appointments based on view mode
    let filtered = appointments.filter(apt => {
        let matches = true;
        
        // Apply view mode filter first (today vs all)
        if (viewMode === 'today') {
            if (apt.date !== today) {
                matches = false;
            }
        }
        
        // Then apply doctor filter
        if (filterDoctor && apt.doctor !== filterDoctor) {
            matches = false;
        }
        
        // Then apply date filter (only if in 'all' mode)
        if (viewMode === 'all' && filterDate && apt.date !== filterDate) {
            matches = false;
        }
        
        return matches;
    });
    
    // Clear table
    tbody.innerHTML = '';
    
    // Update count with appropriate label
    const countLabel = viewMode === 'today' ? 'Appointments today' : 'Total appointments';
    document.getElementById('appointmentCount').innerHTML = `${countLabel}: <span id="countNumber">${filtered.length}</span>`;
    
    // Update last refreshed time
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });
    document.getElementById('lastUpdated').textContent = `Last updated: ${timeString}`;
    
    // Display appointments
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="empty-state"><p>No appointments found for the selected filters.</p></td></tr>';
        return;
    }
    
    filtered.forEach(apt => {
        const row = document.createElement('tr');
        
        // Format date and time
        const dateObj = new Date(apt.date + 'T00:00:00');
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
        
        const [hours, minutes] = apt.time.split(':');
        const timeObj = new Date(2000, 0, 1, hours, minutes);
        const formattedTime = timeObj.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
        
        row.innerHTML = `
            <td>${apt.id}</td>
            <td>${apt.patientName}</td>
            <td>${apt.dob}</td>
            <td>${apt.patientId}</td>
            <td>${apt.contact}</td>
            <td>${apt.doctor}</td>
            <td>${formattedDate} ${formattedTime}</td>
            <td>${apt.allergies}</td>
            <td>${apt.reason}</td>
            <td>${apt.priority}</td>
        `;
        
        // Apply priority styling AFTER innerHTML (Custom Feature 3)
        if (apt.priority === 'Urgent') {
            row.classList.add('priority-urgent');
        }
        
        // Highlight newly added appointment AFTER innerHTML
        if (lastAddedAppointmentId && apt.id === lastAddedAppointmentId) {
            row.classList.add('newly-added');
            // Clear the highlight flag after animation
            setTimeout(() => {
                lastAddedAppointmentId = null;
            }, 2000);
        }
        
        tbody.appendChild(row);
    });
}

// Sort appointments by time
function sortByTime() {
    const filterDoctor = document.getElementById('filterDoctor').value;
    const filterDate = document.getElementById('filterDate').value;
    const today = new Date().toISOString().split('T')[0];
    
    // Filter first based on view mode
    let filtered = appointments.filter(apt => {
        let matches = true;
        
        // Apply view mode filter
        if (viewMode === 'today') {
            if (apt.date !== today) matches = false;
        }
        
        if (filterDoctor && apt.doctor !== filterDoctor) matches = false;
        if (viewMode === 'all' && filterDate && apt.date !== filterDate) matches = false;
        return matches;
    });
    
    // Sort by date and time
    filtered.sort((a, b) => {
        const dateTimeA = new Date(a.date + 'T' + a.time);
        const dateTimeB = new Date(b.date + 'T' + b.time);
        return dateTimeA - dateTimeB;
    });
    
    // Display sorted
    displaySortedAppointments(filtered);
}

// Sort appointments by doctor
function sortByDoctor() {
    const filterDoctor = document.getElementById('filterDoctor').value;
    const filterDate = document.getElementById('filterDate').value;
    const today = new Date().toISOString().split('T')[0];
    
    // Filter first based on view mode
    let filtered = appointments.filter(apt => {
        let matches = true;
        
        // Apply view mode filter
        if (viewMode === 'today') {
            if (apt.date !== today) matches = false;
        }
        
        if (filterDoctor && apt.doctor !== filterDoctor) matches = false;
        if (viewMode === 'all' && filterDate && apt.date !== filterDate) matches = false;
        return matches;
    });
    
    // Sort by doctor name
    filtered.sort((a, b) => a.doctor.localeCompare(b.doctor));
    
    // Display sorted
    displaySortedAppointments(filtered);
}

// Display sorted appointments
function displaySortedAppointments(filtered) {
    const tbody = document.getElementById('appointmentsTableBody');
    tbody.innerHTML = '';
    
    // Update count with appropriate label
    const countLabel = viewMode === 'today' ? 'Appointments today' : 'Total appointments';
    document.getElementById('appointmentCount').innerHTML = `${countLabel}: <span id="countNumber">${filtered.length}</span>`;
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="empty-state"><p>No appointments found for the selected filters.</p></td></tr>';
        return;
    }
    
    filtered.forEach(apt => {
        const row = document.createElement('tr');
        
        const dateObj = new Date(apt.date + 'T00:00:00');
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
        
        const [hours, minutes] = apt.time.split(':');
        const timeObj = new Date(2000, 0, 1, hours, minutes);
        const formattedTime = timeObj.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
        
        row.innerHTML = `
            <td>${apt.id}</td>
            <td>${apt.patientName}</td>
            <td>${apt.dob}</td>
            <td>${apt.patientId}</td>
            <td>${apt.contact}</td>
            <td>${apt.doctor}</td>
            <td>${formattedDate} ${formattedTime}</td>
            <td>${apt.allergies}</td>
            <td>${apt.reason}</td>
            <td>${apt.priority}</td>
        `;
        
        // Apply priority styling AFTER innerHTML
        if (apt.priority === 'Urgent') {
            row.classList.add('priority-urgent');
        }
        
        tbody.appendChild(row);
    });
}

// Delete appointment
function deleteAppointment() {
    const deleteId = document.getElementById('deleteId').value.trim().toUpperCase();
    
    if (!deleteId) {
        alert('Please enter an Appointment ID');
        return;
    }
    
    const index = appointments.findIndex(apt => apt.id === deleteId);
    
    if (index === -1) {
        alert(`Appointment ${deleteId} not found`);
        return;
    }
    
    // Remove appointment
    appointments.splice(index, 1);
    saveAppointments();
    
    // Clear input and refresh display
    document.getElementById('deleteId').value = '';
    displayAppointments();
    
    alert('Appointment deleted.');
}


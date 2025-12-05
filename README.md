# Clinic Appointment System

A professional clinic appointment booking system built with vanilla JavaScript, HTML5, and CSS3. This system allows healthcare facilities to manage patient appointments efficiently with features like patient lookup, conflict detection, and priority flagging.

## 🚀 Features

### Core Functionality
- **Patient Lookup** - Search for returning patients by ID to auto-fill information
- **Appointment Booking** - Complete form with validation for all required fields
- **Daily Dashboard** - View, filter, and sort appointments by doctor, date, and time
- **Conflict Detection** - Prevents double-booking doctors at the same time
- **Data Persistence** - All data saved to browser localStorage

### Custom Features (Assignment Requirements)
1. **Returning Patient Lookup (Hard)** - Auto-fill patient information from previous appointments
2. **Appointment Confirmation Script (Medium)** - Generate professional confirmation messages
3. **Priority Flag (Easy)** - Visual highlighting for urgent appointments

## 📋 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local server) OR any HTTP server

## 🛠️ Installation & Setup

### Option 1: Using Python (Recommended)

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd Clinic-Appointment-System
   ```
3. Start the Python HTTP server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and go to:
   ```
   http://localhost:8000
   ```

### Option 2: Using Node.js

1. Install http-server globally:
   ```bash
   npm install -g http-server
   ```
2. Navigate to the project directory and run:
   ```bash
   http-server -p 8000
   ```
3. Open your browser and go to:
   ```
   http://localhost:8000
   ```

### Option 3: Direct File Access

You can also open `index.html` directly in your browser, but some features may be limited due to browser security restrictions.

## 📁 Project Structure

```
Clinic-Appointment-System/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── requiremnts.md      # Assignment specifications
└── .gitignore         # Git ignore file
```

## 🎯 Usage Guide

### Booking an Appointment

1. **Search for Returning Patient (Optional)**
   - Enter Patient ID in the lookup section
   - Click "Search Patient" to auto-fill information

2. **Fill Out the Form**
   - Patient Name (minimum 2 characters)
   - Date of Birth
   - Patient ID (exactly 6 digits)
   - Contact Number (10+ digits)
   - Email Address (must contain @)
   - Select Doctor (Dr. Smith, Dr. Patel, or Dr. Wang)
   - Appointment Date (no past dates)
   - Appointment Time
   - Reason for Visit
   - Priority Level (Routine, Urgent, Follow-up)
   - Allergies (required - enter "None known" if none)
   - Special Notes (optional, max 200 characters)

3. **Generate Confirmation Script (Optional)**
   - Click "Generate Confirmation Script" to preview the appointment details

4. **Submit**
   - Click "Save Appointment"
   - Success message will appear
   - Appointment will be added to the dashboard

### Managing Appointments

**Filter Appointments:**
- Use "Filter by Doctor" dropdown to view specific doctor's appointments
- Use "Filter by Date" to view appointments for a specific date
- Click "Apply Filters" to update the view

**Sort Appointments:**
- Click "Sort by Time" to order by appointment time
- Click "Sort by Doctor" to order alphabetically by doctor name

**Delete Appointments:**
- Enter the Appointment ID (e.g., APT001)
- Click "Delete" button
- Confirmation message will appear

## ✅ Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| Patient Name | Not empty, min 2 chars | "Patient name is required (minimum 2 characters)" |
| Patient ID | Exactly 6 digits | "Patient ID must be 6 digits (for example 123456)" |
| Contact | Numeric, 10+ digits | "Contact number must be 10 or more digits (for example 6135551234)" |
| Email | Contains '@' | "Please enter a valid email (for example john@example.com)" |
| Doctor | Not empty | "Please select a doctor" |
| Date | No past dates | "Date cannot be in the past" |
| Reason | Not empty | "Please provide a reason for visit" |
| Allergies | Required | "Allergies field is required. List allergies or enter 'None known'" |

## 🎨 Design

- **Color Scheme**: Professional blue, green, and grey palette
- **Typography**: Arial/Helvetica sans-serif
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Proper labels, contrast ratios, and keyboard navigation

## 💾 Data Storage

All appointment data is stored in the browser's localStorage with the following structure:

```javascript
{
  id: "APT001",              // Auto-generated sequential ID
  patientName: "String",
  dob: "YYYY-MM-DD",
  patientId: "123456",       // 6 digits
  contact: "1234567890",     // 10+ digits
  email: "user@example.com",
  doctor: "Dr. Smith",
  date: "YYYY-MM-DD",
  time: "HH:MM",
  reason: "String",
  priority: "Routine|Urgent|Follow-up",
  allergies: "String",
  notes: "String (optional)"
}
```

## 🔒 Conflict Detection

The system prevents double-booking by checking:
- Same doctor
- Same date
- Same time

If a conflict is detected, the system suggests alternative times (+30 mins, +60 mins).

## 🌟 Special Features

### Priority Visual Indicators
- **Urgent** appointments are highlighted with a light red background (#ffe6e6)
- **Routine** and **Follow-up** appointments use default styling

### Auto-Generated IDs
- Appointment IDs are automatically generated in sequence (APT001, APT002, etc.)
- IDs persist even after deletions

### Smart Date Filtering
- Dashboard defaults to showing today's appointments
- Easily filter by any date or doctor

## 🧪 Testing

### Test Scenario 1: Create New Appointment
1. Fill all required fields
2. Click "Save Appointment"
3. Verify appointment appears in dashboard
4. Check localStorage in browser DevTools

### Test Scenario 2: Returning Patient
1. Create an appointment with Patient ID "123456"
2. Clear the form
3. Enter "123456" in Patient Lookup
4. Click "Search Patient"
5. Verify information auto-fills

### Test Scenario 3: Conflict Detection
1. Create appointment for Dr. Smith at 10:00 AM
2. Try to create another appointment for Dr. Smith at 10:00 AM same date
3. Verify error message with alternative times

### Test Scenario 4: Priority Flagging
1. Create appointment with Priority = "Urgent"
2. Verify row appears with light red background in dashboard

### Test Scenario 5: Validation
1. Try submitting form with empty fields
2. Try Patient ID with 5 digits
3. Try contact number with 9 digits
4. Try email without @
5. Verify appropriate error messages

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🐛 Known Limitations

- Data is stored locally - not shared between devices or browsers
- No backend server - data is not synchronized
- No user authentication
- No email notifications
- No print functionality

## 📝 Assignment Compliance

This project fulfills all requirements for the university assignment:

- ✅ Vanilla JavaScript (No frameworks)
- ✅ HTML5 & CSS3
- ✅ localStorage for data persistence
- ✅ All required form fields
- ✅ Exact validation rules and error messages
- ✅ Conflict detection logic
- ✅ Dashboard with filter and sort
- ✅ 3 Custom features (Hard, Medium, Easy)
- ✅ Professional UI design

## 👨‍💻 Development

### File Descriptions

**index.html**
- Semantic HTML5 structure
- Accessible form elements
- Proper labels and ARIA attributes

**style.css**
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Smooth transitions and animations
- Professional color palette

**script.js**
- ES6+ JavaScript
- Event-driven architecture
- Modular functions
- Comprehensive validation
- localStorage management

## 📄 License

This project is created for educational purposes as part of a university assignment.

## 🤝 Support

For issues or questions, please refer to the requirements document (`requiremnts.md`) or contact your course instructor.

---

**Version:** 1.0.0  
**Last Updated:** December 2024  
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript  
**Storage:** Browser localStorage


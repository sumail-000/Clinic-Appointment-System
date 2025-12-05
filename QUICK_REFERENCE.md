# Quick Reference Guide

## 🚀 Start Application (30 seconds)

```bash
# Navigate to project folder
cd Clinic-Appointment-System

# Start server
python -m http.server 8000

# Open browser to:
http://localhost:8000
```

---

## 📋 Validation Rules (Copy-Paste Ready)

| Field | Rule | Error Message |
|-------|------|---------------|
| Patient Name | Min 2 chars | `Patient name is required (minimum 2 characters)` |
| Patient ID | Exactly 6 digits | `Patient ID must be 6 digits (for example 123456)` |
| Contact | 10+ digits | `Contact number must be 10 or more digits (for example 6135551234)` |
| Email | Contains @ | `Please enter a valid email (for example john@example.com)` |
| Doctor | Not empty | `Please select a doctor` |
| Date | No past dates | `Date cannot be in the past` |
| Reason | Not empty | `Please provide a reason for visit` |
| Allergies | Required | `Allergies field is required. List allergies or enter 'None known'` |

---

## 🎯 Test Data (Quick Testing)

### Test Appointment 1
```
Patient Name: Shawn Cahill
DOB: 1999-10-15
Patient ID: 123456
Contact: 1111111111
Email: cahill@example.ca
Doctor: Dr. Smith
Date: [Today's date]
Time: 11:00
Reason: Annual Checkup
Priority: Routine
Allergies: None known
Notes: First visit
```

### Test Appointment 2 (Urgent)
```
Patient Name: John Doe
DOB: 1985-05-20
Patient ID: 654321
Contact: 5551234567
Email: john@example.com
Doctor: Dr. Patel
Date: [Today's date]
Time: 14:30
Reason: Follow-up
Priority: Urgent
Allergies: Penicillin
Notes: Urgent follow-up required
```

### Test Appointment 3 (Conflict Test)
```
Use same doctor, date, and time as Test 1
Should show conflict error with alternative times
```

---

## ⚡ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | `F12` |
| Refresh Page | `Ctrl + R` |
| Hard Refresh | `Ctrl + Shift + R` |
| Clear Console | `Ctrl + L` (in console) |
| Inspect Element | `Ctrl + Shift + C` |

---

## 🔍 Quick Debugging

### Check if data is saved:
```javascript
// Open browser console (F12) and run:
console.log(localStorage.getItem('appointments'));
```

### Clear all data:
```javascript
localStorage.clear();
location.reload();
```

### Add test data:
```javascript
const testData = [{
  id: "APT001",
  patientName: "Test Patient",
  dob: "1990-01-01",
  patientId: "123456",
  contact: "1234567890",
  email: "test@example.com",
  doctor: "Dr. Smith",
  date: "2024-12-05",
  time: "10:00",
  reason: "Annual Checkup",
  priority: "Routine",
  allergies: "None known",
  notes: "Test appointment"
}];
localStorage.setItem('appointments', JSON.stringify(testData));
location.reload();
```

---

## 📁 File Locations

```
Clinic-Appointment-System/
├── index.html          ← Main HTML
├── style.css           ← All styling
├── script.js           ← All JavaScript
├── README.md           ← Full documentation
├── SETUP.md            ← Setup guide
├── QUICK_REFERENCE.md  ← This file
└── requiremnts.md      ← Assignment specs
```

---

## 🎨 Color Codes (Quick Copy)

```css
/* Primary Colors */
--blue: #4a90e2;
--dark-blue: #357abd;
--green: #27ae60;
--red: #e74c3c;
--grey: #95a5a6;

/* Backgrounds */
--urgent-bg: #ffe6e6;
--light-blue-bg: #f0f7ff;
--table-header: #34495e;
```

---

## 🔧 Common Fixes

### Problem: Page won't load
```bash
# Check if port is in use
netstat -ano | findstr :8000

# Try different port
python -m http.server 8080
```

### Problem: Styles not showing
```
1. Hard refresh: Ctrl + Shift + R
2. Check style.css is loaded in Network tab
3. Clear browser cache
```

### Problem: JavaScript not working
```
1. Open console (F12)
2. Look for red error messages
3. Check script.js is loaded in Network tab
4. Verify no syntax errors
```

### Problem: Data not saving
```
1. Check if in Incognito/Private mode (won't persist)
2. Verify localStorage is enabled
3. Check browser storage quota
4. Try: localStorage.clear() then reload
```

---

## 📊 Feature Checklist (Quick Test)

- [ ] Page loads successfully
- [ ] Patient search works (search for 123456 after creating appointment)
- [ ] Form validation shows correct errors
- [ ] Save appointment works
- [ ] Appointment appears in dashboard
- [ ] Filter by doctor works
- [ ] Filter by date works
- [ ] Sort by time works
- [ ] Sort by doctor works
- [ ] Delete appointment works
- [ ] Urgent priority shows red background
- [ ] Confirmation script generates
- [ ] Conflict detection prevents double-booking
- [ ] Data persists after refresh

---

## 🎓 Assignment Submission Checklist

- [ ] All 3 files present (index.html, style.css, script.js)
- [ ] Application runs without errors
- [ ] All validation messages exact
- [ ] 3 custom features working
- [ ] Conflict detection working
- [ ] Dashboard filters/sorts working
- [ ] Code is commented
- [ ] Tested in browser
- [ ] Screenshots taken (optional)
- [ ] Design Thinking Canvas created (separate requirement)

---

## 💡 Pro Tips

1. **Always test in browser console** - Press F12 and check for errors
2. **Use today's date** - Dashboard defaults to today
3. **Test conflict detection** - Create two appointments with same doctor/time
4. **Test urgent priority** - Should show red background
5. **Test patient lookup** - Create appointment, then search by ID
6. **Clear data between tests** - Use `localStorage.clear()`

---

## 📞 Emergency Commands

### Server won't start:
```bash
# Kill process on port 8000
taskkill /F /PID [PID_NUMBER]

# Or use different port
python -m http.server 9000
```

### Reset everything:
```bash
# Close browser
# Stop server (Ctrl+C)
# Restart server
python -m http.server 8000
# Open browser
# Clear localStorage
# Reload page
```

### Export data before reset:
```javascript
// Copy this output
console.log(localStorage.getItem('appointments'));
```

---

## 🎯 Grading Rubric Quick Check

| Category | Points | Status |
|----------|--------|--------|
| Form Fields | 15 | ✅ |
| Validation | 10 | ✅ |
| Dashboard | 10 | ✅ |
| Conflict Detection | 10 | ✅ |
| Custom Feature 1 (Hard) | 10 | ✅ |
| Custom Feature 2 (Med) | 8 | ✅ |
| Custom Feature 3 (Easy) | 7 | ✅ |
| Code Quality | 5 | ✅ |
| UI Design | 5 | ✅ |
| **Total** | **75** | **✅** |

*Note: Design Thinking Canvas is separate 25 points*

---

## 🚀 Ready to Submit!

Your project is complete and tested. Good luck! 🎓

**Last Updated:** December 4, 2024


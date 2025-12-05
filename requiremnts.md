DEVELOPER SPECIFICATION: Clinic Appointment System

Target Files: index.html, style.css, script.js Tech Stack: Vanilla JavaScript (No Frameworks), HTML5, CSS3. Storage: Browser localStorage only.

1. THE "HIDDEN" NON-CODING TASK (Part 1)
Warning: The code is only 75% of the grade. The other 25% is a Presentation.


Requirement: A "Design Thinking Canvas" presentation.


Format: PowerPoint or PDF (8-12 Slides).


Content: You must explain the "Business Problem" (why manual booking sucks) and the "Solution" (your app).

Action for Developer: If the client didn't ask for this, they will fail Part 1. You only need to code Part 2, but be aware this exists.




2. DATABASE STRUCTURE (JS Object)
You must create an array let appointments = [] and save it to localStorage. The Object Properties: Each appointment object MUST have these exact fields :

id: (Auto-generated, e.g., "APT001")

patientName: String

dob: Date String (YYYY-MM-DD)

patientId: String (6 digits)

contact: String (10+ digits)

email: String

doctor: String

date: Date String

time: Time String

reason: String


allergies: String (Must default to "None known" if empty) 

notes: String (Optional, max 200 chars)


3. COMPONENT A: The Booking Form (HTML/JS)
Fields Required (In Order):

Patient Name

Date of Birth

Patient ID

Contact Number

Email Address

Doctor Selection (Dropdown with at least 3 doctors)

Appointment Date

Appointment Time

Reason for Visit

Allergies

Special Notes

Buttons: [Submit] and [Clear]

STRICT Validation Rules (Copy these alert() messages exactly): If validation fails, block submission and show alert(message).



Field,Rule,REQUIRED Error Message (Copy Exact) 
Patient Name,"Not empty, min 2 chars","""Patient name is required (minimum 2 characters)"""
Patient ID,Exactly 6 digits,"""Patient ID must be 6 digits (for example 123456)"""
Contact,"Numeric, 10+ digits","""Contact number must be 10 or more digits (for example 6135551234)"""
Email,Contains '@',"""Please enter a valid email (for example john@example.com)"""
Doctor,Not empty,"""Please select a doctor"""
Date,No past dates,(Browser native message or custom alert if JS check fails)
Reason,Not empty,"""Please provide a reason for visit"""
Allergies,Required,"""Allergies field is required. List allergies or enter 'None known'"""

Success/Fail Feedback:


Success: alert("Appointment saved successfully. Ready for next call.") 

Error: Show the specific error from the table above.


4. COMPONENT B: Conflict Detection Logic
Rule: You cannot double-book a doctor. Logic: Before saving, check the array.

IF (newDoctor == existingDoctor) AND (newDate == existingDate) AND (newTime == existingTime)


THEN Block Save & Alert: "Error: Dr. [Name] is already booked at [Time] on [Date]. Try [Time+30mins], [Time+60mins]...".

5. COMPONENT C: The Dashboard (HTML/JS)
Display: A table showing appointments for "Today".


Columns: Appt ID, Patient Name, DOB, Patient ID, Contact, Doctor, Date/Time, Allergies, Reason. . Functionality:


Filter by Doctor: Dropdown to show only Dr. Smith, etc..


Filter by Date: Date picker to change the view..


Sort: Button to sort by Time, Button to sort by Doctor..

Delete: Input field for "Appointment ID" + [Delete] button.


On Delete Success: alert("Appointment deleted.").


On ID Not Found: alert("Appointment [ID] not found").


6. THE 3 "CUSTOM FEATURES" (Mandatory for Grade)
You must implement 3 extra features to pass. I have selected the best combination (1 Hard, 1 Medium, 1 Easy) that is easiest to code in Vanilla JS.



Feature 1: "Returning Patient Lookup" (Hard) 

What: When typing a Patient ID in the form, add a "Search" button next to it.

Logic: Look through localStorage. If that ID exists in a previous appointment, auto-fill their Name, DOB, Contact, and Email into the form.

Value: Speeds up booking for returning patients.


Feature 2: "Appointment Confirmation Script" (Medium) 

What: Add a button labeled "Generate Script" at the bottom of the form.

Logic: When clicked, read the form values and alert() or display text: "I have you booked with Dr. [Name] on [Date] at [Time]. Is that correct?"


Feature 3: "Appointment Priority Flag" (Easy) 

What: Add a dropdown in the form: "Priority" (Routine, Urgent).

Logic: In the Dashboard table, if Priority is "Urgent", change that row's background color to light red.


7. UI/CSS GUIDELINES
Colors: Professional Blue, Green, Grey. No crazy colors.


Font: Arial or Helvetica (Sans-serif).

Layout:

Top: Booking Form (Inputs stacked logically).

Bottom: Dashboard (Table).

Do not use Bootstrap/Tailwind. Write custom CSS.


--------------------------Another version of requiremnts---------------------------

DEVELOPER SPECIFICATION: Clinic Appointment System
Project Type: University Final Assignment (High-Stakes) Target Files: index.html, style.css, script.js Tech Stack: Vanilla JavaScript (ES6+), HTML5, CSS3. NO Frameworks/Libraries (No jQuery, React, Bootstrap, etc.). Storage: Browser localStorage only.


1. THE "HIDDEN" REQUIREMENT (Warning)
Note: The coding part is only 75% of the grade. The remaining 25% is a presentation called the "Design Thinking Canvas".


Requirement: You (or the client) must create a PowerPoint/PDF (8-12 slides) explaining the business problem and solution.

Dev Action: Ensure you clarify if the client needs this created. If you are only doing the code, ignore this section but warn the client.

2. DATA STRUCTURE
You must create a global array (e.g., let appointments = []) and sync it with localStorage.

The Appointment Object
Every saved object must contain these exact properties :


id: Auto-generated sequential string (e.g., "APT001", "APT002").

patientName: String.

dob: Date String (YYYY-MM-DD).

patientId: String (6 digits).

contact: String (10+ digits).

email: String.

doctor: String (Selected from a dropdown).

date: Date String.

time: Time String.

reason: String.


allergies: String (Must default to "None known" if left empty).

notes: String (Optional, max 200 chars).

priority: String (Added for "Custom Feature 3" - see Section 6).

3. UI COMPONENT: The Booking Form (index.html)

Layout: Create a clean, professional form (Blues/Greys/Greens).


Required Fields (Must be in this order) :

Patient Name (text)

Date of Birth (date)

Patient ID (text)

Contact Number (tel or text)

Email Address (email)

Doctor Selection (select - Must have at least 3 options, e.g., Dr. Smith, Dr. Patel, Dr. Wang)

Appointment Date (date)

Appointment Time (time)

Reason for Visit (text)

Priority Level (select - Custom Feature)

Allergies (text)

Special Notes (textarea)

Buttons: "Submit Appointment" and "Clear Form".

STRICT Validation Rules & Error Messages
You must use alert() for errors. You MUST use the exact wording below.



Field Rule REQUIRED alert() Message

Patient Name Not empty, min 2 chars"Patient name is required (minimum 2 characters)"

Patient ID Exactly 6 digits"Patient ID must be 6 digits (for example 123456)"
Contact Numeric, 10+ digits"Contact number must be 10 or more digits (for example 6135551234)"

Email Contains '@'"Please enter a valid email (for example john@example.com)"

Doctor Not empty"Please select a doctor"

Appt Date  No past dates(Browser native warning or custom alert: "Date cannot be in the past")

Reason  Not empty"Please provide a reason for visit"

Allergies Required"Allergies field is required. List allergies or enter 'None known'


"Success Feedback:On valid save: alert("Appointment saved successfully. Ready for next call.")11.



4. LOGIC: Conflict Detection
Rule: A doctor cannot be in two places at once. Implementation: Before saving, check the appointments array.

IF: (newDoctor === existingDoctor) AND (newDate === existingDate) AND (newTime === existingTime)

THEN: Block the save.

ERROR MESSAGE: Show specific alert:


"Error: Dr. [Name] is already booked at [Time] on [Date]. Try [Time+30mins], [Time+60mins]...".

5. UI COMPONENT: The Dashboard
Display: A table below the form showing appointments for the current day.


Columns: ID, Patient Name, DOB, Patient ID, Contact, Doctor, Date & Time, Allergies, Reason, Priority .

Required Features:


Filter by Doctor: Dropdown (Updates table live).


Filter by Date: Date picker (Updates table live).


Sort: Buttons to sort by Time and Doctor .

Delete:

UI: Input field for "Appointment ID" + [Delete] Button .

Logic: Remove from array, update localStorage.

Success Msg: alert("Appointment deleted.").

Fail Msg: alert("Appointment [ID] not found").



6. MANDATORY "CUSTOM FEATURES"
The PDF requires 3 extra features (Easy, Medium, Hard) to get full marks. Implement these exactly:

Feature 1: Returning Patient Lookup (Hard) 

UI: Add a "Search" button next to the Patient ID input field.

Logic: When clicked, search localStorage for that ID.

Result: If found, auto-fill Patient Name, DOB, Contact, Email, and Allergies into the form inputs.

Impact: Reduces data entry time.

Feature 2: Appointment Confirmation Script (Medium) 

UI: Add a button labeled "Generate Confirmation Script" at the bottom of the form.

Logic: Read the current form values and generate a string.

Result: alert("I have you booked with Dr. [Name] on [Date] at [Time] for [Reason]. Is that correct?").

Feature 3: Priority Flag (Easy) 

UI: Add a "Priority" dropdown in the form options: Routine, Urgent, Follow-up.

Logic: Save this value to the object.

Visual: In the Dashboard Table, if the priority is Urgent, change that row's background color (e.g., #ffe6e6 or Light Red) or add a 🔴 icon.

7. FILE STRUCTURE
Ensure your submission zip includes exactly:

index.html

style.css

script.js


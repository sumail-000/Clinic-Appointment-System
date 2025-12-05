# DESIGN THINKING CANVAS
## Maple Family Health - Clinic Appointment Booking System

**COMM 394 - Coding Literacy for Managers**  
**Student Project Submission**

---

## SLIDE 1: CLINIC PROFILE

### Maple Family Health
**Family Practice Clinic - Ontario**

**Location & Size:**
- Location: Ottawa, Ontario
- Reception Staff: 3 full-time staff members
- Medical Team: 3 doctors (Dr. Smith, Dr. Patel, Dr. Wang)
- Facilities: 6 examination rooms
- Operating Hours: Monday-Friday, 8:00 AM - 6:00 PM

**Booking Model:**
- Phone-only appointment booking (no online system)
- No walk-in appointments accepted
- All bookings handled through reception desk

**Call Volume:**
- Daily calls: 50-70 appointment booking calls
- Peak times: 
  - Morning: 8:30 AM - 9:30 AM (patients calling before work)
  - Evening: 4:00 PM - 5:30 PM (patients calling after work)
- Average 15-20 calls queued during peak hours

**Patient Demographics:**
- Age range: Primarily families (children to seniors)
- Catchment area: Ottawa and surrounding suburbs (15 km radius)
- Patient base: Approximately 3,500 active patients
- Mix of new patients and returning patients (70% returning, 30% new)

---

## SLIDE 2: CURRENT PHONE INTAKE OPERATIONS

### How Booking Works Today

**Current Process:**
1. Staff answer incoming calls manually
2. Ask patient for personal information (name, DOB, contact, Patient ID)
3. Search through Excel spreadsheet for existing patient records
4. Manually check doctor availability by scanning spreadsheet rows
5. Write appointment details on paper notepad during call
6. Transfer information to Excel spreadsheet after call ends
7. Call back patient if errors discovered later

**Average Call Duration:**
- New patients: 10-12 minutes per call
- Returning patients: 8-10 minutes per call
- Target time: 4-5 minutes per call

**Data Captured:**
- Patient name, date of birth, Patient ID (6 digits)
- Contact number, email address
- Preferred doctor
- Appointment date and time
- Reason for visit
- Allergies (often forgotten)
- Special notes (rarely captured)

**Call Management Challenges:**
- Calls frequently go to voicemail during peak times
- Average hold time: 5-8 minutes during peak hours
- 10-15 dropped calls daily due to long wait times
- Staff stress from managing multiple queued calls

**Accuracy Problems:**
- 15-20% of appointments have at least one error:
  - Wrong doctor assigned (5% of bookings)
  - Wrong date or time recorded (8% of bookings)
  - Misspelled patient names (7% of bookings)
  - Incorrect phone numbers (5% of bookings)
  - Double-bookings: 2-3 per week
  - Missing Patient ID requiring callbacks (12% of bookings)

**Information Gaps:**
- Allergies missing in 40% of appointments
- Patient ID not captured in 25% of new bookings
- Special medical notes rarely recorded
- No structured way to flag urgent appointments

---

## SLIDE 3: STAKEHOLDER NEEDS

### Who Is Affected and What They Need

**Reception Staff (Sarah, Maria, Jennifer):**
- Need: Faster call handling to reduce queue pressure
- Need: Clear guidance on required fields to ensure completeness
- Need: Confidence that data is accurate before ending call
- Need: Quick access to returning patient information
- Pain point: Stress from patients complaining about hold times
- Pain point: Embarrassment when callbacks reveal errors

**Office Manager (Lisa):**
- Need: Smoother call flow with fewer dropped calls
- Need: Fewer callbacks and corrections consuming staff time
- Need: Predictable scheduling without conflicts
- Need: Reduced staff frustration and turnover
- Pain point: 5-8 hours per week spent fixing booking errors
- Pain point: Patient complaints about service quality

**Clinic Owner (Dr. Thompson):**
- Need: Lower operational costs (fewer wasted staff hours)
- Need: Higher patient satisfaction and retention
- Need: Reduced missed appointments due to wrong information
- Need: Staff retention (reduce turnover from job stress)
- Financial impact: Estimated $15,000-20,000 annually in wasted staff time

**Doctors (Dr. Smith, Dr. Patel, Dr. Wang):**
- Need: Complete and accurate patient information before appointments
- Need: Clear allergy information visible at a glance
- Need: Fewer scheduling conflicts and double-bookings
- Need: Special notes about urgent cases or follow-ups
- Pain point: Discovering missing allergy information during appointments
- Pain point: Patients arriving on wrong day or time

**Patients:**
- Need: Quick and accurate booking (not waiting on hold 8+ minutes)
- Need: Correct appointment details (right doctor, date, time)
- Need: Trust that their information is captured correctly
- Need: Confirmation of booking before ending call
- Pain point: Long hold times causing frustration
- Pain point: Receiving callback to correct errors

---

## SLIDE 4: PRESSURES AND CONSTRAINTS

### Why The Current System Is Failing

**Reception Staff Pressures:**
- Time pressure: 15-20 calls queued during peak hours
- Stress from repeated questions when searching for patient records
- Accuracy risk: Rushing through calls leads to errors
- Multitasking burden: Writing notes while listening to patient
- No immediate feedback if they miss required information

**Call Management Constraints:**
- Excel spreadsheet search is slow (30-60 seconds per patient lookup)
- No structured data entry form to guide completeness
- No real-time conflict detection (double-bookings discovered later)
- Manual scanning of 50+ daily appointments to check doctor availability
- Paper notes get lost or become illegible

**System Constraints:**
- Excel lacks validation (can enter wrong format data)
- No quick feedback on errors or conflicts during the call
- No visual summary of daily workload for each doctor
- No way to auto-fill returning patient information
- No priority flagging for urgent appointments

**Financial and Patient Impact:**
- Staff hours wasted on corrections: 5-8 hours per week = $2,000/month
- Patient frustration leading to complaints: 8-12 per month
- Missed appointments due to wrong information: 5-7 per month
- Reduced clinic efficiency: 20-25% of staff time spent on rework
- Risk of medical errors: Missing allergy information in 40% of bookings
- Staff turnover: 1 receptionist quit in past year citing job stress

**Quantified Problem:**
- Current average call time: 8-10 minutes
- Current error rate: 15-20% of appointments
- Current dropped calls: 10-15 per day
- Current staff hours on corrections: 40 hours per month
- Current patient complaints: 8-12 per month

---

## SLIDE 5: PROBLEM DEFINITION

### Primary Problem Statement

**WHO - WHAT - CONSTRAINT - IMPACT:**

> "Reception staff at Maple Family Health cannot book appointments efficiently during phone calls because they lack a structured digital intake system with quick patient lookup and real-time conflict detection, which leads to 8-10 minute call times, 15-20% error rates, 10-15 dropped calls daily, and 40 hours per month spent on corrections and callbacks."

---

## SLIDE 6: SUPPORTING EVIDENCE & ROOT CAUSE ANALYSIS

### Evidence That Proves The Problem

**Time Measurements:**
- Average call time: 8-10 minutes (target: 4-5 minutes)
- Time spent searching Excel for patient records: 30-60 seconds per call
- Time managing hold queues: 15-20 minutes per peak hour
- Staff hours on corrections per month: 40 hours

**Error Rates:**
- 15-20% of appointments have at least one error
- Double-bookings: 2-3 per week (10-12 per month)
- Wrong doctor or time: 8% of bookings
- Missing Patient ID: 25% of new patient bookings
- Missing allergies: 40% of all appointments

**Operational Losses:**
- Staff hours wasted on corrections: $2,000 per month
- Callbacks required: 15-20 per week
- Patient complaints: 8-12 per month
- Dropped calls: 10-15 per day (lost booking opportunities)

**Staff Feedback (Direct Quotes):**
- Sarah (Receptionist): "I feel stressed when I see 15 calls waiting. I rush through calls and then worry I made mistakes."
- Maria (Receptionist): "Searching Excel while the patient waits on the phone is embarrassing. They can hear me typing and sighing."
- Lisa (Office Manager): "I spend 2 hours every day fixing booking errors. It's frustrating and wasteful."

### Root Cause Analysis: 5-Why Method

**Problem:** Appointment booking takes 8-10 minutes per call.

**Why #1:** Staff spend time searching for existing patient records while the caller waits.

**Why #2:** They don't have a fast Patient ID search system in one place.

**Why #3:** Current tools are Excel-based with weak search functionality.

**Why #4:** The clinic never invested in a structured digital intake system.

**Why #5:** Management didn't realize how much time and money was being lost to inefficient processes.

**ROOT CAUSE:**  
No rapid, structured digital intake and search system exists, so staff lose time on manual steps, leading to long calls, errors, and patient frustration.

---

## SLIDE 7: IMPACT QUANTIFICATION

### Measurable Problem Metrics

**Current State vs. Target State:**

| Metric | Current State | Target State | Improvement |
|--------|---------------|--------------|-------------|
| **Average Call Time** | 8-10 minutes | 4-5 minutes | **50% reduction** |
| **Error Rate** | 15-20% | 2-3% | **85% improvement** |
| **Dropped Calls Daily** | 10-15 calls | 2-3 calls | **80% reduction** |
| **Staff Hours on Corrections** | 40 hours/month | 8 hours/month | **80% time savings** |
| **Missing Allergies** | 40% of appointments | 0% of appointments | **100% completeness** |
| **Double-Bookings** | 2-3 per week | 0 per week | **100% prevention** |
| **Patient Complaints** | 8-12 per month | 1-2 per month | **85% reduction** |

**Financial Impact:**
- Current monthly cost of inefficiency: $2,000 in wasted staff time
- Projected monthly savings: $1,600 (80% reduction)
- Annual savings: **$19,200**
- ROI: System pays for itself in development time within 3 months

**Patient Experience Impact:**
- Reduced hold times from 5-8 minutes to 1-2 minutes
- Increased booking accuracy from 80-85% to 97-98%
- Eliminated frustration from callbacks and corrections

---

## SLIDE 8: SOLUTION OVERVIEW - BEFORE & AFTER SCENARIO

### Realistic Phone Call Walkthrough

**BEFORE: Current Process (10 minutes)**

*8:45 AM - Sarah answers a call from a returning patient*

- **0:00-0:30** - "Maple Family Health, this is Sarah. How can I help you?"
- **0:30-2:00** - Patient explains they need a follow-up with Dr. Patel. Sarah asks for name, DOB, Patient ID.
- **2:00-3:30** - Sarah searches Excel spreadsheet for Patient ID 234567 (scrolling, typing, searching)
- **3:30-4:00** - Patient waits on hold: "I'm still looking for your record..."
- **4:00-5:30** - Sarah asks patient to repeat contact number, email, allergies (not in spreadsheet)
- **5:30-7:00** - Sarah manually scans Dr. Patel's schedule in Excel to find available times
- **7:00-8:30** - Sarah writes appointment on paper notepad while confirming details with patient
- **8:30-10:00** - Sarah reads back details, patient corrects wrong phone number, Sarah updates notes
- **10:00** - Call ends
- **After call:** Sarah spends 2 minutes transferring paper notes to Excel
- **Next day:** Sarah discovers she double-booked Dr. Patel at 2:00 PM, must call patient back

**Total time: 10 minutes + 2 minutes data entry + 5 minutes callback = 17 minutes**

---

**AFTER: With Web App (4 minutes)**

*8:45 AM - Sarah answers a call from a returning patient*

- **0:00-0:30** - "Maple Family Health, this is Sarah. How can I help you?"
- **0:30-1:00** - Patient says they need a follow-up with Dr. Patel. Sarah asks for Patient ID.
- **1:00-1:15** - Sarah enters "234567" in Patient Lookup and clicks "Search Patient" button
- **1:15-1:30** - **System auto-fills:** Name (John Martinez), DOB (1978-05-12), Contact (6135551234), Email (john@example.com), Allergies (Penicillin)
- **1:30-2:00** - Sarah confirms: "I have your information here. You're allergic to penicillin, correct?" Patient confirms.
- **2:00-2:30** - Sarah selects Dr. Patel, enters date (March 20, 2026) and time (2:00 PM)
- **2:30-2:45** - Sarah selects "Follow-up" as reason, sets priority to "Routine"
- **2:45-3:00** - Sarah clicks "Generate Confirmation Script" button
- **3:00-3:30** - Sarah reads system-generated script: "I have you booked with Dr. Patel on Thursday, March 20th, 2026 at 2:00 PM for a Follow-up visit. You noted an allergy to Penicillin. Is that correct?"
- **3:30-3:45** - Patient confirms all details are correct
- **3:45-4:00** - Sarah clicks "Save Appointment" - System shows: "Appointment saved successfully. Ready for next call."
- **4:00** - Call ends. Appointment immediately appears in dashboard.

**Total time: 4 minutes (no data entry needed, no callback needed)**

---

### Time Savings & Accuracy Improvements

**Time Comparison:**
- Old process: 17 minutes (call + data entry + callback)
- New process: 4 minutes (complete)
- **Time saved: 13 minutes per returning patient (76% reduction)**

**Accuracy Improvements:**
- Old process: 15-20% error rate, manual conflict checking
- New process: Real-time validation, automatic conflict detection, 0% double-bookings
- **Error reduction: 85% improvement**

**Completeness:**
- Old process: 40% missing allergies, 25% missing Patient ID
- New process: All required fields enforced, allergies mandatory
- **Completeness: 100% of appointments have all required data**

**Queue Impact:**
- Old process: 10 minutes per call = 6 calls per hour
- New process: 4 minutes per call = 15 calls per hour
- **Capacity increase: 150% more calls handled per hour**

**Staff Experience:**
- Old process: Stressed, error-prone, defensive about mistakes
- New process: Confident, efficient, focused on patient care
- **Staff satisfaction: Significantly improved**

---

## SLIDE 9: FUNCTIONAL REQUIREMENTS - CUSTOM FEATURE 1

### Custom Feature 1: Returning Patient Lookup (HARD)

**Feature Name:** Returning Patient Lookup with Auto-Fill

**How It Addresses The Problem:**
- **Problem Link:** Reception staff waste 30-60 seconds per call searching Excel for returning patient information, and then must ask patients to repeat information already on file, extending call time to 8-10 minutes.
- **Solution:** When staff enter a Patient ID and click "Search Patient," the system instantly searches all previous appointments and auto-fills the patient's Name, Date of Birth, Contact Number, Email, and Allergies into the booking form.

**Description:**
- **What it does:** Retrieves existing patient information from appointment history with one click
- **When it's used:** At the start of every call with a returning patient (70% of calls)
- **How staff interact:** 
  1. Staff asks patient for their Patient ID
  2. Staff enters 6-digit ID in "Patient Lookup" field
  3. Staff clicks "Search Patient" button
  4. System searches localStorage for any previous appointment with that Patient ID
  5. If found: System auto-fills all patient fields and shows success message
  6. If not found: System shows "No patient found" message (new patient)
  7. Staff confirms auto-filled information with patient verbally
  8. Staff proceeds to appointment details (doctor, date, time)

**Technical Implementation:**
- Search function scans appointments array for matching Patient ID
- Auto-populates form fields: patientName, dob, contact, email, allergies
- Reduces data entry from 11 fields to 6 fields for returning patients

**Expected Impact Measurement:**
- **Call time reduction:** 2-3 minutes per returning patient
- **Accuracy improvement:** 50-60% reduction in data entry errors (fewer fields to enter)
- **Completeness:** Ensures consistent patient information across all appointments
- **Staff efficiency:** 70% of calls (returning patients) benefit from this feature
- **Calculation:** 50 calls/day × 70% returning × 2.5 min saved = 87.5 minutes saved daily = **7.3 hours saved per week**

**Business Value:**
- Primary benefit: Dramatically reduces call time for majority of patients
- Secondary benefit: Ensures data consistency (same patient info across visits)
- Tertiary benefit: Reduces staff stress by eliminating manual search

---

## SLIDE 10: FUNCTIONAL REQUIREMENTS - CUSTOM FEATURE 2

### Custom Feature 2: Appointment Confirmation Script (MEDIUM)

**Feature Name:** Automated Confirmation Script Generator

**How It Addresses The Problem:**
- **Problem Link:** 15-20% of appointments have errors because staff don't consistently read back details to patients before ending the call. Patients discover errors later, requiring callbacks and corrections.
- **Solution:** Staff click "Generate Confirmation Script" button, and the system creates a formatted confirmation statement with all key details that staff read back to the patient before saving, ensuring accuracy.

**Description:**
- **What it does:** Generates a professional, formatted confirmation statement from current form data
- **When it's used:** After staff enter all appointment details, before clicking "Save Appointment"
- **How staff interact:**
  1. Staff fills in all appointment fields (doctor, date, time, reason, allergies)
  2. Staff clicks "Generate Confirmation Script" button at bottom of form
  3. System validates that required fields are filled
  4. System generates formatted script: "I have you booked with [Doctor] on [Date] at [Time] for [Reason]. You noted an allergy to [Allergies]. Is that correct?"
  5. System displays script in alert popup
  6. Staff reads script verbatim to patient
  7. Patient confirms or corrects any errors
  8. Staff makes corrections if needed, then saves appointment

**Technical Implementation:**
- Button triggers script generation function
- Function reads current form values (doctor, date, time, reason, allergies)
- Formats date to readable format (e.g., "Thursday, March 20th, 2026")
- Formats time to 12-hour format (e.g., "2:00 PM")
- Displays formatted string in alert box for staff to read

**Expected Impact Measurement:**
- **Error reduction:** 60-80% reduction in booking errors
- **Callback reduction:** From 15-20 callbacks per week to 3-4 per week
- **Patient satisfaction:** Patients feel confident their booking is correct
- **Staff confidence:** Staff feel assured they captured details accurately
- **Time savings:** Prevents 5-minute callbacks per corrected appointment
- **Calculation:** 17 callbacks/week × 5 min each × 80% reduction = **68 minutes saved per week**

**Business Value:**
- Primary benefit: Catches errors before they happen (preventive)
- Secondary benefit: Standardizes confirmation process across all staff
- Tertiary benefit: Improves patient trust and satisfaction

---

## SLIDE 11: FUNCTIONAL REQUIREMENTS - CUSTOM FEATURE 3

### Custom Feature 3: Appointment Priority Flag (EASY)

**Feature Name:** Visual Priority Flagging System

**How It Addresses The Problem:**
- **Problem Link:** Staff and doctors have no way to quickly identify urgent or time-sensitive appointments in the daily schedule. Urgent cases get lost among routine appointments, potentially delaying critical care.
- **Solution:** Staff select a priority level (Routine, Urgent, Follow-up) when booking. Urgent appointments display with a light red background in the dashboard, making them instantly visible.

**Description:**
- **What it does:** Adds priority classification to appointments with visual indicators
- **When it's used:** During every appointment booking (staff select priority level)
- **How staff interact:**
  1. Staff asks patient about urgency of appointment
  2. Staff selects priority from dropdown: "Routine" (default), "Urgent", or "Follow-up"
  3. Priority is saved with appointment
  4. In dashboard table, "Urgent" appointments display with light red background (#ffe6e6)
  5. Doctors and staff can instantly spot urgent cases at a glance
  6. Staff can filter or sort by priority if needed

**Technical Implementation:**
- Priority dropdown added to booking form with 3 options
- Priority value saved in appointment object
- Dashboard rendering applies CSS class "priority-urgent" to urgent rows
- CSS styles urgent rows with light red background color
- Priority column displays in dashboard table

**Expected Impact Measurement:**
- **Triage accuracy:** 25-40% improvement in identifying urgent cases
- **Doctor efficiency:** Doctors can prepare for urgent cases in advance
- **Patient safety:** Reduces risk of urgent cases being overlooked
- **Visual clarity:** Staff can scan 50+ daily appointments and spot urgent ones in 2-3 seconds
- **Time savings:** 30-60 seconds per schedule review
- **Calculation:** 10 schedule reviews/day × 45 sec saved = **7.5 minutes saved daily**

**Business Value:**
- Primary benefit: Improves patient safety and care quality
- Secondary benefit: Helps doctors prioritize their day
- Tertiary benefit: Demonstrates clinic responsiveness to urgent needs

---

## SLIDE 12: SYSTEM OVERVIEW & EXPECTED OUTCOMES

### Complete System Features Summary

**Core Mandatory Features:**
✅ Structured phone intake form with 11 required fields  
✅ Real-time validation with specific error messages  
✅ Automatic appointment ID generation (APT001, APT002...)  
✅ localStorage persistence (save/load appointments)  
✅ Conflict detection preventing double-bookings  
✅ Dashboard with sorting (by time, by doctor)  
✅ Dashboard filtering (by doctor, by date)  
✅ Delete appointments by ID  
✅ Appointment count display  

**Custom Features Implemented:**
✅ **Feature 1 (Hard):** Returning Patient Lookup with Auto-Fill  
✅ **Feature 2 (Medium):** Appointment Confirmation Script Generator  
✅ **Feature 3 (Easy):** Visual Priority Flagging System  

---

### Expected Measurable Outcomes

**Call Efficiency:**
- Average call time: 8-10 min → **4-5 min (50% reduction)**
- Returning patient calls: 8-10 min → **3-4 min (60% reduction)**
- Calls handled per hour: 6 → **15 (150% increase)**

**Accuracy & Completeness:**
- Error rate: 15-20% → **2-3% (85% improvement)**
- Missing allergies: 40% → **0% (100% completeness)**
- Double-bookings: 2-3/week → **0/week (100% prevention)**

**Operational Efficiency:**
- Staff hours on corrections: 40 hrs/month → **8 hrs/month (80% reduction)**
- Callbacks required: 15-20/week → **3-4/week (80% reduction)**
- Dropped calls: 10-15/day → **2-3/day (80% reduction)**

**Financial Impact:**
- Monthly cost of inefficiency: $2,000 → **$400 (80% reduction)**
- Annual savings: **$19,200**
- ROI timeline: **3 months**

**Patient & Staff Satisfaction:**
- Patient complaints: 8-12/month → **1-2/month (85% reduction)**
- Staff stress: High → **Moderate (significant improvement)**
- Patient hold time: 5-8 min → **1-2 min (75% reduction)**

---

### Success Criteria

**The system will be considered successful if:**

1. ✅ Average call time reduced to 5 minutes or less
2. ✅ Error rate reduced to below 5%
3. ✅ 100% of appointments have allergy information captured
4. ✅ Zero double-bookings for 30 consecutive days
5. ✅ Staff report reduced stress and increased confidence
6. ✅ Patient complaints reduced by at least 70%
7. ✅ Dropped calls reduced by at least 70%

---

### Implementation & Next Steps

**Phase 1: Deployment (Week 1)**
- Install system on reception computers
- Train all 3 reception staff (2-hour training session)
- Run parallel with Excel for 1 week (safety net)

**Phase 2: Monitoring (Weeks 2-4)**
- Track call times, error rates, dropped calls
- Gather staff feedback daily
- Make minor adjustments based on feedback

**Phase 3: Full Adoption (Week 5+)**
- Discontinue Excel spreadsheet
- System becomes primary booking tool
- Monthly reviews of metrics vs. targets

**Long-term Vision:**
- Potential future features: Online patient booking portal, SMS confirmations, appointment reminders
- Scalability: System can handle growth to 5+ doctors and 100+ daily appointments
- Replicability: Template for other small clinics facing similar challenges

---

## END OF PRESENTATION

**Contact Information:**
Maple Family Health  
123 Main Street, Ottawa, ON K1A 0A1  
Phone: (613) 555-1234  
Email: info@maplefamilyhealth.ca

**Project Developed For:**
COMM 394 - Coding Literacy for Managers  
Design Thinking Canvas & Web Application Assignment

---

**Total Slides: 12**  
**Sections Covered:**
- Context: Slides 1-4 (4 slides)
- Problem Definition: Slides 5-7 (3 slides)
- Solution Overview: Slide 8 (1 slide)
- Functional Requirements: Slides 9-12 (4 slides)

**Alignment with PDF Requirements:** ✅ Complete


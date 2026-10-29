const navItems = document.querySelectorAll('.nav-item');
const pageSections = document.querySelectorAll('.page-section');
const pageTitle = document.querySelector('.topbar h2');

const patientsTableBody = document.querySelector('#patients-table-body');
const emptyPatientsState = document.querySelector('#empty-patients-state');
const patientSearchInput = document.querySelector('#patient-search');
const addPatientButton = document.querySelector('#add-patient-btn');
const patientModal = document.querySelector('#patient-modal');
const patientForm = document.querySelector('#patient-form');
const patientModalTitle = document.querySelector('#patient-modal-title');
const patientIdInput = document.querySelector('#patientId');
const patientDetailsModal = document.querySelector('#patient-details-modal');
const patientDetailsContent = document.querySelector('#patient-details-content');

const doctorTableBody = document.querySelector('#doctors-table-body');
const emptyDoctorsState = document.querySelector('#empty-doctors-state');
const doctorSearchInput = document.querySelector('#doctor-search');
const addDoctorButton = document.querySelector('#add-doctor-btn');
const doctorModal = document.querySelector('#doctor-modal');
const doctorForm = document.querySelector('#doctor-form');
const doctorModalTitle = document.querySelector('#doctor-modal-title');
const doctorIdInput = document.querySelector('#doctorId');
const doctorDetailsModal = document.querySelector('#doctor-details-modal');
const doctorDetailsContent = document.querySelector('#doctor-details-content');

const dashboardAppointmentsBody = document.querySelector('#dashboard-appointments-body');
const todayAppointmentsCount = document.querySelector('#today-appointments-count');

const appointmentTableBody = document.querySelector('#appointments-table-body');
const emptyAppointmentsState = document.querySelector('#empty-appointments-state');
const appointmentSearchInput = document.querySelector('#appointment-search');
const appointmentDateFilter = document.querySelector('#appointment-date-filter');
const appointmentStatusFilter = document.querySelector('#appointment-status-filter');
const addAppointmentButton = document.querySelector('#add-appointment-btn');
const appointmentModal = document.querySelector('#appointment-modal');
const appointmentForm = document.querySelector('#appointment-form');
const appointmentModalTitle = document.querySelector('#appointment-modal-title');
const appointmentIdInput = document.querySelector('#appointmentId');
const appointmentPatientSelect = document.querySelector('#appointmentPatient');
const appointmentDoctorSelect = document.querySelector('#appointmentDoctor');
const appointmentDetailsModal = document.querySelector('#appointment-details-modal');
const appointmentDetailsContent = document.querySelector('#appointment-details-content');

const billingSearchInput = document.querySelector('#billing-search');
const billingDateFilter = document.querySelector('#billing-date-filter');
const billingStatusFilter = document.querySelector('#billing-status-filter');
const addBillButton = document.querySelector('#add-bill-btn');
const billTableBody = document.querySelector('#billing-table-body');
const emptyBillsState = document.querySelector('#empty-bills-state');
const billModal = document.querySelector('#bill-modal');
const billForm = document.querySelector('#bill-form');
const billModalTitle = document.querySelector('#bill-modal-title');
const billIdInput = document.querySelector('#billId');
const billPatientSelect = document.querySelector('#billPatient');
const billAppointmentSelect = document.querySelector('#billAppointment');
const billDiscountInput = document.querySelector('#billDiscount');
const billStatusSelect = document.querySelector('#billStatus');
const billAmountPaidInput = document.querySelector('#billAmountPaid');
const billDescriptionInput = document.querySelector('#billDescription');
const billDateInput = document.querySelector('#billDate');
const billLineItemsBody = document.querySelector('#bill-line-items-body');
const addBillLineItemButton = document.querySelector('#add-bill-line-item');
const billSubtotalPreview = document.querySelector('#bill-subtotal-preview');
const billDiscountPreview = document.querySelector('#bill-discount-preview');
const billFinalPreview = document.querySelector('#bill-final-preview');
const billDetailsModal = document.querySelector('#bill-details-modal');
const billDetailsContent = document.querySelector('#bill-details-content');
const paymentModal = document.querySelector('#payment-modal');
const paymentForm = document.querySelector('#payment-form');
const paymentBillIdInput = document.querySelector('#paymentBillId');
const paymentAmountInput = document.querySelector('#paymentAmount');
const paymentDateInput = document.querySelector('#paymentDate');
const paymentNotesInput = document.querySelector('#paymentNotes');
const dashboardTotalRevenue = document.querySelector('#dashboard-total-revenue');
const totalBillsCount = document.querySelector('#total-bills-count');
const totalBilledAmount = document.querySelector('#total-billed-amount');
const totalPaidAmount = document.querySelector('#total-paid-amount');
const totalPendingBalance = document.querySelector('#total-pending-balance');

const STORAGE_KEY = 'nexacare_patients';
const DOCTOR_STORAGE_KEY = 'nexacare_doctors';
const APPOINTMENT_STORAGE_KEY = 'nexacare_appointments';
const BILL_STORAGE_KEY = 'nexacare_bills';

const defaultPatients = [
  {
    id: 'PT-1001',
    fullName: 'Ava Thompson',
    dob: '1996-05-12',
    gender: 'Female',
    phone: '+1 415 204 8841',
    email: 'ava.thompson@example.com',
    address: '18 Pineview Ave, San Francisco, CA',
    bloodGroup: 'O+',
    registrationDate: '2024-10-11'
  },
  {
    id: 'PT-1002',
    fullName: 'Noah Patel',
    dob: '1988-09-21',
    gender: 'Male',
    phone: '+1 646 934 2201',
    email: 'noah.patel@example.com',
    address: '64 Harbor Lane, New York, NY',
    bloodGroup: 'A-',
    registrationDate: '2024-09-18'
  },
  {
    id: 'PT-1003',
    fullName: 'Sophia Garcia',
    dob: '2001-02-03',
    gender: 'Female',
    phone: '+1 305 447 3310',
    email: 'sophia.garcia@example.com',
    address: '221 Magnolia Drive, Miami, FL',
    bloodGroup: 'AB+',
    registrationDate: '2024-08-25'
  }
];

const defaultDoctors = [
  {
    id: 'DR-2001',
    fullName: 'Dr. Michael Ray',
    specialty: 'Cardiology',
    department: 'Cardiac Unit',
    phone: '+1 415 555 0182',
    email: 'michael.ray@hospital.com',
    qualification: 'MD, Cardiology',
    yearsExperience: 12,
    consultation: '$180',
    availability: 'Available',
    joinedDate: '2024-01-15'
  },
  {
    id: 'DR-2002',
    fullName: 'Dr. Priya Shah',
    specialty: 'Neurology',
    department: 'Neurology Care',
    phone: '+1 646 555 0102',
    email: 'priya.shah@hospital.com',
    qualification: 'MBBS, Neurology',
    yearsExperience: 9,
    consultation: '$160',
    availability: 'On Duty',
    joinedDate: '2023-02-28'
  },
  {
    id: 'DR-2003',
    fullName: 'Dr. James Cole',
    specialty: 'Orthopedics',
    department: 'Bone & Joint',
    phone: '+1 305 555 0145',
    email: 'james.cole@hospital.com',
    qualification: 'MS, Orthopedics',
    yearsExperience: 14,
    consultation: '$200',
    availability: 'On Leave',
    joinedDate: '2022-11-10'
  }
];

const defaultAppointments = [
  {
    id: 'AP-3001',
    patientId: 'PT-1001',
    doctorId: 'DR-2001',
    date: '2026-10-29',
    time: '09:30',
    reason: 'Routine cardiac review',
    notes: 'Keep blood pressure check summary ready.',
    status: 'Scheduled'
  },
  {
    id: 'AP-3002',
    patientId: 'PT-1002',
    doctorId: 'DR-2002',
    date: '2026-10-30',
    time: '11:15',
    reason: 'Neurology follow-up',
    notes: 'Review MRI results.',
    status: 'Completed'
  }
];

const defaultBills = [];

const titleMap = {
  dashboard: 'Dashboard',
  patients: 'Patients',
  doctors: 'Doctors',
  appointments: 'Appointments',
  billing: 'Billing',
  settings: 'Settings'
};

function getPatients() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPatients));
    return [...defaultPatients];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [...defaultPatients];
  } catch (error) {
    console.error('Could not parse patient data:', error);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPatients));
    return [...defaultPatients];
  }
}

function savePatients(patients) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
}

function getDoctors() {
  const stored = localStorage.getItem(DOCTOR_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(DOCTOR_STORAGE_KEY, JSON.stringify(defaultDoctors));
    return [...defaultDoctors];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [...defaultDoctors];
  } catch (error) {
    console.error('Could not parse doctor data:', error);
    localStorage.setItem(DOCTOR_STORAGE_KEY, JSON.stringify(defaultDoctors));
    return [...defaultDoctors];
  }
}

function saveDoctors(doctors) {
  localStorage.setItem(DOCTOR_STORAGE_KEY, JSON.stringify(doctors));
}

function getAppointments() {
  const stored = localStorage.getItem(APPOINTMENT_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(APPOINTMENT_STORAGE_KEY, JSON.stringify(defaultAppointments));
    return [...defaultAppointments];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [...defaultAppointments];
  } catch (error) {
    console.error('Could not parse appointment data:', error);
    localStorage.setItem(APPOINTMENT_STORAGE_KEY, JSON.stringify(defaultAppointments));
    return [...defaultAppointments];
  }
}

function saveAppointments(appointments) {
  localStorage.setItem(APPOINTMENT_STORAGE_KEY, JSON.stringify(appointments));
}

function getBills() {
  const stored = localStorage.getItem(BILL_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(BILL_STORAGE_KEY, JSON.stringify(defaultBills));
    return [];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Could not parse bill data:', error);
    localStorage.setItem(BILL_STORAGE_KEY, JSON.stringify(defaultBills));
    return [];
  }
}

function saveBills(bills) {
  localStorage.setItem(BILL_STORAGE_KEY, JSON.stringify(bills));
}

function showToast(message, type = 'success') {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2200);
}

function calculateAge(dateString) {
  if (!dateString) return 'N/A';
  const birthDate = new Date(dateString);
  const diff = Date.now() - birthDate.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function formatDate(dateString) {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? dateString : new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function formatAppointmentDate(dateString) {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? dateString : new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function formatAppointmentTime(timeString) {
  if (!timeString) return 'N/A';
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(Number(hours), Number(minutes));
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  }).format(date);
}

function formatCurrency(value) {
  const amount = Number(value) || 0;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

function safeNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function toCents(value) {
  return Math.round((Number(value) || 0) * 100);
}

function createPatientId() {
  const patients = getPatients();
  const ids = patients
    .map((patient) => Number(String(patient.id).split('-')[1]))
    .filter((value) => Number.isInteger(value));

  const nextNumber = ids.length ? Math.max(...ids) + 1 : 1001;
  return `PT-${nextNumber}`;
}

function createDoctorId() {
  const doctors = getDoctors();
  const ids = doctors
    .map((doctor) => Number(String(doctor.id).split('-')[1]))
    .filter((value) => Number.isInteger(value));

  const nextNumber = ids.length ? Math.max(...ids) + 1 : 2001;
  return `DR-${nextNumber}`;
}

function createAppointmentId() {
  const appointments = getAppointments();
  const ids = appointments
    .map((appointment) => Number(String(appointment.id).split('-')[1]))
    .filter((value) => Number.isInteger(value));

  const nextNumber = ids.length ? Math.max(...ids) + 1 : 3001;
  return `AP-${nextNumber}`;
}

function createBillId() {
  const bills = getBills();
  const ids = bills
    .map((bill) => Number(String(bill.id).split('-')[1]))
    .filter((value) => Number.isInteger(value));

  const nextNumber = ids.length ? Math.max(...ids) + 1 : 4001;
  return `BILL-${nextNumber}`;
}

function getPatientById(patientId) {
  return getPatients().find((patient) => patient.id === patientId);
}

function getDoctorById(doctorId) {
  return getDoctors().find((doctor) => doctor.id === doctorId);
}

function getAppointmentById(appointmentId) {
  return getAppointments().find((appointment) => appointment.id === appointmentId);
}

function getBillById(billId) {
  return getBills().find((bill) => bill.id === billId);
}

function getStatusClasses(status) {
  const normalized = status || 'Scheduled';
  if (normalized === 'Completed' || normalized === 'Paid') return 'confirmed';
  if (normalized === 'Partially Paid') return 'checkin';
  if (normalized === 'Cancelled' || normalized === 'Pending') return 'pending';
  return 'checkin';
}

function updateDashboardPatientCount() {
  const totalPatientsText = document.querySelector('#dashboard-page .stat-card .label');
  const totalPatientsValue = document.querySelector('#dashboard-page .stat-card h3');

  if (!totalPatientsText || !totalPatientsValue) return;

  const patients = getPatients();
  totalPatientsValue.textContent = patients.length.toLocaleString();
  totalPatientsText.textContent = 'Total Patients';
}

function updateDashboardAppointmentCount() {
  const appointments = getAppointments().filter((appointment) => appointment.status !== 'Cancelled');
  const today = new Date();
  const todayString = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
  const todaysCount = appointments.filter((appointment) => appointment.date === todayString).length;

  if (todayAppointmentsCount) {
    todayAppointmentsCount.textContent = String(todaysCount);
  }
}

function calculateBillMetrics(bill) {
  const lineItems = Array.isArray(bill.lineItems) ? bill.lineItems : [];
  const subtotalCents = lineItems.reduce((total, item) => {
    const quantity = Math.max(0, safeNumber(item.quantity, 0));
    const unitPrice = Math.max(0, safeNumber(item.unitPrice, 0));
    return total + Math.round(quantity * unitPrice * 100);
  }, 0);

  const discountCents = Math.max(0, toCents(safeNumber(bill.discount, 0)));
  const finalCents = Math.max(0, subtotalCents - discountCents);
  const amountPaidCents = Math.min(Math.max(0, toCents(safeNumber(bill.amountPaid, 0))), finalCents);
  const outstandingCents = Math.max(0, finalCents - amountPaidCents);

  return {
    subtotal: subtotalCents / 100,
    discount: discountCents / 100,
    finalAmount: finalCents / 100,
    amountPaid: amountPaidCents / 100,
    outstanding: outstandingCents / 100,
    status: (() => {
      if (finalCents <= 0) return 'Paid';
      if (amountPaidCents <= 0) return 'Pending';
      if (amountPaidCents >= finalCents) return 'Paid';
      return 'Partially Paid';
    })()
  };
}

function updateDashboardRevenue() {
  const bills = getBills();
  const totalBilled = bills.reduce((sum, bill) => sum + calculateBillMetrics(bill).finalAmount, 0);
  const totalPaid = bills.reduce((sum, bill) => sum + calculateBillMetrics(bill).amountPaid, 0);
  const totalPending = bills.reduce((sum, bill) => sum + calculateBillMetrics(bill).outstanding, 0);

  if (dashboardTotalRevenue) dashboardTotalRevenue.textContent = formatCurrency(totalPaid);
  if (totalBilledAmount) totalBilledAmount.textContent = formatCurrency(totalBilled);
  if (totalPaidAmount) totalPaidAmount.textContent = formatCurrency(totalPaid);
  if (totalPendingBalance) totalPendingBalance.textContent = formatCurrency(totalPending);
}

function updateBillingDashboard() {
  const bills = getBills();
  const totals = bills.reduce((acc, bill) => {
    const metrics = calculateBillMetrics(bill);
    acc.totalBills += 1;
    acc.totalBilled += metrics.finalAmount;
    acc.totalPaid += metrics.amountPaid;
    acc.totalPending += metrics.outstanding;
    return acc;
  }, { totalBills: 0, totalBilled: 0, totalPaid: 0, totalPending: 0 });

  if (totalBillsCount) totalBillsCount.textContent = String(totals.totalBills);
  if (totalBilledAmount) totalBilledAmount.textContent = formatCurrency(totals.totalBilled);
  if (totalPaidAmount) totalPaidAmount.textContent = formatCurrency(totals.totalPaid);
  if (totalPendingBalance) totalPendingBalance.textContent = formatCurrency(totals.totalPending);
}

function renderDashboardAppointments() {
  if (!dashboardAppointmentsBody) return;

  const appointments = getAppointments()
    .filter((appointment) => appointment.status !== 'Cancelled')
    .sort((a, b) => new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time))
    .slice(0, 4);

  dashboardAppointmentsBody.innerHTML = appointments
    .map((appointment) => {
      const patient = getPatientById(appointment.patientId);
      const doctor = getDoctorById(appointment.doctorId);
      const department = doctor ? doctor.department : 'General';
      const statusClass = getStatusClasses(appointment.status);

      return `
        <tr>
          <td>${patient ? patient.fullName : 'Unknown patient'}</td>
          <td>${doctor ? doctor.fullName : 'Unknown doctor'}</td>
          <td>${formatAppointmentDate(appointment.date)}</td>
          <td>${formatAppointmentTime(appointment.time)}</td>
          <td>${department}</td>
          <td><span class="pill ${statusClass}">${appointment.status}</span></td>
        </tr>
      `;
    })
    .join('');
}

function renderPatients() {
  const patients = getPatients();
  const query = patientSearchInput ? patientSearchInput.value.trim().toLowerCase() : '';

  const filteredPatients = patients.filter((patient) => {
    const searchable = [patient.id, patient.fullName, patient.phone, patient.email || ''].join(' ').toLowerCase();
    return searchable.includes(query);
  });

  patientsTableBody.innerHTML = filteredPatients
    .map((patient) => `
      <tr>
        <td>${patient.id}</td>
        <td>${patient.fullName}</td>
        <td>${calculateAge(patient.dob)}</td>
        <td>${patient.gender || 'N/A'}</td>
        <td>${patient.phone || 'N/A'}</td>
        <td>${formatDate(patient.registrationDate || new Date().toISOString())}</td>
        <td>
          <div class="action-cell">
            <button class="action-btn view-btn" type="button" data-action="view" data-id="${patient.id}">View</button>
            <button class="action-btn" type="button" data-action="edit" data-id="${patient.id}">Edit</button>
            <button class="action-btn delete-btn" type="button" data-action="delete" data-id="${patient.id}">Delete</button>
          </div>
        </td>
      </tr>
    `)
    .join('');

  if (emptyPatientsState) {
    emptyPatientsState.classList.toggle('hidden', filteredPatients.length > 0);
  }
}

function renderDoctors() {
  const doctors = getDoctors();
  const query = doctorSearchInput ? doctorSearchInput.value.trim().toLowerCase() : '';

  const filteredDoctors = doctors.filter((doctor) => {
    const searchable = [doctor.id, doctor.fullName, doctor.specialty, doctor.department, doctor.phone].join(' ').toLowerCase();
    return searchable.includes(query);
  });

  doctorTableBody.innerHTML = filteredDoctors
    .map((doctor) => `
      <tr>
        <td>${doctor.id}</td>
        <td>${doctor.fullName}</td>
        <td>${doctor.specialty}</td>
        <td>${doctor.department}</td>
        <td>${doctor.phone}</td>
        <td>${doctor.email}</td>
        <td><span class="pill ${doctor.availability === 'Available' ? 'confirmed' : doctor.availability === 'On Duty' ? 'checkin' : 'pending'}">${doctor.availability}</span></td>
        <td>
          <div class="action-cell">
            <button class="action-btn view-btn" type="button" data-doctor-action="view" data-id="${doctor.id}">View</button>
            <button class="action-btn" type="button" data-doctor-action="edit" data-id="${doctor.id}">Edit</button>
            <button class="action-btn delete-btn" type="button" data-doctor-action="delete" data-id="${doctor.id}">Delete</button>
          </div>
        </td>
      </tr>
    `)
    .join('');

  if (emptyDoctorsState) {
    emptyDoctorsState.classList.toggle('hidden', filteredDoctors.length > 0);
  }
}

function renderAppointments() {
  const appointments = getAppointments();
  const query = appointmentSearchInput ? appointmentSearchInput.value.trim().toLowerCase() : '';
  const dateFilter = appointmentDateFilter ? appointmentDateFilter.value : '';
  const statusFilter = appointmentStatusFilter ? appointmentStatusFilter.value : '';

  const filteredAppointments = appointments.filter((appointment) => {
    const patient = getPatientById(appointment.patientId);
    const doctor = getDoctorById(appointment.doctorId);
    const searchable = [
      appointment.id,
      patient ? patient.fullName : '',
      doctor ? doctor.fullName : '',
      patient ? patient.id : '',
      doctor ? doctor.specialty : ''
    ].join(' ').toLowerCase();

    return (
      (!query || searchable.includes(query)) &&
      (!dateFilter || appointment.date === dateFilter) &&
      (!statusFilter || appointment.status === statusFilter)
    );
  });

  appointmentTableBody.innerHTML = filteredAppointments
    .sort((a, b) => new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time))
    .map((appointment) => {
      const patient = getPatientById(appointment.patientId);
      const doctor = getDoctorById(appointment.doctorId);
      const statusClass = getStatusClasses(appointment.status);

      return `
        <tr>
          <td>${appointment.id}</td>
          <td>${patient ? patient.fullName : 'Unknown patient'}</td>
          <td>${doctor ? doctor.fullName : 'Unknown doctor'}</td>
          <td>${formatAppointmentDate(appointment.date)}</td>
          <td>${formatAppointmentTime(appointment.time)}</td>
          <td>${appointment.reason || 'General consultation'}</td>
          <td><span class="pill ${statusClass}">${appointment.status}</span></td>
          <td>
            <div class="action-cell">
              <button class="action-btn view-btn" type="button" data-appointment-action="view" data-id="${appointment.id}">View</button>
              <button class="action-btn" type="button" data-appointment-action="edit" data-id="${appointment.id}">Edit</button>
              <button class="action-btn delete-btn" type="button" data-appointment-action="delete" data-id="${appointment.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');

  if (emptyAppointmentsState) {
    emptyAppointmentsState.classList.toggle('hidden', filteredAppointments.length > 0);
  }
}

function clearFormErrors() {
  document.querySelectorAll('.error-message').forEach((field) => {
    field.textContent = '';
  });
}

function clearDoctorErrors() {
  document.querySelectorAll('#doctor-form .error-message').forEach((field) => {
    field.textContent = '';
  });
}

function clearAppointmentErrors() {
  document.querySelectorAll('#appointment-form .error-message').forEach((field) => {
    field.textContent = '';
  });
}

function clearBillErrors() {
  document.querySelectorAll('#bill-form .error-message').forEach((field) => {
    field.textContent = '';
  });
}

function validatePatientForm(formData) {
  const errors = {};
  const fullName = formData.get('fullName')?.trim();
  const dob = formData.get('dob');
  const gender = formData.get('gender');
  const phone = formData.get('phone')?.trim();
  const email = formData.get('email')?.trim();

  if (!fullName) {
    errors.fullName = 'Full name is required.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  if (!dob) {
    errors.dob = 'Date of birth is required.';
  } else {
    const enteredDate = new Date(dob);
    const today = new Date();
    if (Number.isNaN(enteredDate.getTime()) || enteredDate >= today) {
      errors.dob = 'Please enter a valid date of birth in the past.';
    }
  }

  if (!gender) errors.gender = 'Gender is required.';

  if (!phone) {
    errors.phone = 'Phone number is required.';
  } else if (!/^([+]?\d[\d\s-]{7,20})$/.test(phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
}

function validateDoctorForm(formData) {
  const errors = {};
  const fullName = formData.get('doctorFullName')?.trim();
  const specialty = formData.get('specialty')?.trim();
  const department = formData.get('department')?.trim();
  const phone = formData.get('doctorPhone')?.trim();
  const email = formData.get('doctorEmail')?.trim();
  const qualification = formData.get('qualification')?.trim();
  const yearsExperience = Number(formData.get('yearsExperience'));
  const consultation = formData.get('consultationFee')?.trim();

  if (!fullName) {
    errors.doctorFullName = 'Full name is required.';
  } else if (fullName.length < 2) {
    errors.doctorFullName = 'Full name must be at least 2 characters.';
  }

  if (!specialty) errors.specialty = 'Specialty is required.';
  if (!department) errors.department = 'Department is required.';

  if (!phone) {
    errors.doctorPhone = 'Phone number is required.';
  } else if (!/^([+]?\d[\d\s-]{7,20})$/.test(phone)) {
    errors.doctorPhone = 'Please enter a valid phone number.';
  }

  if (!email) {
    errors.doctorEmail = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.doctorEmail = 'Please enter a valid email address.';
  }

  if (!qualification) errors.qualification = 'Qualification is required.';

  if (!formData.get('yearsExperience')) {
    errors.yearsExperience = 'Years of experience is required.';
  } else if (yearsExperience < 0 || yearsExperience > 60) {
    errors.yearsExperience = 'Enter a value between 0 and 60 years.';
  }

  if (!consultation) errors.consultationFee = 'Consultation fee is required.';

  return errors;
}

function validateAppointmentForm(formData) {
  const errors = {};
  const patientId = formData.get('appointmentPatient');
  const doctorId = formData.get('appointmentDoctor');
  const appointmentDate = formData.get('appointmentDate');
  const appointmentTime = formData.get('appointmentTime');
  const reason = formData.get('appointmentReason')?.trim();
  const status = formData.get('appointmentStatus');

  if (!patientId) errors.appointmentPatient = 'Please select a patient.';
  if (!doctorId) errors.appointmentDoctor = 'Please select a doctor.';

  if (!appointmentDate) {
    errors.appointmentDate = 'Appointment date is required.';
  } else {
    const selectedDate = new Date(`${appointmentDate}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.appointmentDate = 'Appointments cannot be scheduled in the past.';
    }
  }

  if (!appointmentTime) errors.appointmentTime = 'Appointment time is required.';
  if (!reason) errors.appointmentReason = 'Reason for visit is required.';
  if (!status) errors.appointmentStatus = 'Status is required.';

  if (patientId && doctorId && appointmentDate && appointmentTime) {
    const hasConflict = getAppointments().some((appointment) => {
      const sameDoctor = appointment.doctorId === doctorId;
      const sameDate = appointment.date === appointmentDate;
      const sameTime = appointment.time === appointmentTime;
      const sameRecord = appointment.id === appointmentIdInput.value.trim();
      return sameDoctor && sameDate && sameTime && !sameRecord && appointment.status !== 'Cancelled';
    });

    if (hasConflict) {
      errors.appointmentDoctor = 'This doctor is already booked at the same date and time.';
    }
  }

  return errors;
}

function createLineItemRow(item = null) {
  const safeItem = item || { id: `line-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`, description: '', quantity: 1, unitPrice: 0 };
  return `
    <tr data-line-item-row data-id="${safeItem.id}">
      <td><input type="text" data-field="description" value="${(safeItem.description || '').replace(/"/g, '&quot;')}" placeholder="Consultation" /></td>
      <td><input type="number" data-field="quantity" min="1" step="1" value="${Number(safeItem.quantity || 1)}" /></td>
      <td><input type="number" data-field="unitPrice" min="0" step="0.01" value="${safeNumber(safeItem.unitPrice, 0)}" /></td>
      <td class="line-total-cell">${formatCurrency((safeNumber(safeItem.quantity, 1) * safeNumber(safeItem.unitPrice, 0)))}</td>
      <td><button type="button" class="action-btn delete-btn" data-remove-line-item="${safeItem.id}">Remove</button></td>
    </tr>
  `;
}

function renderBillLineItems(items = []) {
  if (!billLineItemsBody) return;

  const normalizedItems = Array.isArray(items) && items.length ? items : [createLineItemRow({ description: 'Consultation', quantity: 1, unitPrice: 0 })];

  billLineItemsBody.innerHTML = normalizedItems.map((item) => createLineItemRow(item)).join('');
  updateBillFormPreview();
}

function getCurrentBillLineItems() {
  const rows = billLineItemsBody ? billLineItemsBody.querySelectorAll('[data-line-item-row]') : [];
  const items = [];

  rows.forEach((row) => {
    const description = row.querySelector('[data-field="description"]')?.value.trim() || '';
    const quantity = safeNumber(row.querySelector('[data-field="quantity"]')?.value, 0);
    const unitPrice = safeNumber(row.querySelector('[data-field="unitPrice"]')?.value, 0);

    if (description || quantity > 0 || unitPrice > 0) {
      items.push({
        id: row.dataset.id,
        description,
        quantity: Math.max(0, quantity),
        unitPrice: Math.max(0, unitPrice)
      });
    }
  });

  return items;
}

function calculateCurrentBillTotals() {
  const lineItems = getCurrentBillLineItems();
  const subtotal = lineItems.reduce((sum, item) => sum + (safeNumber(item.quantity, 0) * safeNumber(item.unitPrice, 0)), 0);
  const discount = Math.max(0, safeNumber(billDiscountInput ? billDiscountInput.value : 0, 0));
  const finalAmount = Math.max(0, subtotal - discount);
  return { lineItems, subtotal, discount, finalAmount };
}

function updateBillFormPreview() {
  if (!billSubtotalPreview || !billDiscountPreview || !billFinalPreview) return;

  const { subtotal, discount, finalAmount } = calculateCurrentBillTotals();
  billSubtotalPreview.textContent = formatCurrency(subtotal);
  billDiscountPreview.textContent = formatCurrency(discount);
  billFinalPreview.textContent = formatCurrency(finalAmount);
}

function validateBillForm(formData) {
  const errors = {};
  const patientId = formData.get('billPatient');
  const appointmentId = formData.get('billAppointment');
  const billDate = formData.get('billDate');
  const description = formData.get('billDescription')?.trim();
  const discount = safeNumber(formData.get('billDiscount'), 0);
  const status = formData.get('billStatus');
  const amountPaid = safeNumber(formData.get('billAmountPaid'), 0);
  const lineItems = getCurrentBillLineItems();

  if (!patientId) errors.billPatient = 'Please select a patient.';
  if (appointmentId && !getAppointmentById(appointmentId)) {
    errors.billAppointment = 'The selected appointment is invalid.';
  }
  if (appointmentId && billPatientSelect && billPatientSelect.value && appointmentId) {
    const appointment = getAppointmentById(appointmentId);
    if (appointment && appointment.patientId !== billPatientSelect.value) {
      errors.billAppointment = 'This appointment does not belong to the selected patient.';
    }
  }

  if (!billDate) errors.billDate = 'Bill date is required.';
  if (!description) errors.billDescription = 'Description of services is required.';

  if (lineItems.length === 0 || !lineItems.some((item) => item.description && item.quantity > 0 && item.unitPrice >= 0)) {
    errors.lineItems = 'Add at least one valid bill line item.';
  } else {
    const invalidLine = lineItems.some((item) => !item.description || item.quantity <= 0 || item.unitPrice < 0);
    if (invalidLine) {
      errors.lineItems = 'Each line item needs a description, a positive quantity, and a valid unit price.';
    }
  }

  if (discount < 0) errors.billDiscount = 'Discount cannot be negative.';
  if (amountPaid < 0) errors.billAmountPaid = 'Amount paid cannot be negative.';
  if (!status) errors.billStatus = 'Payment status is required.';

  const subtotal = lineItems.reduce((sum, item) => sum + (safeNumber(item.quantity) * safeNumber(item.unitPrice)), 0);
  const finalAmount = Math.max(0, subtotal - discount);

  if (amountPaid > finalAmount) {
    errors.billAmountPaid = 'Amount paid cannot exceed the final bill amount.';
  }

  if (status === 'Paid' && amountPaid < finalAmount) {
    errors.billAmountPaid = 'Paid bills must have the full amount received.';
  }

  if (status === 'Partially Paid' && amountPaid <= 0) {
    errors.billAmountPaid = 'Partially paid bills require a positive amount paid.';
  }

  return errors;
}

function populateAppointmentOptions(patientId = '') {
  const appointments = getAppointments().filter((appointment) => !patientId || appointment.patientId === patientId);

  if (!billAppointmentSelect) return;

  billAppointmentSelect.innerHTML = '<option value="">No appointment linked</option>' + appointments
    .map((appointment) => `<option value="${appointment.id}">${appointment.id} • ${appointment.reason || 'Consultation'}</option>`)
    .join('');
}

function populateBillPatientOptions() {
  if (!billPatientSelect) return;

  const patients = getPatients();
  billPatientSelect.innerHTML = '<option value="">Select patient</option>' + patients
    .map((patient) => `<option value="${patient.id}">${patient.fullName} (${patient.id})</option>`)
    .join('');
}

function openPatientModal(mode, patient = null) {
  clearFormErrors();
  patientForm.reset();

  if (mode === 'add') {
    patientModalTitle.textContent = 'Add patient';
    patientIdInput.value = createPatientId();
  }

  if (mode === 'edit' && patient) {
    patientModalTitle.textContent = 'Edit patient';
    patientIdInput.value = patient.id;
    document.querySelector('#fullName').value = patient.fullName || '';
    document.querySelector('#dob').value = patient.dob || '';
    document.querySelector('#gender').value = patient.gender || '';
    document.querySelector('#phone').value = patient.phone || '';
    document.querySelector('#email').value = patient.email || '';
    document.querySelector('#address').value = patient.address || '';
    document.querySelector('#bloodGroup').value = patient.bloodGroup || '';
  }

  patientModal.classList.remove('hidden');
  patientModal.setAttribute('aria-hidden', 'false');
}

function closePatientModal() {
  patientModal.classList.add('hidden');
  patientModal.setAttribute('aria-hidden', 'true');
  patientForm.reset();
  clearFormErrors();
}

function closePatientDetailsModal() {
  patientDetailsModal.classList.add('hidden');
  patientDetailsModal.setAttribute('aria-hidden', 'true');
}

function renderPatientDetails(patientId) {
  const patient = getPatientById(patientId);

  if (!patient) {
    showToast('Patient record not found.', 'error');
    return;
  }

  patientDetailsContent.innerHTML = `
    <div class="detail-summary">
      <div class="detail-avatar">${patient.fullName.charAt(0).toUpperCase()}</div>
      <div>
        <h4>${patient.fullName}</h4>
        <p>${patient.id}</p>
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-item">
        <label>Age</label>
        <strong>${calculateAge(patient.dob)}</strong>
      </div>
      <div class="detail-item">
        <label>Gender</label>
        <strong>${patient.gender || 'N/A'}</strong>
      </div>
      <div class="detail-item">
        <label>Phone</label>
        <strong>${patient.phone || 'N/A'}</strong>
      </div>
      <div class="detail-item">
        <label>Email</label>
        <strong>${patient.email || 'N/A'}</strong>
      </div>
      <div class="detail-item">
        <label>Blood group</label>
        <strong>${patient.bloodGroup || 'N/A'}</strong>
      </div>
      <div class="detail-item">
        <label>Registration</label>
        <strong>${formatDate(patient.registrationDate || new Date().toISOString())}</strong>
      </div>
      <div class="detail-item" style="grid-column: 1 / -1;">
        <label>Address</label>
        <strong>${patient.address || 'N/A'}</strong>
      </div>
    </div>
  `;

  patientDetailsModal.classList.remove('hidden');
  patientDetailsModal.setAttribute('aria-hidden', 'false');
}

function openDoctorModal(mode, doctor = null) {
  clearDoctorErrors();
  doctorForm.reset();

  if (mode === 'add') {
    doctorModalTitle.textContent = 'Add doctor';
    doctorIdInput.value = createDoctorId();
    document.querySelector('#availability').value = 'Available';
  }

  if (mode === 'edit' && doctor) {
    doctorModalTitle.textContent = 'Edit doctor';
    doctorIdInput.value = doctor.id;
    document.querySelector('#doctorFullName').value = doctor.fullName || '';
    document.querySelector('#specialty').value = doctor.specialty || '';
    document.querySelector('#department').value = doctor.department || '';
    document.querySelector('#doctorPhone').value = doctor.phone || '';
    document.querySelector('#doctorEmail').value = doctor.email || '';
    document.querySelector('#qualification').value = doctor.qualification || '';
    document.querySelector('#yearsExperience').value = doctor.yearsExperience ?? '';
    document.querySelector('#consultationFee').value = doctor.consultation || '';
    document.querySelector('#availability').value = doctor.availability || 'Available';
  }

  doctorModal.classList.remove('hidden');
  doctorModal.setAttribute('aria-hidden', 'false');
}

function closeDoctorModal() {
  doctorModal.classList.add('hidden');
  doctorModal.setAttribute('aria-hidden', 'true');
  doctorForm.reset();
  clearDoctorErrors();
}

function closeDoctorDetailsModal() {
  doctorDetailsModal.classList.add('hidden');
  doctorDetailsModal.setAttribute('aria-hidden', 'true');
}

function renderDoctorDetails(doctorId) {
  const doctor = getDoctorById(doctorId);

  if (!doctor) {
    showToast('Doctor record not found.', 'error');
    return;
  }

  doctorDetailsContent.innerHTML = `
    <div class="detail-summary">
      <div class="detail-avatar">${doctor.fullName.charAt(0).toUpperCase()}</div>
      <div>
        <h4>${doctor.fullName}</h4>
        <p>${doctor.id}</p>
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-item">
        <label>Specialty</label>
        <strong>${doctor.specialty}</strong>
      </div>
      <div class="detail-item">
        <label>Department</label>
        <strong>${doctor.department}</strong>
      </div>
      <div class="detail-item">
        <label>Phone</label>
        <strong>${doctor.phone}</strong>
      </div>
      <div class="detail-item">
        <label>Email</label>
        <strong>${doctor.email}</strong>
      </div>
      <div class="detail-item">
        <label>Qualification</label>
        <strong>${doctor.qualification}</strong>
      </div>
      <div class="detail-item">
        <label>Experience</label>
        <strong>${doctor.yearsExperience} years</strong>
      </div>
      <div class="detail-item">
        <label>Consultation</label>
        <strong>${doctor.consultation}</strong>
      </div>
      <div class="detail-item">
        <label>Status</label>
        <strong>${doctor.availability}</strong>
      </div>
    </div>
  `;

  doctorDetailsModal.classList.remove('hidden');
  doctorDetailsModal.setAttribute('aria-hidden', 'false');
}

function populateAppointmentSelectOptions() {
  if (!appointmentPatientSelect || !appointmentDoctorSelect) return;

  const patients = getPatients();
  const doctors = getDoctors();

  appointmentPatientSelect.innerHTML = '<option value="">Select patient</option>' + patients
    .map((patient) => `<option value="${patient.id}">${patient.fullName} (${patient.id})</option>`)
    .join('');

  appointmentDoctorSelect.innerHTML = '<option value="">Select doctor</option>' + doctors
    .map((doctor) => `<option value="${doctor.id}">${doctor.fullName} (${doctor.specialty})</option>`)
    .join('');
}

function openAppointmentModal(mode, appointment = null) {
  clearAppointmentErrors();
  appointmentForm.reset();
  populateAppointmentSelectOptions();

  if (mode === 'add') {
    appointmentModalTitle.textContent = 'Add appointment';
    appointmentIdInput.value = createAppointmentId();
    document.querySelector('#appointmentStatus').value = 'Scheduled';
  }

  if (mode === 'edit' && appointment) {
    appointmentModalTitle.textContent = 'Edit appointment';
    appointmentIdInput.value = appointment.id;
    appointmentPatientSelect.value = appointment.patientId || '';
    appointmentDoctorSelect.value = appointment.doctorId || '';
    document.querySelector('#appointmentDate').value = appointment.date || '';
    document.querySelector('#appointmentTime').value = appointment.time || '';
    document.querySelector('#appointmentStatus').value = appointment.status || 'Scheduled';
    document.querySelector('#appointmentReason').value = appointment.reason || '';
    document.querySelector('#appointmentNotes').value = appointment.notes || '';
  }

  appointmentModal.classList.remove('hidden');
  appointmentModal.setAttribute('aria-hidden', 'false');
}

function closeAppointmentModal() {
  appointmentModal.classList.add('hidden');
  appointmentModal.setAttribute('aria-hidden', 'true');
  appointmentForm.reset();
  clearAppointmentErrors();
}

function closeAppointmentDetailsModal() {
  appointmentDetailsModal.classList.add('hidden');
  appointmentDetailsModal.setAttribute('aria-hidden', 'true');
}

function renderAppointmentDetails(appointmentId) {
  const appointment = getAppointmentById(appointmentId);

  if (!appointment) {
    showToast('Appointment record not found.', 'error');
    return;
  }

  const patient = getPatientById(appointment.patientId);
  const doctor = getDoctorById(appointment.doctorId);

  appointmentDetailsContent.innerHTML = `
    <div class="detail-summary">
      <div class="detail-avatar">${(patient ? patient.fullName : 'A').charAt(0).toUpperCase()}</div>
      <div>
        <h4>${appointment.id}</h4>
        <p>${patient ? patient.fullName : 'Unknown patient'} • ${doctor ? doctor.fullName : 'Unknown doctor'}</p>
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-item">
        <label>Patient</label>
        <strong>${patient ? patient.fullName : 'Unknown patient'} (${appointment.patientId || 'N/A'})</strong>
      </div>
      <div class="detail-item">
        <label>Doctor</label>
        <strong>${doctor ? doctor.fullName : 'Unknown doctor'} (${doctor ? doctor.specialty : 'N/A'})</strong>
      </div>
      <div class="detail-item">
        <label>Date</label>
        <strong>${formatAppointmentDate(appointment.date)}</strong>
      </div>
      <div class="detail-item">
        <label>Time</label>
        <strong>${formatAppointmentTime(appointment.time)}</strong>
      </div>
      <div class="detail-item">
        <label>Reason</label>
        <strong>${appointment.reason || 'General consultation'}</strong>
      </div>
      <div class="detail-item">
        <label>Status</label>
        <strong>${appointment.status}</strong>
      </div>
      <div class="detail-item" style="grid-column: 1 / -1;">
        <label>Notes</label>
        <strong>${appointment.notes || 'No special notes'}</strong>
      </div>
    </div>
  `;

  appointmentDetailsModal.classList.remove('hidden');
  appointmentDetailsModal.setAttribute('aria-hidden', 'false');
}

function openBillModal(mode, bill = null) {
  clearBillErrors();
  billForm.reset();
  populateBillPatientOptions();
  populateAppointmentOptions();

  if (mode === 'add') {
    billModalTitle.textContent = 'Add bill';
    billIdInput.value = createBillId();
    billStatusSelect.value = 'Pending';
    billAmountPaidInput.value = '0';
    billDateInput.value = new Date().toISOString().split('T')[0];
    renderBillLineItems([{ id: `line-${Date.now()}`, description: 'Consultation', quantity: 1, unitPrice: 0 }]);
  }

  if (mode === 'edit' && bill) {
    billModalTitle.textContent = 'Edit bill';
    billIdInput.value = bill.id;
    billPatientSelect.value = bill.patientId || '';
    populateAppointmentOptions(bill.patientId || '');
    billAppointmentSelect.value = bill.appointmentId || '';
    billDateInput.value = bill.date || '';
    billDescriptionInput.value = bill.description || '';
    billDiscountInput.value = Number(bill.discount || 0);
    billStatusSelect.value = bill.status || 'Pending';
    billAmountPaidInput.value = Number(bill.amountPaid || 0);
    renderBillLineItems(Array.isArray(bill.lineItems) && bill.lineItems.length ? bill.lineItems : [{ description: 'Consultation', quantity: 1, unitPrice: 0 }]);
  }

  billModal.classList.remove('hidden');
  billModal.setAttribute('aria-hidden', 'false');
}

function closeBillModal() {
  billModal.classList.add('hidden');
  billModal.setAttribute('aria-hidden', 'true');
  billForm.reset();
  clearBillErrors();
  if (billLineItemsBody) billLineItemsBody.innerHTML = '';
}

function openPaymentModal(billId) {
  const bill = getBillById(billId);
  if (!bill) {
    showToast('Bill not found.', 'error');
    return;
  }

  const metrics = calculateBillMetrics(bill);
  paymentBillIdInput.value = bill.id;
  paymentAmountInput.value = String(Math.max(0, Number((metrics.finalAmount - metrics.amountPaid).toFixed(2))));
  paymentDateInput.value = new Date().toISOString().split('T')[0];
  paymentNotesInput.value = `Payment for ${bill.id}`;

  paymentModal.classList.remove('hidden');
  paymentModal.setAttribute('aria-hidden', 'false');
}

function closePaymentModal() {
  paymentModal.classList.add('hidden');
  paymentModal.setAttribute('aria-hidden', 'true');
  paymentForm.reset();
}

function renderBillDetails(billId) {
  const bill = getBillById(billId);
  if (!bill) {
    showToast('Bill not found.', 'error');
    return;
  }

  const patient = getPatientById(bill.patientId);
  const appointment = getAppointmentById(bill.appointmentId);
  const metrics = calculateBillMetrics(bill);

  billDetailsContent.innerHTML = `
    <div class="detail-summary">
      <div class="detail-avatar">${(patient ? patient.fullName : 'P').charAt(0).toUpperCase()}</div>
      <div>
        <h4>${bill.id}</h4>
        <p>${patient ? patient.fullName : 'Unknown patient'}</p>
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-item">
        <label>Patient</label>
        <strong>${patient ? `${patient.fullName} (${patient.id})` : `Unknown patient (${bill.patientId || 'N/A'})`}</strong>
      </div>
      <div class="detail-item">
        <label>Appointment</label>
        <strong>${appointment ? `${appointment.id} • ${appointment.reason || 'Consultation'}` : bill.appointmentId || 'Not linked'}</strong>
      </div>
      <div class="detail-item">
        <label>Bill date</label>
        <strong>${formatDate(bill.date)}</strong>
      </div>
      <div class="detail-item">
        <label>Status</label>
        <strong>${bill.status || metrics.status}</strong>
      </div>
      <div class="detail-item">
        <label>Subtotal</label>
        <strong>${formatCurrency(metrics.subtotal)}</strong>
      </div>
      <div class="detail-item">
        <label>Discount</label>
        <strong>${formatCurrency(metrics.discount)}</strong>
      </div>
      <div class="detail-item">
        <label>Final amount</label>
        <strong>${formatCurrency(metrics.finalAmount)}</strong>
      </div>
      <div class="detail-item">
        <label>Amount paid</label>
        <strong>${formatCurrency(metrics.amountPaid)}</strong>
      </div>
      <div class="detail-item">
        <label>Outstanding</label>
        <strong>${formatCurrency(metrics.outstanding)}</strong>
      </div>
      <div class="detail-item" style="grid-column: 1 / -1;">
        <label>Description</label>
        <strong>${bill.description || 'No description provided'}</strong>
      </div>
      <div class="detail-item" style="grid-column: 1 / -1;">
        <label>Line items</label>
        <strong>
          ${Array.isArray(bill.lineItems) && bill.lineItems.length
            ? bill.lineItems.map((item) => `${item.description || 'Item'} × ${Number(item.quantity || 0)} @ ${formatCurrency(item.unitPrice || 0)}`).join(', ')
            : 'No line items'}
        </strong>
      </div>
    </div>

    <div class="form-footer detail-actions">
      <button type="button" class="secondary-btn" data-bill-pay="${bill.id}">Record payment</button>
      <button type="button" class="primary-btn" onclick="window.print()">Print invoice</button>
    </div>
  `;

  billDetailsModal.classList.remove('hidden');
  billDetailsModal.setAttribute('aria-hidden', 'false');
}

function handleBillLineItemInput(event) {
  const row = event.target.closest('[data-line-item-row]');
  if (!row) return;

  const descriptionInput = row.querySelector('[data-field="description"]');
  const quantityInput = row.querySelector('[data-field="quantity"]');
  const unitPriceInput = row.querySelector('[data-field="unitPrice"]');
  const totalCell = row.querySelector('.line-total-cell');

  const quantity = safeNumber(quantityInput ? quantityInput.value : 0, 0);
  const unitPrice = safeNumber(unitPriceInput ? unitPriceInput.value : 0, 0);
  const lineTotal = quantity * unitPrice;

  if (totalCell) totalCell.textContent = formatCurrency(lineTotal);
  updateBillFormPreview();

  if (descriptionInput && quantityInput && unitPriceInput) {
    descriptionInput.value = descriptionInput.value;
  }
}

function handleBillLineItemAction(event) {
  const removeButton = event.target.closest('[data-remove-line-item]');
  if (!removeButton) return;

  const row = removeButton.closest('[data-line-item-row]');
  if (!row) return;

  const lineItems = getCurrentBillLineItems().filter((item) => item.id !== row.dataset.id);
  if (lineItems.length === 0) {
    renderBillLineItems([{ id: `line-${Date.now()}`, description: '', quantity: 1, unitPrice: 0 }]);
    return;
  }

  renderBillLineItems(lineItems);
}

function clearBillForm() {
  billForm.reset();
  clearBillErrors();
  renderBillLineItems([{ id: `line-${Date.now()}`, description: 'Consultation', quantity: 1, unitPrice: 0 }]);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(patientForm);
  const errors = validatePatientForm(formData);

  clearFormErrors();

  Object.entries(errors).forEach(([fieldName, message]) => {
    const fieldError = document.querySelector(`[data-error-for="${fieldName}"]`);
    if (fieldError) fieldError.textContent = message;
  });

  if (Object.keys(errors).length > 0) {
    showToast('Please correct the highlighted fields.', 'error');
    return;
  }

  const patients = getPatients();
  const patientId = patientIdInput.value.trim();
  const patientData = {
    id: patientId || createPatientId(),
    fullName: formData.get('fullName').trim(),
    dob: formData.get('dob'),
    gender: formData.get('gender'),
    phone: formData.get('phone').trim(),
    email: (formData.get('email') || '').trim(),
    address: (formData.get('address') || '').trim(),
    bloodGroup: formData.get('bloodGroup') || '',
    registrationDate: patientId && patients.some((item) => item.id === patientId)
      ? patients.find((item) => item.id === patientId)?.registrationDate || new Date().toISOString()
      : new Date().toISOString()
  };

  const existingIndex = patients.findIndex((entry) => entry.id === patientId);

  if (existingIndex >= 0) {
    patients[existingIndex] = patientData;
    showToast('Patient record updated successfully.', 'success');
  } else {
    patients.push(patientData);
    showToast('Patient added successfully.', 'success');
  }

  savePatients(patients);
  renderPatients();
  updateDashboardPatientCount();
  closePatientModal();
}

function handleDoctorFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(doctorForm);
  const errors = validateDoctorForm(formData);

  clearDoctorErrors();

  Object.entries(errors).forEach(([fieldName, message]) => {
    const fieldError = document.querySelector(`#doctor-form [data-error-for="${fieldName}"]`);
    if (fieldError) fieldError.textContent = message;
  });

  if (Object.keys(errors).length > 0) {
    showToast('Please correct the highlighted fields.', 'error');
    return;
  }

  const doctors = getDoctors();
  const doctorId = doctorIdInput.value.trim();
  const doctorData = {
    id: doctorId || createDoctorId(),
    fullName: formData.get('doctorFullName').trim(),
    specialty: formData.get('specialty').trim(),
    department: formData.get('department').trim(),
    phone: formData.get('doctorPhone').trim(),
    email: formData.get('doctorEmail').trim(),
    qualification: formData.get('qualification').trim(),
    yearsExperience: Number(formData.get('yearsExperience')),
    consultation: formData.get('consultationFee').trim(),
    availability: formData.get('availability'),
    joinedDate: doctors.find((entry) => entry.id === doctorId)?.joinedDate || new Date().toISOString()
  };

  const existingIndex = doctors.findIndex((entry) => entry.id === doctorId);

  if (existingIndex >= 0) {
    doctors[existingIndex] = doctorData;
    showToast('Doctor record updated successfully.', 'success');
  } else {
    doctors.push(doctorData);
    showToast('Doctor added successfully.', 'success');
  }

  saveDoctors(doctors);
  renderDoctors();
  closeDoctorModal();
}

function handleAppointmentFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(appointmentForm);
  const errors = validateAppointmentForm(formData);

  clearAppointmentErrors();

  Object.entries(errors).forEach(([fieldName, message]) => {
    const fieldError = document.querySelector(`#appointment-form [data-error-for="${fieldName}"]`);
    if (fieldError) fieldError.textContent = message;
  });

  if (Object.keys(errors).length > 0) {
    showToast('Please correct the highlighted fields.', 'error');
    return;
  }

  const appointments = getAppointments();
  const appointmentId = appointmentIdInput.value.trim();
  const appointmentData = {
    id: appointmentId || createAppointmentId(),
    patientId: formData.get('appointmentPatient'),
    doctorId: formData.get('appointmentDoctor'),
    date: formData.get('appointmentDate'),
    time: formData.get('appointmentTime'),
    reason: formData.get('appointmentReason').trim(),
    notes: (formData.get('appointmentNotes') || '').trim(),
    status: formData.get('appointmentStatus') || 'Scheduled'
  };

  const existingIndex = appointments.findIndex((entry) => entry.id === appointmentId);

  if (existingIndex >= 0) {
    appointments[existingIndex] = appointmentData;
    showToast('Appointment updated successfully.', 'success');
  } else {
    appointments.push(appointmentData);
    showToast('Appointment scheduled successfully.', 'success');
  }

  saveAppointments(appointments);
  renderAppointments();
  renderDashboardAppointments();
  updateDashboardAppointmentCount();
  closeAppointmentModal();
}

function handleBillFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(billForm);
  const errors = validateBillForm(formData);

  clearBillErrors();

  Object.entries(errors).forEach(([fieldName, message]) => {
    const fieldError = document.querySelector(`#bill-form [data-error-for="${fieldName}"]`);
    if (fieldError) fieldError.textContent = message;
  });

  if (Object.keys(errors).length > 0) {
    showToast('Please correct the highlighted fields.', 'error');
    return;
  }

  const bills = getBills();
  const billId = billIdInput.value.trim();
  const lineItems = getCurrentBillLineItems();
  const subtotal = lineItems.reduce((sum, item) => sum + safeNumber(item.quantity) * safeNumber(item.unitPrice), 0);
  const discount = Math.max(0, safeNumber(formData.get('billDiscount'), 0));
  const finalAmount = Math.max(0, subtotal - discount);
  const amountPaid = Math.min(Math.max(0, safeNumber(formData.get('billAmountPaid'), 0)), finalAmount);
  const status = formData.get('billStatus') || 'Pending';

  const billData = {
    id: billId || createBillId(),
    patientId: formData.get('billPatient'),
    appointmentId: formData.get('billAppointment') || '',
    date: formData.get('billDate'),
    description: formData.get('billDescription').trim(),
    lineItems,
    subtotal,
    discount,
    finalAmount,
    amountPaid,
    status: status === 'Paid' ? 'Paid' : status === 'Partially Paid' ? 'Partially Paid' : amountPaid > 0 ? 'Partially Paid' : 'Pending',
    notes: ''
  };

  if (billData.status === 'Paid' && billData.amountPaid < billData.finalAmount) {
    billData.amountPaid = billData.finalAmount;
  }

  const existingIndex = bills.findIndex((entry) => entry.id === billId);

  if (existingIndex >= 0) {
    bills[existingIndex] = { ...bills[existingIndex], ...billData };
    showToast('Bill updated successfully.', 'success');
  } else {
    bills.push(billData);
    showToast('Bill created successfully.', 'success');
  }

  saveBills(bills);
  renderBills();
  updateBillingDashboard();
  updateDashboardRevenue();
  closeBillModal();
}

function handlePaymentFormSubmit(event) {
  event.preventDefault();

  const paymentAmount = safeNumber(paymentAmountInput.value, 0);
  const paymentDate = paymentDateInput.value;
  const notes = paymentNotesInput.value.trim();
  const billId = paymentBillIdInput.value;

  const bill = getBillById(billId);
  if (!bill) {
    showToast('Bill not found.', 'error');
    return;
  }

  if (!paymentAmount || paymentAmount <= 0) {
    showToast('Please enter a valid amount.', 'error');
    return;
  }

  const metrics = calculateBillMetrics(bill);
  const remaining = Math.max(0, metrics.finalAmount - metrics.amountPaid);

  if (paymentAmount > remaining) {
    showToast('Payment cannot exceed the remaining balance.', 'error');
    return;
  }

  const updatedBills = getBills().map((entry) => {
    if (entry.id !== billId) return entry;

    const nextAmountPaid = Math.round((safeNumber(entry.amountPaid, 0) + paymentAmount) * 100) / 100;
    const nextMetrics = calculateBillMetrics({ ...entry, amountPaid: nextAmountPaid });

    return {
      ...entry,
      amountPaid: nextAmountPaid,
      status: nextMetrics.status,
      paymentHistory: Array.isArray(entry.paymentHistory)
        ? [
            ...entry.paymentHistory,
            {
              id: `PAY-${Date.now()}`,
              date: paymentDate || new Date().toISOString().split('T')[0],
              amount: paymentAmount,
              notes: notes || 'Payment recorded',
              createdAt: new Date().toISOString()
            }
          ]
        : [
            {
              id: `PAY-${Date.now()}`,
              date: paymentDate || new Date().toISOString().split('T')[0],
              amount: paymentAmount,
              notes: notes || 'Payment recorded',
              createdAt: new Date().toISOString()
            }
          ]
    };
  });

  saveBills(updatedBills);
  renderBills();
  updateBillingDashboard();
  updateDashboardRevenue();
  closePaymentModal();
  showToast('Payment recorded successfully.', 'success');
}

function confirmDeleteBill(billId) {
  const bill = getBillById(billId);
  if (!bill) {
    showToast('Bill not found.', 'error');
    return;
  }

  const confirmed = window.confirm(`Delete bill ${bill.id}? This cannot be undone.`);
  if (!confirmed) return;

  const bills = getBills().filter((entry) => entry.id !== billId);
  saveBills(bills);
  renderBills();
  updateBillingDashboard();
  updateDashboardRevenue();
  showToast('Bill deleted successfully.', 'success');
}

function renderBills() {
  const bills = getBills();
  const query = billingSearchInput ? billingSearchInput.value.trim().toLowerCase() : '';
  const dateFilter = billingDateFilter ? billingDateFilter.value : '';
  const statusFilter = billingStatusFilter ? billingStatusFilter.value : '';

  const filteredBills = bills.filter((bill) => {
    const patient = getPatientById(bill.patientId);
    const appointment = getAppointmentById(bill.appointmentId);
    const metrics = calculateBillMetrics(bill);
    const searchable = [
      bill.id,
      patient ? patient.fullName : '',
      patient ? patient.id : '',
      bill.description || '',
      appointment ? appointment.id : ''
    ].join(' ').toLowerCase();

    return (
      (!query || searchable.includes(query)) &&
      (!dateFilter || bill.date === dateFilter) &&
      (!statusFilter || (bill.status || metrics.status) === statusFilter)
    );
  });

  billTableBody.innerHTML = filteredBills
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .map((bill) => {
      const patient = getPatientById(bill.patientId);
      const metrics = calculateBillMetrics(bill);
      const status = bill.status || metrics.status;

      return `
        <tr>
          <td>${bill.id}</td>
          <td>${patient ? patient.fullName : 'Unknown patient'}</td>
          <td>${formatDate(bill.date)}</td>
          <td>${formatCurrency(metrics.finalAmount)}</td>
          <td>${formatCurrency(metrics.amountPaid)}</td>
          <td><span class="pill ${getStatusClasses(status)}">${status}</span></td>
          <td>
            <div class="action-cell">
              <button class="action-btn view-btn" type="button" data-bill-action="view" data-id="${bill.id}">View</button>
              <button class="action-btn" type="button" data-bill-action="edit" data-id="${bill.id}">Edit</button>
              <button class="action-btn delete-btn" type="button" data-bill-action="delete" data-id="${bill.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');

  if (emptyBillsState) {
    emptyBillsState.classList.toggle('hidden', filteredBills.length > 0);
  }
}

function handleBillActionClick(event) {
  const button = event.target.closest('[data-bill-action]');
  if (!button) return;

  const action = button.dataset.billAction;
  const billId = button.dataset.id;

  if (action === 'view') {
    renderBillDetails(billId);
    return;
  }

  if (action === 'edit') {
    const bill = getBillById(billId);
    if (bill) openBillModal('edit', bill);
    return;
  }

  if (action === 'delete') {
    confirmDeleteBill(billId);
  }
}

function handleActionClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;

  const action = button.dataset.action;
  const patientId = button.dataset.id;

  if (action === 'view') {
    renderPatientDetails(patientId);
    return;
  }

  if (action === 'edit') {
    const patient = getPatients().find((entry) => entry.id === patientId);
    if (patient) openPatientModal('edit', patient);
    return;
  }

  if (action === 'delete') {
    confirmDelete(patientId);
  }
}

function handleDoctorActionClick(event) {
  const button = event.target.closest('[data-doctor-action]');
  if (!button) return;

  const action = button.dataset.doctorAction;
  const doctorId = button.dataset.id;

  if (action === 'view') {
    renderDoctorDetails(doctorId);
    return;
  }

  if (action === 'edit') {
    const doctor = getDoctors().find((entry) => entry.id === doctorId);
    if (doctor) openDoctorModal('edit', doctor);
    return;
  }

  if (action === 'delete') {
    confirmDoctorDelete(doctorId);
  }
}

function handleAppointmentActionClick(event) {
  const button = event.target.closest('[data-appointment-action]');
  if (!button) return;

  const action = button.dataset.appointmentAction;
  const appointmentId = button.dataset.id;

  if (action === 'view') {
    renderAppointmentDetails(appointmentId);
    return;
  }

  if (action === 'edit') {
    const appointment = getAppointments().find((entry) => entry.id === appointmentId);
    if (appointment) openAppointmentModal('edit', appointment);
    return;
  }

  if (action === 'delete') {
    confirmDeleteAppointment(appointmentId);
  }
}

function confirmDelete(patientId) {
  const patient = getPatients().find((entry) => entry.id === patientId);
  if (!patient) {
    showToast('Patient not found.', 'error');
    return;
  }

  const confirmed = window.confirm(`Delete patient ${patient.fullName} (${patient.id})? This cannot be undone.`);
  if (!confirmed) return;

  const patients = getPatients().filter((entry) => entry.id !== patientId);
  savePatients(patients);
  renderPatients();
  updateDashboardPatientCount();
  showToast('Patient deleted successfully.', 'success');
}

function confirmDoctorDelete(doctorId) {
  const doctor = getDoctors().find((entry) => entry.id === doctorId);
  if (!doctor) {
    showToast('Doctor not found.', 'error');
    return;
  }

  const confirmed = window.confirm(`Delete doctor ${doctor.fullName} (${doctor.id})? This cannot be undone.`);
  if (!confirmed) return;

  const doctors = getDoctors().filter((entry) => entry.id !== doctorId);
  saveDoctors(doctors);
  renderDoctors();
  showToast('Doctor deleted successfully.', 'success');
}

function confirmDeleteAppointment(appointmentId) {
  const appointment = getAppointments().find((entry) => entry.id === appointmentId);
  if (!appointment) {
    showToast('Appointment not found.', 'error');
    return;
  }

  const confirmed = window.confirm(`Delete appointment ${appointment.id}? This cannot be undone.`);
  if (!confirmed) return;

  const appointments = getAppointments().filter((entry) => entry.id !== appointmentId);
  saveAppointments(appointments);
  renderAppointments();
  renderDashboardAppointments();
  updateDashboardAppointmentCount();
  showToast('Appointment deleted successfully.', 'success');
}

function updateAppointmentStatus(appointmentId, nextStatus) {
  const appointments = getAppointments();
  const index = appointments.findIndex((entry) => entry.id === appointmentId);

  if (index === -1) {
    showToast('Appointment not found.', 'error');
    return;
  }

  appointments[index].status = nextStatus;
  saveAppointments(appointments);
  renderAppointments();
  renderDashboardAppointments();
  updateDashboardAppointmentCount();
  showToast(`Appointment marked as ${nextStatus}.`, 'success');
}

function activatePage(pageName) {
  navItems.forEach((button) => {
    const isActive = button.dataset.page === pageName;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-current', isActive ? 'page' : 'false');
  });

  pageSections.forEach((section) => {
    const isActive = section.id === `${pageName}-page`;
    section.classList.toggle('active', isActive);
  });

  if (pageTitle) {
    pageTitle.textContent = titleMap[pageName] || 'Dashboard';
  }
}

navItems.forEach((button) => {
  button.addEventListener('click', () => {
    activatePage(button.dataset.page);
  });
});

if (addPatientButton) addPatientButton.addEventListener('click', () => openPatientModal('add'));
if (patientSearchInput) patientSearchInput.addEventListener('input', renderPatients);
if (patientForm) patientForm.addEventListener('submit', handleFormSubmit);
if (patientsTableBody) patientsTableBody.addEventListener('click', handleActionClick);

if (addDoctorButton) addDoctorButton.addEventListener('click', () => openDoctorModal('add'));
if (doctorSearchInput) doctorSearchInput.addEventListener('input', renderDoctors);
if (doctorForm) doctorForm.addEventListener('submit', handleDoctorFormSubmit);
if (doctorTableBody) doctorTableBody.addEventListener('click', handleDoctorActionClick);

if (addAppointmentButton) addAppointmentButton.addEventListener('click', () => openAppointmentModal('add'));
if (appointmentSearchInput) appointmentSearchInput.addEventListener('input', renderAppointments);
if (appointmentDateFilter) appointmentDateFilter.addEventListener('input', renderAppointments);
if (appointmentStatusFilter) appointmentStatusFilter.addEventListener('change', renderAppointments);
if (appointmentForm) appointmentForm.addEventListener('submit', handleAppointmentFormSubmit);
if (appointmentTableBody) appointmentTableBody.addEventListener('click', handleAppointmentActionClick);

if (addBillButton) addBillButton.addEventListener('click', () => openBillModal('add'));
if (billingSearchInput) billingSearchInput.addEventListener('input', renderBills);
if (billingDateFilter) billingDateFilter.addEventListener('input', renderBills);
if (billingStatusFilter) billingStatusFilter.addEventListener('change', renderBills);
if (billForm) billForm.addEventListener('submit', handleBillFormSubmit);
if (billTableBody) billTableBody.addEventListener('click', handleBillActionClick);
if (paymentForm) paymentForm.addEventListener('submit', handlePaymentFormSubmit);
if (addBillLineItemButton) {
  addBillLineItemButton.addEventListener('click', () => {
    const items = getCurrentBillLineItems();
    renderBillLineItems([...items, { id: `line-${Date.now()}`, description: '', quantity: 1, unitPrice: 0 }]);
  });
}
if (billLineItemsBody) {
  billLineItemsBody.addEventListener('input', handleBillLineItemInput);
  billLineItemsBody.addEventListener('click', handleBillLineItemAction);
}
if (billPatientSelect) {
  billPatientSelect.addEventListener('change', () => {
    populateAppointmentOptions(billPatientSelect.value);
  });
}
if (billDiscountInput) billDiscountInput.addEventListener('input', updateBillFormPreview);
if (billAmountPaidInput) billAmountPaidInput.addEventListener('input', updateBillFormPreview);
if (document.querySelectorAll('[data-close-modal="true"]').length) {
  document.querySelectorAll('[data-close-modal="true"]').forEach((element) => {
    element.addEventListener('click', () => {
      closePatientModal();
      closePatientDetailsModal();
      closeDoctorModal();
      closeDoctorDetailsModal();
      closeAppointmentModal();
      closeAppointmentDetailsModal();
      closeBillModal();
      closePaymentModal();
    });
  });
}
if (document.querySelector('.view-link')) {
  document.querySelector('.view-link').addEventListener('click', () => activatePage('appointments'));
}

document.addEventListener('click', (event) => {
  const paymentTrigger = event.target.closest('[data-bill-pay]');
  if (paymentTrigger) {
    openPaymentModal(paymentTrigger.dataset.billPay);
  }
});

activatePage('dashboard');
updateDashboardPatientCount();
updateDashboardAppointmentCount();
updateDashboardRevenue();
updateBillingDashboard();
renderPatients();
renderDoctors();
renderDashboardAppointments();
renderAppointments();
renderBills();
if (billLineItemsBody) renderBillLineItems([{ id: `line-${Date.now()}`, description: 'Consultation', quantity: 1, unitPrice: 0 }]);
if (billPatientSelect) populateBillPatientOptions();

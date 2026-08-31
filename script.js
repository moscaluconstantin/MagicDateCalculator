const form = document.getElementById('magic-form');
const dobInput = document.getElementById('dob');
const fromInput = document.getElementById('from-date');
const toInput = document.getElementById('to-date');
const errorMessage = document.getElementById('error-message');
const resultSection = document.getElementById('result');
const magicNumberValue = document.getElementById('magic-number-value');
const matchingDatesList = document.getElementById('matching-dates');

function sumDigits(number) {
  return String(number)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

// Magic number = sum of the date's digits, then the sum of that result's digits.
function magicNumberForDate(date) {
  const digits = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  const firstSum = sumDigits(digits);
  return sumDigits(firstSum);
}

function parseDateInput(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  resultSection.hidden = true;
}

function clearError() {
  errorMessage.hidden = true;
  errorMessage.textContent = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearError();

  if (!dobInput.value || !fromInput.value || !toInput.value) {
    showError('Please fill in all three dates.');
    return;
  }

  const dob = parseDateInput(dobInput.value);
  const fromDate = parseDateInput(fromInput.value);
  const toDate = parseDateInput(toInput.value);

  if (fromDate > toDate) {
    showError('The "from date" must be before or equal to the "to date".');
    return;
  }

  const magicNumber = magicNumberForDate(dob);
  magicNumberValue.textContent = magicNumber;

  matchingDatesList.innerHTML = '';
  const matches = [];
  const cursor = new Date(fromDate);

  while (cursor <= toDate) {
    if (magicNumberForDate(cursor) === magicNumber) {
      matches.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  if (matches.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = 'No matching dates found in this range.';
    matchingDatesList.appendChild(li);
  } else {
    matches.forEach((date) => {
      const li = document.createElement('li');
      li.textContent = formatDate(date);
      matchingDatesList.appendChild(li);
    });
  }

  resultSection.hidden = false;
});

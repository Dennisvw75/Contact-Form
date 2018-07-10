// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD4Bwl3qaHhQB57ErHrcLuXq7pfnjMCtEs',
  authDomain: 'contactform-56107.firebaseapp.com',
  databaseURL: 'https://contactform-56107.firebaseio.com',
  projectId: 'contactform-56107',
  storageBucket: 'contactform-56107.appspot.com',
  messagingSenderId: '243932476089'
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';
  // Hide alert after 3seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save the messages to Firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}

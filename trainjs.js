// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed
/* <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script> */
// 1. Initialize Firebase  
var firebaseConfig = {
    apiKey: "AIzaSyAw5HAvjDSKeEMLntzxwxavvIhgYX8yZP4",
    authDomain: "train-times-c4bfa.firebaseapp.com",
    databaseURL: "https://train-times-c4bfa.firebaseio.com",
    projectId: "train-times-c4bfa",
    storageBucket: "train-times-c4bfa.appspot.com",
    messagingSenderId: "569406348541",
    appId: "1:569406348541:web:300cfd9888428f32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTime = moment($("#first-time-input").val().trim(), "HH:mm").format("HH:mm");
    var freq = $("#freq-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      destination: destination,
      firstTime: firstTime,
      freq: freq
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTime);
    console.log(newTrain.freq);
  
    alert("Searching for trains...");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-time-input").val("");
    $("#freq-input").val("");
  });
  
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTime = childSnapshot.val().firstTime;
    var freq = childSnapshot.val().freq;
  
    // Train Info
    console.log(trainName);
    console.log(destination);
    console.log(firstTime);
    console.log(freq);
  
    // // Prettify the first train time
    // var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");
  
    // Calculate the next arrival using hardcore math
    // To calculate the months worked
    var empMonths = moment().diff(moment(empStart, "X"), "months");
    console.log(empMonths);

    var nextArrival = moment().

    var minutesAway = moment().diff(moment(nextArrival, "mm"), "minutes");
  
    // Calculate the total billed rate
    var empBilled = empMonths * empRate;
    console.log(empBilled);
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(empName),
      $("<td>").text(empRole),
      $("<td>").text(empStartPretty),
      $("<td>").text(empMonths),
      $("<td>").text(empRate),
      $("<td>").text(empBilled)
    );
  
    // Append the new row to the table
    $("#employee-table > tbody").append(newRow);
  });
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
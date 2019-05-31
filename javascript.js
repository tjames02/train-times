    // // Initialize Firebase
    // // This is the code we copied and pasted from our app page
    // var config = {
    //     apiKey: "AIzaSyATJWBw2BNRT4gH07mvkjlgJXVCcK6Vfsk",
    //     authDomain: "my-train-afd28.firebaseapp.com",
    //     databaseURL: "https://my-train-afd28.firebaseio.com",
    //     projectId: "my-train-afd28",
    //     storageBucket: "my-train-afd28.appspot.com",
    //     messagingSenderId: "835997566882",
    //     appId: "1:835997566882:web:db736bf485d54a6d"
    //     };
    
    //     firebase.initializeApp(config);
    
    //     // Variables
    //     // ================================================================================
    
    //     // Get a reference to the database service
    //     var database = firebase.database();
    
    //     // Initializing our click count at 0
    //     var clickCounter = 0;
    
    //     // Functions
    //     // ================================================================================
    
    //     // On Click
    //     $("#add-train-btn").on("click", function() {
    
    //       // Add 1 to clickCounter
    //       clickCounter++;
    //       console.log(clickCounter);
    
    //       // **** Store Click Data to Firebase in a JSON property called clickCount *****
    //       // **** Note how we are using the Firebase .set() method ****
    //       // **** .ref() refers to the path you want to save your data to
    //       // **** Since we left .ref() blank, it will save to the root directory
    //       database.ref().set({
    //         clickCount: clickCounter
    //       });
    
    //       // Now! go to https://fir-click-counter-7cdb9.firebaseio.com/ to see the impact to the DB
    //     });
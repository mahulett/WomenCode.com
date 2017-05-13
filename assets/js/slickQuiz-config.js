// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "!!",
        "main":    "<p>Confused about which tech career path to pursue? Find out which might be a good fit with this quiz!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Front End Developer",
        "level2":  "Back End Developer",
        "level3":  "Data Scientist",
        "level4":  "UX Designer",
        "level5":  "Project Manager"
    },
    "questions": [
        { // Question 1
            "q": "When working on a team, I’m most interested in ______",
            "a": [
                {"option": "Front End - Finding fresh solutions to hard problems",      "Awesome!": true},
                {"option": "Back End - Building something new from scratch",     "Awesome!": true},
                {"option": "Data Science - Using facts, figures and logic to get things done",      "Awesome!": true},
                {"option": "UX - People! I am all about trying to understand the needs of users",     "Awesome!": true},
                {"option": "Project Management - Getting the project done efficiently, and on time!",     "Awesome!": true},
            ],
            "Awesome!": "<p><span>Awesome!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 3
            "q": "In which of these places can you purchase a car?",
            "a": [
                {"option": "The Zoo",        "correct": false},
                {"option": "Ebay",           "correct": true},
                {"option": "Grocery Store",  "correct": false},
                {"option": "Used Car Lot",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> You can indeed buy a car on Ebay or in a used car lot.</p>",
            "incorrect": "<p><span>No.</span> You can't buy a car at the zoo or in a grocery store, try Ebay or a used car lot instead.</p>" // no comma here
        },
        { // Question 4
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        { // Question 5
            "q": "Where are you right now? Select ALL that apply.",
            "a": [
                {"option": "Planet Earth",   "correct": true},
                {"option": "Pluto",          "correct": false},
                {"option": "At a computer",  "correct": true},
                {"option": "The Milky Way",  "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        } // no comma here
    ]
};

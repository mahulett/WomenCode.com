// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Tech Career Quiz",
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
            "q": "I have been professionally working for:",
            "a": [
                {"option": "0-5 years",      "correct": true},
                {"option": "5-10 years",     "correct": true},
                {"option": "10+ years",      "correct": true}
            ],
            "correct!": "<p><span>Awesome!</p>",
            "incorrect": "<p><span>Awesome!</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2
            "q": "My prior experience (school or work), has provided me with the following level of technology skills:",
            "a": [
                {"option": "Basic",    "correct": true},
                {"option": "Intermediate",     "correct": true},
                {"option": "Advanced",      "correct": true},
                {"option": "None",   "correct": true}
            ],
            "correct": "<p><span>Holy bananas!</span></p>",
            "incorrect": "<p><span>Holy bananas!</span></p>" // no comma here
        },
        { // Question 3
            "q": "In my job I’m most interested in ______.",
            "a": [
                {"option": "Finding fresh solutions to hard problems",        "correct": true},
                {"option": "Building something new from scratch",           "correct": true},
                {"option": "Using facts, figures and logic to get things done",  "correct": true},
                {"option": "People! I am all about trying to understand the needs of users",   "correct": true},
                {"option": "Getting the project done efficiently, and on time!",   "correct": true}
        ],
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Nice!</span></p>" // no comma here
        },
        { // Question 4
            "q": "If you know it, tell us your Myers Brigg. Myers Brigg is just one way of describing personality, but we think it’s a fun way! Don’t forget, your Myers Brigg can change over the course of your life based on experiences. Neuroplasticity! You can take the test at 16 personalities: https://www.16personalities.com/personality-types",
            "a": [
                {"option": "INTJ, INFP, ENFP",    "correct": true},
                {"option": "ENTP, INFJ, ISTJ, ISTP",     "correct": true},
                {"option": "INTP, ESTP",     "correct": true},
                {"option": "INFP, ISFP, ESFP",     "correct": true},
                {"option": "ENTJ, ENFJ, ISFJ, ESFJ",     "correct": true}
            ],
            "correct": "<p><span>Cool!</span></p>",
            "incorrect": "<p><span>Cool!</span></p>" // no comma here
        },
        { // Question 5
            "q": "My ideal work environment is:",
            "a": [
                {"option": "Working collaboratively on a team in an office",   "correct": true},
                {"option": "Working alone or remotely from home",          "correct": true},
                {"option": "Having the flexibility to work remotely or in a team",  "correct": true}
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Brilliant!</p>" // no comma here
        },
        { // Question 6
            "q": " I find loud work environments:",
            "a": [
                {"option": "Exciting and motivating",   "correct": true},
                {"option": "Distracting and draining",          "correct": true},
                {"option": "It depends on what I am working on",  "correct": true}
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Awesome!</p>"
        },
		{ // Question 7
            "q": "I would prefer to work for:",
            "a": [
                {"option": "A well established corporation",   "correct": true},
                {"option": "A startup",          "correct": true},
                {"option": "A non-profit or educational organization",  "correct": true}
            ],
            "correct": "<p><span>Alrighty!</span></p>",
            "incorrect": "<p><span>Alrighty!</span></p>"
		},
        { // Question 8
            "q": "I like to learn new information and how to complete a task:",
            "a": [
                {"option": "By diving in and working hands on",   "correct": true},
                {"option": "By having someone tell or show me",          "correct": true},
                {"option": "By reading instructions and looking at graphics",  "correct": true}
            ],
            "correct": "<p><span>Nice!</span></p>",
		        "incorrect": "<p><span>Nice!</span></p>"
          },
		{ // Question 9
            "q": " I work best when my supervisor:",
            "a": [
                {"option": "Provides me with constant direction",   "correct": true},
                {"option": "Does not give me constant direction but checks ins from time to time",          "correct": true},
                {"option": "Gives me full autonomy over a task",  "correct": true}
            ],
            "correct": "<p><span>Brilliant!</span></p>",
		        "incorrect": "<p><span>Brilliant!</span></p>"},
        { // Question 10
            "q": "MWhen I am given a new task or a problem to solve:",
            "a": [
                {"option": "I like to draw diagrams and use sketches to find a solution",   "correct": true},
                {"option": "I like to fidget with the content or object to find a solution",          "correct": true},
                {"option": "I like to talk and rationalize my processes out loud to find a solution",  "correct": true}
            ],
            "correct": "<p><span>Wonderful!</span></p>",
            "incorrect": "<p><span>Wonderful!</span></p>" // no comma here
        } //
    ]
};

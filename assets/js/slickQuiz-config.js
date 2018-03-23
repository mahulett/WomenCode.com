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
        "level5":  "Project Manager",
        "paths": {
            "front-end": {
                "title": "Front-end Developer",
                "image": "assets/img/front-end-developer-icon.svg",
                "description": "<p>Based on your answers, we think you should look into Front End Development! If you don’t know what that is, this helpful web resource will tell you! Take it away helpful web resource:</p><p>\"<b>Front-end web development</b>, is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</p><p>The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer.\"</p><p>Credit: <a href=\"https://en.wikipedia.org/wiki/Front-end_web_development\">https://en.wikipedia.org/wiki/Front-end_web_development</a>"
            },
            "back-end": {
                "title": "Back-end Developer",
                "image": "assets/img/back-end-developer-icon.svg",
                "description": "<p>Based on your answers, we think you should look into Back-end Development! If you don’t know what that is, this helpful web resource will tell you! Take it away helpful web resource: </p><p>“The backend usually consists of three parts: a server, an application, and a database. If you book a flight or buy concert tickets, you usually open a website and interact with the frontend. Once you’ve entered that information, the application stores it in a database that was created on a server. For sake of ease, just think about a database as a giant Excel spreadsheet on your computer, but your computer (server) is stored somewhere in Arizona.</p><p>All of that information stays on the server so when you log back into the application to print your tickets, all of the information is still there in your account.</p><p>We call a person that builds all of this technology to work together a backend developer. Backend technologies usually consist of languages like <u>PHP</u>, <u>Ruby</u>, <u>Python</u>, etc. To make them even easier to use they’re usually enhanced by frameworks like Ruby on Rails, Cake PHP, and Code Igniter that all make development faster and easier to collaborate on.” </p><p>Credit: <a href=\"http://blog.teamtreehouse.com/i-dont-speak-your-language-frontend-vs-backend\">http://blog.teamtreehouse.com/i-dont-speak-your-language-frontend-vs-backend</a></p>"
            },
            "data": {
                "title": "Data Scientist",
                "image": "assets/img/data-scientist-icon.svg",
                "description": "<p>Based on your answers, we think you should look into Data Science! If you don&rsquo;t know what that is, this helpful web resource will tell you! Take it away helpful web resource: </p><p><strong>&ldquo;Data science</strong>, also known as <strong>data-driven science</strong>, is an interdisciplinary field about scientific methods, processes and systems to extract <a href=\"https://en.wikipedia.org/wiki/Knowledge\">knowledge</a> or insights from <a href=\"https://en.wikipedia.org/wiki/Data\">data</a> in various forms, either structured or unstructured,<a href=\"https://en.wikipedia.org/wiki/Data_science#cite_note-1\">[1]</a><a href=\"https://en.wikipedia.org/wiki/Data_science#cite_note-2\">[2]</a> similar to <a href=\"https://en.wikipedia.org/wiki/Knowledge_Discovery_in_Databases\">Knowledge Discovery in Databases</a> (KDD).</p><p>Data science is a \"concept to unify statistics, data analysis and their related methods\" in order to \"understand and analyze actual phenomena\" with data.<a href=\"https://en.wikipedia.org/wiki/Data_science#cite_note-Hayashi-3\">[3]</a> It employs techniques and theories drawn from many fields within the broad areas of <a href=\"https://en.wikipedia.org/wiki/Mathematics\">mathematics</a>, <a href=\"https://en.wikipedia.org/wiki/Statistics\">statistics</a>, <a href=\"https://en.wikipedia.org/wiki/Information_science\">information science</a>, and <a href=\"https://en.wikipedia.org/wiki/Computer_science\">computer science</a>, in particular from the subdomains of <a href=\"https://en.wikipedia.org/wiki/Machine_learning\">machine learning</a>, <a href=\"https://en.wikipedia.org/wiki/Classification\">classification</a>, <a href=\"https://en.wikipedia.org/wiki/Cluster_analysis\">cluster analysis</a>, <a href=\"https://en.wikipedia.org/wiki/Data_mining\">data mining</a>, <a href=\"https://en.wikipedia.org/wiki/Database\">databases</a>, and <a href=\"https://en.wikipedia.org/wiki/Data_visualization\">visualization</a>.&rdquo;</p><p>Credit: <a href=\"https://en.wikipedia.org/wiki/Data_science\">https://en.wikipedia.org/wiki/Data_science</a></p>"
            },
            "ux": {
                "title": "UX Designer",
                "image": "assets/img/ux-designer-icon.svg",
                "description": "<p>Based on your answers, we think you should look into UX! If you don&rsquo;t know what that is, this helpful web resource will tell you! Take it away helpful web resource: </p><p><strong>&ldquo;User experience design</strong> (<strong>UX</strong>, <strong>UXD</strong>, <strong>UED</strong> or <strong>XD</strong>) is the process of enhancing user satisfaction with a product by improving the <a href=\"https://en.wikipedia.org/wiki/Usability\">usability</a>, <a href=\"https://en.wikipedia.org/wiki/Accessibility\">accessibility</a>, and pleasure provided in the interaction with the product. <a href=\"https://en.wikipedia.org/wiki/User_experience_design#cite_note-1\">[1]</a> User experience design encompasses traditional <a href=\"https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction\">human&ndash;computer interaction</a> (HCI) design, and extends it by addressing all aspects of a product or service as perceived by users.&rdquo;<a href=\"https://en.wikipedia.org/wiki/User_experience_design#cite_note-2\">[2]</a> Credit: <a href=\"https://en.wikipedia.org/wiki/User_experience_design\">https://en.wikipedia.org/wiki/User_experience_design</a></p>"
            },
            "project-manager": {
                "title": "Project Manager",
                "image": "assets/img/project-manager-icon.svg",
                "description":  "<p>Based on your answers, we think you should look into Project Management! If you don&rsquo;t know what that is, this helpful web resource will tell you! Take it away helpful web resource: </p><p><strong>&ldquo;Project management</strong> is the discipline of initiating, planning, executing, controlling, and closing the <a href=\"https://en.wikipedia.org/wiki/Work_(project_management)\">work</a> of a <a href=\"https://en.wikipedia.org/wiki/Project_team\">team</a> to achieve specific goals and meet specific success criteria. A <a href=\"https://en.wikipedia.org/wiki/Project\">project</a> is a temporary endeavor designed to produce a unique product, service or result with a defined beginning and end (usually time-constrained, and often constrained by funding or <a href=\"https://en.wikipedia.org/wiki/Deliverables\">deliverables</a>) undertaken to meet unique goals and objectives, typically to bring about beneficial change or added value.<a href=\"https://en.wikipedia.org/wiki/Project_management#cite_note-1\">[1]</a><a href=\"https://en.wikipedia.org/wiki/Project_management#cite_note-2\">[2]</a> The temporary nature of projects stands in contrast with <a href=\"https://en.wikipedia.org/wiki/Business_operations\">business as usual (or operations)</a>,<a href=\"https://en.wikipedia.org/wiki/Project_management#cite_note-3\">[3]</a> which are repetitive, permanent, or semi-permanent functional activities to produce products or services. In practice, the <a href=\"https://en.wikipedia.org/wiki/Management\">management</a> of these two systems is often quite different, and as such requires the development of distinct technical skills and management strategies.<a href=\"https://en.wikipedia.org/wiki/Project_management#cite_note-Cattani2011-4\">[4]</a></p><p>The primary challenge of project management is to achieve all of the project goals within the given constraints.<a href=\"https://en.wikipedia.org/wiki/Project_management#cite_note-5\">[5]</a> This information is usually described in a user or project manual, which is created at the beginning of the development process. The primary constraints are <a href=\"https://en.wikipedia.org/wiki/Scope_(project_management)\">scope</a>, time, <a href=\"https://en.wikipedia.org/wiki/Quality_(business)\">quality</a> and <a href=\"https://en.wikipedia.org/wiki/Budget\">budget</a>.<a href=\"https://en.wikipedia.org/wiki/Project_management#cite_note-PMI_10-6\">[6]</a> The secondary &mdash; and more ambitious &mdash; challenge is to <a href=\"https://en.wikipedia.org/wiki/Operations_research\">optimize</a> the <a href=\"https://en.wikipedia.org/wiki/Resource_allocation\">allocation</a> of necessary inputs and integrate them to meet pre-defined objectives.&rdquo;</p><p>Credit: <a href=\"https://en.wikipedia.org/wiki/Project_management\">https://en.wikipedia.org/wiki/Project_management</a></p>"
            }
        }
    },
    "questions": [
        { // Question 1
            "q": "I have been professionally working for:",
            "a": [
                {"option": "0-5 years",      "correct": true, "path": "front-end"},
                {"option": "5-10 years",     "correct": false, "path": "ux"},
                {"option": "10+ years",      "correct": false, "path": "ux"}
            ],
            "correct!": "<p><span>Awesome!</p>",
            "incorrect": "<p><span>Awesome!</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2
            "q": "My prior experience (school or work), has provided me with the following level of technology skills:",
            "a": [
                {"option": "None",   "correct": true, "path": "project-manager"},
                {"option": "Basic",    "correct": false, "path": "ux"},
                {"option": "Intermediate",     "correct": false, "path": "front-end"},
                {"option": "Advanced",      "correct": false, "path": "back-end"}
            ],
            "correct": "<p><span>Holy bananas!</span></p>",
            "incorrect": "<p><span>Holy bananas!</span></p>" // no comma here
        },
        { // Question 3
            "q": "In my job I’m most interested in ______.",
            "a": [
                {"option": "Finding fresh solutions to hard problems",        "correct": true, "path": "back-end"},
                {"option": "Building something new from scratch",           "correct": false, "path": "front-end"},
                {"option": "Using facts, figures and logic to get things done",  "correct": false, "path": "data"},
                {"option": "People! I am all about trying to understand the needs of users",   "correct": false, "path": "ux"},
                {"option": "Getting the project done efficiently, and on time!",   "correct": false, "path": "project-manager"}
        ],
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Nice!</span></p>" // no comma here
        },
        { // Question 4
            "q": "If you know it, tell us your Myers Brigg. Myers Brigg is just one way of describing personality, but we think it’s a fun way! Don’t forget, your Myers Brigg can change over the course of your life based on experiences. Neuroplasticity! You can take the test at 16 personalities: https://www.16personalities.com/personality-types",
            "a": [
                {"option": "INTJ, INFP, ENFP",    "correct": true, "path": "ux"},
                {"option": "ENTP, INFJ, ISTJ, ISTP",     "correct": false, "path": "ux"},
                {"option": "INTP, ESTP",     "correct": false, "path": "ux"},
                {"option": "INFP, ISFP, ESFP",     "correct": false, "path": "ux"},
                {"option": "ENTJ, ENFJ, ISFJ, ESFJ",     "correct": false, "path": "ux"}
            ],
            "correct": "<p><span>Cool!</span></p>",
            "incorrect": "<p><span>Cool!</span></p>" // no comma here
        },
        { // Question 5
            "q": "My ideal work environment is:",
            "a": [
                {"option": "Working collaboratively on a team in an office",   "correct": true, "path": "ux"},
                {"option": "Working alone or remotely from home",          "correct": false, "path": "ux"},
                {"option": "Having the flexibility to work remotely or in a team",  "correct": false, "path": "ux"}
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Brilliant!</p>" // no comma here
        },
        { // Question 6
            "q": "I find loud work environments:",
            "a": [
                {"option": "Exciting and motivating",   "correct": true, "path": "ux"},
                {"option": "Distracting and draining",          "correct": false, "path": "ux"},
                {"option": "It depends on what I am working on",  "correct": false, "path": "ux"}
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Awesome!</p>"
        },
        { // Question 7
            "q": "I would prefer to work for:",
            "a": [
                {"option": "A well established corporation",   "correct": true, "path": "ux"},
                {"option": "A startup",          "correct": false, "path": "ux"},
                {"option": "A non-profit or educational organization",  "correct": false, "path": "ux"}
            ],
            "correct": "<p><span>Alrighty!</span></p>",
            "incorrect": "<p><span>Alrighty!</span></p>"
        },
        { // Question 8
            "q": "I like to learn new information and how to complete a task:",
            "a": [
                {"option": "By diving in and working hands on",   "correct": true, "path": "back-end"},
                {"option": "By having someone tell or show me",          "correct": false, "path": "ux"},
                {"option": "By reading instructions and looking at graphics",  "correct": false, "path": "data"}
            ],
            "correct": "<p><span>Nice!</span></p>",
                "incorrect": "<p><span>Nice!</span></p>"
          },
        { // Question 9
            "q": " I work best when my supervisor:",
            "a": [
                {"option": "Provides me with constant direction",   "correct": true, "path": "ux"},
                {"option": "Does not give me constant direction but checks ins from time to time",          "correct": false, "path": "ux"},
                {"option": "Gives me full autonomy over a task",  "correct": false, "path": "ux"}
            ],
            "correct": "<p><span>Brilliant!</span></p>",
                "incorrect": "<p><span>Brilliant!</span></p>"},
        { // Question 10
            "q": "When I am given a new task or a problem to solve:",
            "a": [
                {"option": "I like to draw diagrams and use sketches to find a solution",   "correct": true, "path": "ux"},
                {"option": "I like to fidget with the content or object to find a solution",          "correct": false, "path": "front-end"},
                {"option": "I like to talk and rationalize my processes out loud to find a solution",  "correct": false, "path": "ux"}
            ],
            "correct": "<p><span>Wonderful!</span></p>",
            "incorrect": "<p><span>Wonderful!</span></p>" // no comma here
        } //
    ]
};

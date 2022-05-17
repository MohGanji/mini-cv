var resume = {
    "name": "Mohammad Ganji",
    "links": [
        {
            "type": "github",
            "text": "",
            "url": "https://github.com/MohGanji"
        },
        {
            "type": "linkedin",
            "text": "",
            "url": "https://www.linkedin.com/in/mohganji/"
        },
        {
            "type": "stackoverflow",
            "text": "",
            "url": "https://stackoverflow.com/users/7025986/mo-ganji"
        },
        {
            "type": "website",
            "text": "",
            "url": "http://ganji.blog"
        },
        {
            "type": "email",
            "text": "mohganji97@gmail.com",
            "url": "mailto:mohganji97@gmail.com",
        },
        {
            "type": "phone",
            "text": "+17789575657",
            "url": "tel:+17789575657"
        },
    ],
    "hobbies": [
        {
            "title": "Blogging",
            "subtitle": "I have a sporadically maintained blog where I share my experiences and thoughts."
        },
        {
            "title": "Books",
            "subtitle": "I like to read non-fictions and listen to fictions. I also enjoy surfing my favorite writer's websites."
        },
        {
            "title": "Personal Coding Projects",
            "subtitle": "Whenever some boring task is bothering me, I ideate a mini project (like mini-cv which I used to create this resume) and work on it on my free time."
        },
        {
            "title": "Outdoors",
            "subtitle": "I hike in summers and ice-skate in winters."
        }
    ],
    "sections": [
        {
            "title": "Work Experience",
            "experiences": [
                {
                    "title": "Yektanet - The largest digital ad company in Iran",
                    "subtitle": "Software Engineer - push notification ads service (Team of 4)",
                    "start": "2019-12-01",
                    "end": "2020-12-01",
                    "location": "IR",
                    "items": [
                        {
                            "body": "Managed product release and launch of CPC push feature, which ended up generating over 30% of the total revenue of push ads service.",
                            "tags": ["product-management", "communication"]
                        },
                        {
                            "body": "Refactored push notification service; Designed and implemented a more maintainable and extensible architecture utilizing OOD and Design Patterns; This allowed us to scale the system from 1M to 100M daily push capacity, producing 20x more revenue.",
                            "tags": ["refactoring", "software-testing", "design-patterns", "software-development"]
                        },
                        {
                            "body": "Developed and maintained 50+ APIs using Django Rest Framework; Improved average response time of admin APIs to around 75%.",
                            "tags": ["python", "django", "git"]
                        },
                        {
                            "body": "Optimized push database(100M+ records, 20+ tables in PostgreSQL) by rewriting complex queries, improving indexing, using caching and in memory optimizations(on Redis) and setting up automated clustering, resulting in 80% average query time reduction.",
                            "tags": ["redis", "databases", "SQL-databases"]
                        },
                        {
                            "body": "Created and maintained a dashboard of 20+ charts for debugging using ELK Stack.",
                            "tags": ["data-visualization", "debugging"]
                        },
                        {
                            "body": "Actively engaged in hiring processes; Conducted interviews for 5 applicants, mentored 3 interns, reviewed 100+ resumes and 100+ coding tasks.",
                            "tags": ["hiring", "code-review", "mentoring"]
                        }
                    ]
                },
                {
                    "title": "Pheebs - Mobile application startup company",
                    "subtitle": "Full Stack Developer - Part-Time",
                    "role": "",
                    "start": "2017-09-01",
                    "end": "2019-12-01",
                    "location": "IR",
                    "items": [
                        {
                            "body": "Worked on server-side development of 2 mobile applications, Chizz(120k+ monthly active users) and Episode(20k+ users) using Node.js, Express.js, and Graphql in teams of 4~5.",
                            "tags": ["teamwork", "node.js", "javascript", "graphql", "software-development", "git"]
                        },
                        {
                            "body": "Developed admin panel, landing page, and web views for Episode and Chizz, using React.js, HTML/CSS, jQuery.",
                            "tags": ["html", "css", "javascript"]
                        },
                        {
                            "body": "Designed and implemented database models & caching(30+ collections) using MongoDB, Mongoose and Redis.",
                            "tags": ["mongodb", "redis", "databases", "noSQL-databases"]
                        },
                        {
                            "body": "Wrote and maintained unit and integration tests for Chizz & Episode using Jest; Achieved 95%+ code coverage.",
                            "tags": ["software-testing", "debugging"]
                        },
                        {
                            "body": "Dockerized and set up deployment automation for Episode using Docker Compose and Nginx on Linux servers.",
                            "tags": ["docker", "bash-scripting", "nginx", "deployment-automation", "linux-servers"]
                        },
                        {
                            "body": "Set up Metabase dashboards for data analysis; Wrote queries for various business KPIs such as ARPU, ARPPU, monthly active users, etc.",
                            "tags": ["data-analysis", "data-visualization"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Education",
            "experiences": [
                {
                    "title": "Simon Fraser University",
                    "subtitle": "Masters - Computer Science",
                    "role": "",
                    "start": "2020-09-01",
                    "end": "2022-09-01",
                    "location": "CA",
                    "items": [
                        {
                            "body": "Submitted a paper as first author titled \"Code Coverage Criteria for Asynchronous Applications\"",
                            "tags": [
                                "research", "software-testing", "debugging", "javascript"
                            ]
                        },
                        {
                            "body": "Developed JScope using typescript and VSCode extension API. JScope is a VSCode extension to measure asynchronous coverage for JavaScript applications",
                            "tags": [
                                "typescript", "javascript", "bash-scripting", "dynamic analysis"
                            ]
                        },
                        {
                            "body": "Designed and conducted a user study to test JScope's usability and effectiveness.",
                            "tags": ["user-study-design", "ux", "communication"]
                        },
                        {
                            "body": "TA for CMPT276: \"Intro to software engineering\" for two semesters. The course materials contained software architecture design, testing, design patterns, and a team project to develop a 2D arcade game using Java.",
                            "tags": ["java", "design-patterns", "debugging", "software-development"]
                        },
                        {
                            "body": "TA for CMPT120: \"Intro to programming\". An introductory course to learn programming using python.",
                            "tags": ["python", "software-development"]
                        }
                    ]
                },
                {
                    "title": "University of Tehran",
                    "subtitle": "Bachelors - Software Engineering",
                    "role": "",
                    "start": "2015-09-01",
                    "end": "2020-05-01",
                    "location": "IR",
                    "items": [
                        {
                            "body": "Implemented a distributed algorithm for \"Real-time verification and evaluation of algorithms efficiency in distributed actor based systems\" as my thesis using Java.",
                            "tags": ["research", "java", "distributed-systems"]
                        },
                        {
                            "body": "TA for \"Design and Analysis of Algorithms\" course for 5 semesters. Designed and graded projects and assignments.",
                            "tags": ["algorithms", "python"]
                        },
                        {
                            "body": "TA for \"Design of programming languages and compilers\" course. This course contained a project with ANTLR(based on Java) to write a parser and then a compiler for a new language.",
                            "tags": ["software-development", "java"]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Projects",
            "experiences": [
                {
                    "title": "mini-cv",
                    "subtitle": "A web application to prune resume based on selected skills.",
                    "role": "",
                    "start": "2022-04-01",
                    "end": "2022-03-01",
                    "location": "CA",
                    "items": [
                        {
                            "body": "Developed a minimal, no-backend resume customizer website purely in html, css, javascript.",
                            "tags": ["javascript", "web-development", "html", "css"]
                        }
                    ]
                },
                {
                    "title": "In-Lab Exam Scheduler Platform",
                    "subtitle": "A web-based platform to automate scheduling in-lab testing at SFU CSIL labs",
                    "role": "",
                    "start": "2021-09-01",
                    "end": "2021-06-01",
                    "location": "CA",
                    "items": [
                        {
                            "body": "Revamped a panel for SFU CSIL lab admins to schedule in-lab testing using Node.js, Nginx and PostgreSQL.",
                            "tags": ["javascript", "web-development", "node.js", "nginx", "html", "css", "SQL-databases", "databases"]
                        }
                    ]
                },
                {
                    "title": "SchemaIran Telegram Bot",
                    "subtitle": "Telegram bot for Schemairan Clinic that conducts Young Schema Questionnaire.",
                    "role": "",
                    "start": "2017-05-01",
                    "end": "2017-03-01",
                    "location": "IR",
                    "items": [
                        {
                            "body": "Developed a telegram bot using Node.js and MongoDB. Collected 5000+ test results.",
                            "tags": ["javascript", "mongodb", "node.js", "noSQL-databases", "databases"]
                        }
                    ]
                }
            ]
        }
    ]
}
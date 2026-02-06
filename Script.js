const footballers = [
      {
        name: "Erling Haaland",
        image: "https://images.teamtalk.com/content/uploads/2022/10/02160859/erling-haaland-man-city-2022.jpg",
        position: "Forward",
        bio: "Norwegian striking sensation known for his immense speed, strength, and an insane goal-scoring record, defining a new generation of centre-forwards.",
        achievements: ["2x Premier League Golden Boot", "UEFA Champions League Winner", "Premier League Champion"],
        traits: { power: 3, flair: 1, leadership: 2, teamwork: 2 }
      },
      {
        name: "Lionel Messi",
        image: "https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg",
        position: "Forward",
        bio: "The Argentine magician, widely regarded as the greatest player of all time, known for his dribbling, vision, and prolific goal-scoring from the right wing.",
        achievements: ["8x Ballon d'Or Winner", "FIFA World Cup Champion (2022)", "4x UEFA Champions League Winner"],
        traits: { power: 1, flair: 3, leadership: 2, teamwork: 3 }
      },
      {
        name: "Kylian Mbappé",
        image: "https://cdn.antaranews.com/cache/1200x800/2022/03/13/PSG-17601.jpg.webp",
        position: "Forward",
        bio: "A French speedster and generational talent known for his blistering pace and clinical finishing, leading the next era of global football.",
        achievements: ["FIFA World Cup Champion (2018)", "6x Ligue 1 Champion", "World Cup Final Hat-trick (2022)"],
        traits: { power: 2, flair: 2, leadership: 1, teamwork: 2 }
      },
      {
        name: "Cristiano Ronaldo",
        image: "https://gymnation.com/media/bgjgtc1d/cr7-2008.jpg",
        position: "Forward",
        bio: "The Portuguese legend, an iconic global superstar known for his unmatched athleticism, aerial ability, and relentless pursuit of goals and records.",
        achievements: ["5x Ballon d'Or Winner", "5x UEFA Champions League Winner", "European Championship Winner (2016)"],
        traits: { power: 3, flair: 1, leadership: 3, teamwork: 1 }
      },
      {
        name: "Pelé",
        image: "https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        position: "Forward",
        bio: "The Brazilian 'King,' a global icon who remains the only player in history to win three FIFA World Cups, revolutionizing the sport with his flair and athleticism.",
        achievements: ["3x FIFA World Cup Winner", "FIFA Player of the Century", "Guinness World Record for career goals"],
        traits: { power: 2, flair: 3, leadership: 2, teamwork: 3 }
      },
      {
        name: "Diego Maradona",
        image: "https://i.pinimg.com/564x/f2/9b/ae/f29baed184ebf3c6fa25d82fc259d873.jpg",
        position: "Attacking Midfielder",
        bio: "The unforgettable Argentine creative genius, famous for the 'Hand of God' goal and single-handedly leading Argentina to World Cup glory in 1986.",
        achievements: ["FIFA World Cup Champion (1986)", "2x Serie A Champion", "FIFA Goal of the Century"],
        traits: { power: 1, flair: 3, leadership: 3, teamwork: 2 }
      },
      {
        name: "Paolo Maldini",
        image: "https://w0.peakpx.com/wallpaper/809/437/HD-wallpaper-paolo-maldini-milan.jpg",
        position: "Defender",
        bio: "The AC Milan legend, regarded as one of the greatest and most versatile defenders ever. He epitomized loyalty, spending his entire 25-year career with the club.",
        achievements: ["5x UEFA Champions League Winner", "7x Serie A Champion", "AC Milan All-Time Appearance Leader"],
        traits: { power: 1, flair: 1, leadership: 3, teamwork: 3 }
      },
      {
        name: "Zinedine Zidane",
        image: "https://assets.realmadrid.com/is/image/realmadrid/1330190795142?$Mobile$&fit=wrap",
        position: "Midfielder",
        bio: "French midfield genius, famous for his sublime control and elegance. He scored twice in the 1998 World Cup final and the iconic 2002 Champions League final winner.",
        achievements: ["FIFA World Cup Champion (1998)", "Ballon d'Or Winner (1998)", "UEFA Champions League Winner"],
        traits: { power: 1, flair: 3, leadership: 2, teamwork: 2 }
      },
      {
        name: "Karim Benzema",
        image: "https://www.shutterstock.com/editorial/image-editorial/MdTdA513N1zaA6y8MDkxMzA=/karim-benzema-real-madrid-celebrates-scoring-opening-440nw-10484600u.jpg",
        position: "Forward",
        bio: "The intelligent and lethal French striker who blossomed into a 2022 Ballon d'Or winner, known for his link-up play and clinical finishing for Real Madrid.",
        achievements: ["Ballon d'Or Winner (2022)", "5x UEFA Champions League Winner", "4x Ligue 1 Champion"],
        traits: { power: 2, flair: 2, leadership: 2, teamwork: 3 }
      },
      {
        name: "Wayne Rooney",
        image: "https://a.espncdn.com/photo/2020/0304/r674744_1296x1296_1-1.jpg",
        position: "Forward",
        bio: "Manchester United's all-time top scorer, a fierce competitor, and a powerful forward known for his incredible work rate and versatility across the attack.",
        achievements: ["Manchester United All-Time Top Scorer", "5x Premier League Winner", "UEFA Champions League Winner (2008)"],
        traits: { power: 3, flair: 1, leadership: 2, teamwork: 2 }
      },
      {
        name: "Ronaldinho",
        image: "https://64.media.tumblr.com/df916c4a2d45fecbc9a9897b390b9abb/tumblr_oyyh59qk7A1wnzah8o3_1280.jpg",
        position: "Attacking Midfielder",
        bio: "The Brazilian wizard, loved globally for his flair, mesmerizing tricks, and infectious smile. He defined an era of joyous, free-flowing football.",
        achievements: ["Ballon d'Or Winner (2005)", "FIFA World Cup Champion (2002)", "UEFA Champions League Winner"],
        traits: { power: 1, flair: 3, leadership: 1, teamwork: 2 }
      },
      {
        name: "David Beckham",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/David_Beckham_2019.jpg",
        position: "Midfielder",
        bio: "England star and a global fashion icon, famous for his lethal free-kicks, pinpoint crossing, and exceptional range of passing from the right flank.",
        achievements: ["6x Premier League Winner", "UEFA Champions League Winner (1999)", "First Englishman to win titles in four countries"],
        traits: { power: 1, flair: 2, leadership: 2, teamwork: 3 }
      },
      {
        name: "Neymar Jr.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Neymar_2018.jpg",
        position: "Forward",
        bio: "Brazilian dribbler known for his incredible flair, mesmerizing skills, and trickery. One of the most gifted and entertaining players of his generation.",
        achievements: ["Copa Libertadores Winner", "UEFA Champions League Winner", "Olympic Gold Medalist"],
        traits: { power: 1, flair: 3, leadership: 1, teamwork: 2 }
      },
      {
        name: "Andrés Iniesta",
        image: "https://i.pinimg.com/1200x/0b/f4/8d/0bf48d5b0ea8ba1a7bbeead314a82779.jpg",
        position: "Midfielder",
        bio: "Spain’s midfield brain, a master of control and passing. He scored the iconic 2010 World Cup winning goal and was a central figure in Barcelona's greatest era.",
        achievements: ["FIFA World Cup Champion (2010)", "4x UEFA Champions League Winner", "9x La Liga Champion"],
        traits: { power: 1, flair: 2, leadership: 2, teamwork: 3 }
      },
      {
        name: "Xavi Hernández",
        image: "https://www.fcbarcelona.com/photo-resources/2019/03/12/62f67c7f-28fa-49d4-aa5f-9a0502c46c41/znYiAFfh.jpg?width=1200&height=750",
        position: "Midfielder",
        bio: "Barcelona and Spain legend, the 'puppet master,' known for his masterful passing, vision, and tactical intelligence, dictating the tempo of the game.",
        achievements: ["FIFA World Cup Champion (2010)", "4x UEFA Champions League Winner", "8x La Liga Champion"],
        traits: { power: 1, flair: 2, leadership: 2, teamwork: 3 }
      },
      {
        name: "Thierry Henry",
        image: "https://assets.goal.com/images/v3/bltd6c4bc35e2449015/a5c71e7f5a974c31cf493e5a1b13a5d796bad56f.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        position: "Forward",
        bio: "Arsenal legend and Premier League icon, known for his blistering pace, silky finishing, and tendency to score from cutting in off the left wing.",
        achievements: ["FIFA World Cup Champion (1998)", "2x Premier League Winner", "UEFA Champions League Winner"],
        traits: { power: 2, flair: 2, leadership: 1, teamwork: 2 }
      },
      {
        name: "Roberto Carlos",
        image: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/M4G6JQ2SMFM7VK2V6Z5RRR3RYI.jpg",
        position: "Defender",
        bio: "Brazilian left-back famous for his incredible speed, stamina, and thunderbolt free-kicks, particularly his legendary 'impossible' goal against France.",
        achievements: ["FIFA World Cup Champion (2002)", "3x UEFA Champions League Winner", "4x La Liga Champion"],
        traits: { power: 3, flair: 2, leadership: 2, teamwork: 2 }
      },
      {
        name: "Luka Modrić",
        image: "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/0c25/live/6f1543a0-3719-11f0-96c3-cf669419a2b0.jpg",
        position: "Midfielder",
        bio: "The Croatian playmaker, a 2018 Ballon d’Or winner, known for his immaculate passing, vision, and tireless energy in the center of the pitch.",
        achievements: ["Ballon d’Or Winner (2018)", "5x UEFA Champions League Winner", "Captain of Croatia's Golden Generation"],
        traits: { power: 1, flair: 2, leadership: 3, teamwork: 3 }
      },
      {
        name: "Mohamed Salah",
        image: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/11494969/GettyImages_944396220.jpg?quality=90&strip=all&crop=0%2C4.2124542124542%2C100%2C91.575091575092&w=2400",
        position: "Forward",
        bio: "The 'Egyptian King' of Liverpool, known for his blistering pace, prolific goal-scoring, and exceptional dribbling from the right wing.",
        achievements: ["3x Premier League Golden Boot", "UEFA Champions League Winner", "Premier League Champion"],
        traits: { power: 2, flair: 2, leadership: 2, teamwork: 2 }
      },
      {
        name: "Didier Drogba",
        image: "https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/The%205th%20Stand%20app%20editorial/Drogba_120.png",
        position: "Forward",
        bio: "Chelsea’s big-game striker and Ivorian legend, loved for his physical strength, leadership, and clutch goals in major finals.",
        achievements: ["4x Premier League Winner", "UEFA Champions League Winner (2012)", "2x Premier League Golden Boot"],
        traits: { power: 3, flair: 1, leadership: 3, teamwork: 2 }
      }
    ];

    const quizQuestions = [
      {
        question: "What’s your playing style on the field?",
        options: [
          { text: "Powerhouse: I dominate with strength and speed", traits: { power: 3, flair: 0, leadership: 0, teamwork: 0 } },
          { text: "Flair: I dazzle with skills and creativity", traits: { power: 0, flair: 3, leadership: 0, teamwork: 0 } },
          { text: "Balanced: I mix power and finesse", traits: { power: 2, flair: 2, leadership: 0, teamwork: 0 } },
          { text: "Strategic: I control the game with smart plays", traits: { power: 0, flair: 2, leadership: 1, teamwork: 1 } }
        ]
      },
      {
        question: "What role do you take in a team?",
        options: [
          { text: "Leader: I inspire and guide the team", traits: { power: 0, flair: 0, leadership: 3, teamwork: 1 } },
          { text: "Team Player: I work seamlessly with others", traits: { power: 0, flair: 0, leadership: 1, teamwork: 3 } },
          { text: "Lone Star: I shine on my own", traits: { power: 1, flair: 1, leadership: 2, teamwork: 0 } },
          { text: "Versatile: I adapt to any role", traits: { power: 1, flair: 1, leadership: 1, teamwork: 1 } }
        ]
      },
      {
        question: "What’s your approach to challenges?",
        options: [
          { text: "Smash through with raw power", traits: { power: 3, flair: 0, leadership: 1, teamwork: 0 } },
          { text: "Outsmart with creativity and finesse", traits: { power: 0, flair: 3, leadership: 0, teamwork: 1 } },
          { text: "Lead and rally others to overcome", traits: { power: 0, flair: 0, leadership: 3, teamwork: 2 } },
          { text: "Stay calm and find a balanced solution", traits: { power: 1, flair: 1, leadership: 1, teamwork: 1 } }
        ]
      },
      {
        question: "Last minute, team needs a goal. You...",
        options: [
           { text: "Demand the ball and shoot from distance", traits: { power: 2, flair: 0, leadership: 2, teamwork: 0 } },
           { text: "Try a solo run through the defense", traits: { power: 0, flair: 3, leadership: 0, teamwork: 0 } },
           { text: "Organize the attack for the best pass", traits: { power: 0, flair: 0, leadership: 2, teamwork: 2 } },
           { text: "Wait in the box for the perfect cross", traits: { power: 2, flair: 0, leadership: 0, teamwork: 1 } }
        ]
      },
      {
        question: "What is your training focus?",
        options: [
           { text: "Gym and physical conditioning", traits: { power: 3, flair: 0, leadership: 0, teamwork: 1 } },
           { text: "Skill moves and dribbling mastery", traits: { power: 0, flair: 3, leadership: 0, teamwork: 0 } },
           { text: "Tactical analysis and positioning", traits: { power: 0, flair: 0, leadership: 2, teamwork: 2 } },
           { text: "Passing drills and team chemistry", traits: { power: 0, flair: 0, leadership: 1, teamwork: 3 } }
        ]
      },
      {
         question: "How do you celebrate a goal?",
         options: [
            { text: "A signature acrobatic move", traits: { power: 1, flair: 3, leadership: 0, teamwork: 0 } },
            { text: "Running to the fans and screaming", traits: { power: 2, flair: 1, leadership: 1, teamwork: 0 } },
            { text: "Pointing to the assist provider", traits: { power: 0, flair: 0, leadership: 1, teamwork: 3 } },
            { text: "Calm, cool, handled business", traits: { power: 0, flair: 1, leadership: 2, teamwork: 1 } }
         ]
      }
    ];

    let isProgramStopped = false;
    let currentFootballer = null;
    let currentQuestionIndex = 0;
    let userTraits = { power: 0, flair: 0, leadership: 0, teamwork: 0 };
    let progressInterval = null;
    let timeouts = [];
    
    // Game & Timer Variables
    let questionTimer;
    const QUESTION_TIME = 10;
    let timeLeft;
    let minigameInterval;
    let keeperDirection = 1;
    let keeperPosition = 50;
    let gameActive = false;
    let shotTaken = false;
    let penaltyScore = 0;
    let currentGameMode = '';
    let currentUserName = "Player";

    // Keepie Uppie Variables
    let keepieScore = 0;
    let keepieBest = 0;
    let keepieBallY = 50; // %
    let keepieBallVelocity = 0;
    let keepieGravity = 0.5; // Reduced gravity for easier testing
    let keepieGameActive = false;
    let keepieAnimation;

    // --- MENU LOGIC ---

    function showMenu() {
        // Reset Everything
        resetProgram(true); // Silent reset
        
        // Hide Games
        document.getElementById("quizApp").style.display = "none";
        document.getElementById("minigameContainer").style.display = "none";
        document.getElementById("keepieContainer").style.display = "none";
        document.getElementById("gameControls").style.display = "none";
        
        // Show Input & Menu
        document.querySelector(".input-container").style.display = "block";
        document.getElementById("mainMenu").style.display = "flex";
        
        // Ensure buttons are enabled
        document.querySelectorAll("button").forEach(button => button.disabled = false);
    }

    function startGameMode(mode) {
        const userNameInput = document.getElementById("userName").value.trim();
        if (!userNameInput) {
            alert("Please enter your name first!");
            return;
        }
        currentUserName = userNameInput;

        currentGameMode = mode;
        document.querySelector(".input-container").style.display = "none";
        document.getElementById("mainMenu").style.display = "none";
        document.getElementById("gameControls").style.display = "flex";

        if (mode === 'quiz') {
            document.getElementById("quizApp").style.display = "block";
            startQuiz();
        } else if (mode === 'penalty') {
            document.getElementById("minigameContainer").classList.add("show");
            document.getElementById("minigameContainer").style.display = "block";
            startPenaltyGame();
        } else if (mode === 'keepie') {
            document.getElementById("keepieContainer").style.display = "block";
            startKeepieGame();
        }
    }

    function resetCurrentGame() {
        if(currentGameMode === 'quiz') {
            resetProgram(true); // Silent reset
            startQuiz();
        } else if(currentGameMode === 'penalty') {
            document.getElementById("minigameContainer").classList.remove("show"); // fix hide
            setTimeout(startPenaltyGame, 100); // slight delay
        } else if(currentGameMode === 'keepie') {
            startKeepieGame();
        }
    }

    // --- QUIZ LOGIC ---

    function startQuiz() {
      // ... (Existing startQuiz logic, but ensure containers are shown correctly)
      isProgramStopped = false;
      currentFootballer = null;
      currentQuestionIndex = 0;
      userTraits = { power: 0, flair: 0, leadership: 0, teamwork: 0 };
      document.getElementById("quizContainer").classList.add("show");
      document.getElementById("quizContainer").style.display = "block";
      showQuestion();
    }

    function showQuestion() {
      const questionContainer = document.getElementById("questionText");
      const optionsContainer = document.getElementById("optionsContainer");
      const currentQuestion = quizQuestions[currentQuestionIndex];

      // Start/Reset Timer
      startTimer();
      
      questionContainer.innerHTML = `<h3>${currentQuestion.question}</h3>`;
      optionsContainer.innerHTML = "";

      currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("div");
        button.classList.add("quiz-option");
        button.textContent = option.text;
        button.onclick = () => selectOption(option.traits);
        optionsContainer.appendChild(button);
      });
    }

    function startTimer() {
        if (questionTimer) clearInterval(questionTimer);
        timeLeft = QUESTION_TIME;
        updateTimerUI();
        
        questionTimer = setInterval(() => {
            timeLeft--;
            updateTimerUI();
            if (timeLeft <= 0) {
                clearInterval(questionTimer);
                // Time's up! Pick random trait to continue
                const currentFromTimer = quizQuestions[currentQuestionIndex];
                const randomOptionIndex = Math.floor(Math.random() * currentFromTimer.options.length); 
                const randomTrait = currentFromTimer.options[randomOptionIndex].traits;
                selectOption(randomTrait);
            }
        }, 1000);
    }

    function updateTimerUI() {
        const bar = document.getElementById("timerBar");
        if(bar) {
            bar.style.width = `${(timeLeft / QUESTION_TIME) * 100}%`;
            // Color change
            if(timeLeft <= 3) bar.style.backgroundColor = "#ff6b6b"; 
            else bar.style.backgroundColor = "#28a745";
        }
    }

    function selectOption(traits) {
      if (questionTimer) clearInterval(questionTimer); 
      
      for (let trait in traits) {
        userTraits[trait] += traits[trait];
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
      } else {
        showResult(); // Direct to result in Quiz Mode
      }
    }

    // --- PENALTY SHOOTOUT LOGIC ---

    let keeperSpeed = 1.5;
    let winStreak = 0;

    function startPenaltyGame() {
       gameActive = true;
       shotTaken = false;
       keeperPosition = 50;
       penaltyScore = 0;
       winStreak = 0;
       keeperSpeed = 1.5;
       
       document.getElementById("penaltyScore").textContent = penaltyScore;
       // Update Scoreboard Label
       const scoreBoard = document.getElementById("scoreBoard");
       if(scoreBoard) scoreBoard.innerHTML = `${currentUserName}'s Score: <span id="penaltyScore">0</span>`;

       document.getElementById("gameMessage").textContent = `Ready, ${currentUserName}? Tap to Shoot!`;
       document.getElementById("gameMessage").style.color = "var(--secondary-color)";
       
       // Reset Ball
       const ball = document.getElementById("ball");
        if(ball) {
            ball.classList.remove("ball-moving");
            ball.style.top = "";
            ball.style.bottom = "30px";
            ball.style.left = "50%";
            ball.style.transform = "translateX(-50%)";
        }
       
       // Start Game Loop
       if(minigameInterval) cancelAnimationFrame(minigameInterval);
       activeGameLoop();
    }
    
    function activeGameLoop() {
        if(!gameActive) return;
        
        // Move Keeper
        keeperPosition += keeperDirection * keeperSpeed; 
        
        // Erratic movement at higher scores
        if (penaltyScore >= 5 && Math.random() < 0.02) keeperDirection *= -1;
        
        // Bounds
        if (keeperPosition > 90 || keeperPosition < 10) keeperDirection *= -1;
        
        // Clamp
        keeperPosition = Math.max(10, Math.min(90, keeperPosition));

        const keeper = document.getElementById("goalkeeper");
        if(keeper) keeper.style.left = keeperPosition + "%";
        
        minigameInterval = requestAnimationFrame(activeGameLoop);
    }

// Helper for visual effects
    function showFloatingText(container, x, y, text, color) {
        const floatEl = document.createElement("div");
        floatEl.classList.add("floating-text");
        floatEl.textContent = text;
        floatEl.style.color = color || "#fff";
        floatEl.style.left = x;
        floatEl.style.top = y; 
        
        container.appendChild(floatEl);
        setTimeout(() => floatEl.remove(), 1000);
    }

    // Improved shoot with aiming
    function shoot(event) {
        if (!gameActive || shotTaken) return;
        shotTaken = true;
        
        const ball = document.getElementById("ball");
        const gameArea = document.getElementById("gameArea");
        
        // Calculate Aim Target (0-100%)
        let targetX = 50; // Default center for keyboard
        
        if (event && (event.type === 'click' || event.type === 'touchstart')) {
            const rect = gameArea.getBoundingClientRect();
            // Handle touch or mouse
            const clientX = (event.touches && event.touches.length > 0) ? event.touches[0].clientX : event.clientX;
            
            // If valid clientX found
            if (clientX) {
                targetX = ((clientX - rect.left) / rect.width) * 100;
                // Clamp to stay within reasonable bounds
                targetX = Math.max(10, Math.min(90, targetX));
            }
        } else {
            // Randomize slightly for keyboard to prevent perfect center abuse
            targetX = 45 + Math.random() * 10;
        }

        ball.classList.add("ball-moving");
        
        // Animate Shot
        ball.style.left = targetX + "%";
        ball.style.bottom = "80%"; // Move up into goal
        // Add spin and scale
        const spin = (Math.random() < 0.5 ? -1 : 1) * 720;
        ball.style.transform = `translateX(-50%) scale(0.6) rotate(${spin}deg)`; 
        
        // Determine result after animation
        setTimeout(() => {
            // Hit detection: Ball Width vs Keeper Width
            // Keeper is roughly 10% width, Ball is small.
            // We check distance between centers.
            const dist = Math.abs(keeperPosition - targetX);
            const saved = dist < 8; // Hit box range
            
            if (saved) {
                document.getElementById("gameMessage").innerHTML = "<span style='color:#ff6b6b; font-weight:bold'>SAVED!</span>";
                showFloatingText(document.getElementById("gameArea"), targetX + "%", "40%", "SAVED!", "#ff6b6b");
                gameActive = false; 
                winStreak = 0;
                cancelAnimationFrame(minigameInterval);
            } else {
                penaltyScore++;
                winStreak++;
                document.getElementById("penaltyScore").textContent = penaltyScore;
                
                let msg = "GOAL!";
                let color = "var(--neon-green)";
                
                if (winStreak > 2) {
                    msg = "ON FIRE!!";
                    color = "var(--neon-pink)";
                }
                
                document.getElementById("gameMessage").innerHTML = `<span style='color:${color}; font-weight:bold'>${msg}</span>`;
                showFloatingText(document.getElementById("gameArea"), targetX + "%", "20%", msg, color);
                
                setTimeout(() => {
                    ball.classList.remove("ball-moving");
                    ball.style.top = "";
                    ball.style.bottom = "30px";
                    ball.style.left = "50%";
                    ball.style.transform = "translateX(-50%) rotate(0deg)";
                    shotTaken = false;
                    document.getElementById("gameMessage").textContent = "Shoot again!";
                    document.getElementById("gameMessage").style.color = "var(--text-secondary)";
                    
                     // Increase Difficulty
                     if (penaltyScore % 3 === 0) keeperSpeed += 0.3;
                     
                }, 1000);
            }
        }, 600);
    }

    // --- KEEPIE UPPIE LOGIC ---

    function startKeepieGame() {
        keepieScore = 0;
        document.getElementById("keepieScore").textContent = 0;
        
        const sb = document.getElementById("keepieScoreBoard");
        if(sb) sb.innerHTML = `${currentUserName}'s Score: <span id="keepieScore">0</span> | Best: <span id="keepieBest">${keepieBest}</span>`;

        document.getElementById("keepieMessage").textContent = `Tap anywhere to kick! Hit the Green Zone for x2 Points!`;
        
        keepieBallY = 50;
        keepieBallVelocity = 0;
        keepieGameActive = false; // Waits for first tap
        
        const ball = document.getElementById("keepieBall");
        if (ball) {
            // Force Reset
            ball.style.display = 'block'; 
            ball.style.bottom = "50%";
            ball.style.left = "50%";
            ball.style.transform = "translate(-50%, 0) rotate(0deg) scale(1)";
            ball.style.opacity = "1";
            ball.style.visibility = "visible";
            ball.classList.remove('ball-squash');
        }

        if (keepieAnimation) cancelAnimationFrame(keepieAnimation);
        keepieLoop();
    }

    function keepieTap(event) {
        if (!keepieGameActive && keepieScore === 0) {
            keepieGameActive = true;
            document.getElementById("keepieMessage").textContent = "";
        }
        
        if (!keepieGameActive && keepieBallY <= 0) {
             // Restart request handled by game loop reset usually, but if clicked after death
             resetCurrentGame();
             return;
        }
        
        if (!keepieGameActive) return; 

        keepieBallVelocity = 12; 
        
        // Target Zone Logic (Target is at 20%)
        let points = 1;
        let floatsText = "+1";
        let floatColor = "var(--neon-green)";
        
        // Perfect zone: 15% to 25%
        if(keepieBallY >= 15 && keepieBallY <= 25) {
            points = 2;
            floatsText = "PERFECT! +2";
            floatColor = "var(--neon-cyan)";
            triggerGlow(document.getElementById("keepieTarget"));
        }

        keepieScore += points;
        document.getElementById("keepieScore").textContent = keepieScore;
        
        const ball = document.getElementById("keepieBall");
        
        // Squash Effect
        ball.style.transform = "translate(-50%, 0) scale(1.3, 0.7)"; 
        setTimeout(() => {
             ball.style.transform = `translate(-50%, 0) scale(1) rotate(${Math.random() * 360}deg)`;
        }, 100);

        // Floating Text
        showFloatingText(document.getElementById("keepieArea"), "50%", (90 - keepieBallY) + "%", floatsText, floatColor);
    }

    function triggerGlow(element) {
        if(!element) return;
        element.style.filter = "drop-shadow(0 0 15px var(--neon-cyan)) brightness(1.5)";
        setTimeout(() => {
             element.style.filter = "blur(5px)";
        }, 300);
    }

    function keepieLoop() {
        if (keepieGameActive) {
            keepieBallY += keepieBallVelocity;
            keepieBallVelocity -= keepieGravity;

            const ball = document.getElementById("keepieBall");
            
            // Floor collision (Game Over)
            if (keepieBallY < 0) {
                keepieBallY = 0;
                keepieGameActive = false;
                document.getElementById("keepieMessage").textContent = `Dropped! Game Over, ${currentUserName}.`;
                if (keepieScore > keepieBest) {
                    keepieBest = keepieScore;
                    document.getElementById("keepieBest").textContent = keepieBest;
                }
            }
            
            // Ceiling collision (Just bounce)
            if (keepieBallY > 90) {
                 keepieBallVelocity = -5;
            }

            ball.style.bottom = keepieBallY + "%";
        }
        keepieAnimation = requestAnimationFrame(keepieLoop);
    }
    
    // Wire up events
    document.addEventListener('keydown', (e) => {
        const gameContainer = document.getElementById("minigameContainer");
        if (e.code === 'Space' && gameContainer && gameContainer.classList.contains("show")) {
             e.preventDefault(); 
             shoot();
        }
    });
    
    // Add Click listener to game area specifically once on load usually, 
    // but here we can rely on onclick in HTML or delegate.
    // Let's add it safely at end of file or init. 
    // For now, let's just make sure the element exists.
    // (Will add init listener at bottom of file or inside startMinigame if needed, 
    // but better to just have global listener or onclick attribute).
    
    function showResult() {
      document.getElementById("quizContainer").classList.remove("show");
      document.getElementById("progressContainer").classList.add("show");

      let progress = 0;
      progressInterval = setInterval(() => {
        if (isProgramStopped) {
          clearInterval(progressInterval);
          progressInterval = null;
          return;
        }
        progress += 10;
        if (progress >= 100) {
          clearInterval(progressInterval);
          progressInterval = null;
          progress = 100;
          document.getElementById("progressText").textContent = `Match Found for ${currentUserName}!`;
          if (!isProgramStopped) {
            const match = findBestMatch();
            if (match) displayFootballer();
            else {
              document.getElementById("progressContainer").classList.remove("show");
              document.getElementById("resultContainer").classList.add("show");
              document.getElementById("playerName").textContent = "No Match Found";
              document.getElementById("playerName").classList.remove("hidden-initial");
              document.getElementById("playerName").classList.add("show");
              document.getElementById("playerBio").textContent = `Sorry ${currentUserName}, we couldn't find a footballer that matches your traits. Try again!`;
              document.getElementById("playerBio").classList.remove("hidden-initial");
              document.getElementById("playerBio").classList.add("show");
              isProgramStopped = true;
              document.querySelectorAll('button:not([onclick="resetProgram()"]):not(.theme-toggle)').forEach(button => button.disabled = true);
            }
          }
        }
        document.getElementById("progressBar").style.width = `${progress}%`;
        document.getElementById("progressText").textContent = `Analyzing ${currentUserName}'s stats... ${Math.floor(progress)}%`;
      }, 150);

      timeouts.push(setTimeout(() => {
        if (progress < 100 && !isProgramStopped) {
          clearInterval(progressInterval);
          progressInterval = null;
          document.getElementById("progressBar").style.width = "100%";
          document.getElementById("progressText").textContent = `Match Found for ${currentUserName}!`;
          const match = findBestMatch();
          if (match) displayFootballer();
          else {
            document.getElementById("progressContainer").classList.remove("show");
            document.getElementById("resultContainer").classList.add("show");
            document.getElementById("playerName").textContent = "No Match Found";
            document.getElementById("playerName").classList.remove("hidden-initial");
            document.getElementById("playerName").classList.add("show");
            document.getElementById("playerBio").textContent = `Sorry ${currentUserName}, we couldn't find a footballer that matches your traits. Try again!`;
            document.getElementById("playerBio").classList.remove("hidden-initial");
            document.getElementById("playerBio").classList.add("show");
            isProgramStopped = true;
            document.querySelectorAll('button:not([onclick="resetProgram()"]):not(.theme-toggle)').forEach(button => button.disabled = true);
          }
        }
      }, 3000));
    }

    function displayFootballer() {
      if (isProgramStopped) return;

      currentFootballer = findBestMatch();
      if (!currentFootballer) {
        console.error("No footballer matched in displayFootballer.");
        document.getElementById("progressContainer").classList.remove("show");
        document.getElementById("resultContainer").classList.add("show");
        document.getElementById("playerName").textContent = "No Match Found";
        document.getElementById("playerName").classList.remove("hidden-initial");
        document.getElementById("playerName").classList.add("show");
        document.getElementById("playerBio").textContent = "Sorry, we couldn't find a footballer that matches your traits. Try again!";
        document.getElementById("playerBio").classList.remove("hidden-initial");
        document.getElementById("playerBio").classList.add("show");
        isProgramStopped = true;
        document.querySelectorAll('button:not([onclick="resetProgram()"]):not(.theme-toggle)').forEach(button => button.disabled = true);
        return;
      }

      const imageElement = document.getElementById("randomImage");
      const playerNameElement = document.getElementById("playerName");
      const playerPositionElement = document.getElementById("playerPosition");
      const playerBioElement = document.getElementById("playerBio");
      const playerAchievementsContainer = document.getElementById("playerAchievements");
      const achievementsList = document.getElementById("achievementsList");
      const resultContainer = document.getElementById("resultContainer");

      imageElement.src = currentFootballer.image;
      
      let hasRevealed = false;

      const revealProfile = () => {
        if (isProgramStopped || hasRevealed) return;
        hasRevealed = true;

        document.getElementById("progressContainer").classList.remove("show");
        resultContainer.classList.add("show");

        // Animate Image
        imageElement.classList.add("show");
        
        playerNameElement.textContent = currentFootballer.name;
        playerNameElement.classList.remove("hidden-initial");
        playerNameElement.classList.add("show");

        // Show Match Percentage
        const matchText = currentFootballer.matchPercentage ? ` • ${currentFootballer.matchPercentage}% Match` : "";
        playerPositionElement.textContent = `Position: ${currentFootballer.position}${matchText}`;
        playerPositionElement.classList.remove("hidden-initial");
        playerPositionElement.classList.add("show");

        playerBioElement.textContent = currentFootballer.bio;
        playerBioElement.classList.remove("hidden-initial");
        playerBioElement.classList.add("show");

        if (currentFootballer.achievements && currentFootballer.achievements.length > 0) {
          currentFootballer.achievements.forEach(achievement => {
            const listItem = document.createElement("li");
            listItem.textContent = achievement;
            achievementsList.appendChild(listItem);
          });
          playerAchievementsContainer.classList.remove("hidden-initial");
          playerAchievementsContainer.classList.add("show");
        }

        isProgramStopped = true;
        
         // Disable quiz buttons but keep game control buttons enabled
         const quizButtons = document.querySelectorAll('#quizContainer button');
         quizButtons.forEach(button => button.disabled = true);
         
         // Ensure main control buttons are ENABLED
         document.querySelectorAll('#gameControls button').forEach(button => button.disabled = false);
      };

      imageElement.onload = revealProfile;
      imageElement.onerror = () => {
        console.error("Image failed to load:", currentFootballer.image);
        revealProfile();
      };

      timeouts.push(setTimeout(revealProfile, 2000));
    }

    function findBestMatch() {
      if (footballers.length === 0) {
        console.error("Footballers array is empty.");
        return null;
      }

      const numQuestions = quizQuestions.length || 1;

      // Calculate normalized user traits
      const uPower = userTraits.power / numQuestions;
      const uFlair = userTraits.flair / numQuestions;
      const uLead = userTraits.leadership / numQuestions;
      const uTeam = userTraits.teamwork / numQuestions;

      // Calculate distances for all footballers
      const candidates = footballers.map(footballer => {
        const distance =
          Math.abs(footballer.traits.power - uPower) +
          Math.abs(footballer.traits.flair - uFlair) +
          Math.abs(footballer.traits.leadership - uLead) +
          Math.abs(footballer.traits.teamwork - uTeam);
        
        return { ...footballer, distance };
      });

      // Sort by distance (ascending)
      candidates.sort((a, b) => a.distance - b.distance);

      // Select from top candidates to ensure variety ("Fair for everyone")
      // instead of always picking the single mathematical closest (which biases towards "average" stats).
      // We consider the top 3 closest matches, provided they are within a reasonable range.
      const topCandidates = candidates.slice(0, 3);
      
      // Filter: Only keep candidates that are within a small distance margin of the absolute best match.
      // This ensures we don't pick a wildly inaccurate match just for variety.
      const bestDist = topCandidates[0].distance;
      const validCandidates = topCandidates.filter(c => c.distance <= bestDist + 1.25);

      // Deterministic Selection:
      // Use a hash of the user's answers to pick one of the valid candidates.
      // This ensures that validCandidates[0] (the closest) doesn't always win ties or near-ties,
      // but the result remains CONSTANT for the same inputs (unlike Math.random()).
      const inputHash = 
        Math.floor(uPower * 100) * 1 + 
        Math.floor(uFlair * 100) * 3 + 
        Math.floor(uLead * 100) * 7 + 
        Math.floor(uTeam * 100) * 13;
        
      const selectedIndex = inputHash % validCandidates.length;
      const bestMatch = validCandidates[selectedIndex];

      // Calculate Match Percentage
      // Formula refined to reflect the selected match's distance
      if (bestMatch) {
          let percent = Math.max(50, 100 - (bestMatch.distance * 9)); 
          bestMatch.matchPercentage = Math.round(percent);
      }

      return bestMatch;
    }

    function resetProgram(silent = false) {
      isProgramStopped = true;
      currentFootballer = null;
      currentQuestionIndex = 0;
      userTraits = { power: 0, flair: 0, leadership: 0, teamwork: 0 };

      // Stop Timers & Game
      if (questionTimer) clearInterval(questionTimer);
      if (minigameInterval) cancelAnimationFrame(minigameInterval);
      if (keepieAnimation) cancelAnimationFrame(keepieAnimation); // Stop keepie uppie
      gameActive = false;
      keepieGameActive = false;
      document.getElementById("minigameContainer").classList.remove("show");
      document.getElementById("keepieContainer").style.display = "none";
      
      // Reset Ball
      const ball = document.getElementById("ball");
      if(ball) {
          ball.classList.remove("ball-moving");
          ball.style.top = "";
          ball.style.bottom = "30px";
          ball.style.transform = "translateX(-50%)";
      }

      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }

      timeouts.forEach(clearTimeout);
      timeouts = [];

      const imageElement = document.getElementById("randomImage");
      imageElement.src = "";
      imageElement.removeAttribute("src");
      imageElement.classList.remove("show");
      imageElement.onload = null;
      imageElement.onerror = null;

      const optionsContainer = document.getElementById("optionsContainer");
      optionsContainer.innerHTML = "";
      optionsContainer.replaceChildren();

      document.querySelectorAll("button").forEach(button => button.disabled = false);
      document.getElementById("playerName").textContent = "";
      document.getElementById("playerName").classList.add("hidden-initial");
      document.getElementById("playerName").classList.remove("show");
      document.getElementById("playerPosition").textContent = "";
      document.getElementById("playerPosition").classList.add("hidden-initial");
      document.getElementById("playerPosition").classList.remove("show");
      document.getElementById("playerBio").textContent = "";
      document.getElementById("playerBio").classList.add("hidden-initial");
      document.getElementById("playerBio").classList.remove("show");
      document.getElementById("playerAchievements").classList.add("hidden-initial");
      document.getElementById("playerAchievements").classList.remove("show");
      document.getElementById("achievementsList").innerHTML = "";
      document.getElementById("progressContainer").classList.remove("show");
      document.getElementById("quizContainer").classList.remove("show");
      document.getElementById("resultContainer").classList.remove("show");
      document.getElementById("progressBar").style.width = "0%";
      document.getElementById("progressText").textContent = "Analyzing stats...";
      // Don't clear username if just restarting game
      document.getElementById("questionText").innerHTML = "";

      if(!silent) alert("Program has been reset. Please enter your name to start a new quiz.");
    }



    function handleEnter(event) {
      if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
      }
    }

    document.documentElement.setAttribute("data-theme", "dark");
    
    // Init Game Listener
    document.addEventListener("DOMContentLoaded", () => {
         // Show menu by default
         showMenu();

         const gameArea = document.getElementById("gameArea");
         if(gameArea) {
             gameArea.addEventListener("click", (e) => {
                 if(currentGameMode === 'penalty') shoot(e);
             });
             gameArea.addEventListener("touchstart", (e) => {
                 e.preventDefault(); 
                 if(currentGameMode === 'penalty') shoot(e);
             });
         }
         
         const keepieArea = document.getElementById("keepieArea");
         if(keepieArea) {
             keepieArea.addEventListener("mousedown", (e) => {
                  if(currentGameMode === 'keepie') keepieTap();
             });
              keepieArea.addEventListener("touchstart", (e) => {
                 e.preventDefault();
                 if(currentGameMode === 'keepie') keepieTap();
             });
         }
         
         // Global restart listener? Maybe not needed as we have UI buttons now.
    });



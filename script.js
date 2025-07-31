const container = document.getElementById('container');

function showPage(page) {
  // Reset animation for smooth transitions
  container.style.animation = "none";
  container.offsetHeight; // Trigger reflow
  container.style.animation = null;

  if (page === 1) {
    container.innerHTML = `
      <h2>Hello Buddy! <br>These vacations don't seem to end and I am bored so much. So This is a silly little roomate proposal for our new hostel if we get it <br><br>
      So… I am excited, We can become roomates. Are you excited too??</h2>
      <button class="btn" onclick="showPage(3)">Yes, duh! 😎</button>
      <button class="btn" onclick="showPage(2)">Wait, why tho? 🤔</button>
      <button class="btn no" onclick="showPage(99)">No way! 😢</button>
    `;
  } else if (page === 2) {
    container.innerHTML = `
      <div class="cute">Well, because:<br>
        - We can do yapping forever<br>
        - I can cook you rice every Monday (if there's a kitchen there. Infact you are  masterchef now, You can make me whatever you can)<br>
        - I can bless you with my lame jokes when you are sad, infact all the time😂<br>
        - Plus, According to Uno Reverse Law Of Timepass, You don't have freedom of choice<br>
      </div>
      <h2>Sooo… Just for the formality, are you in? 🫶</h2>
      <button class="btn" onclick="showPage(3)">Heck yes! 🎉</button>
      <button class="btn" onclick="showPage(4)">Wait, why’s there no “No”? 😳</button>
      <button class="btn no" onclick="showPage(99)">Nope, not interested 😿</button>
    `;
  } else if (page === 4) {
    container.innerHTML = `
      <h2>Go Back and read about the uno reverse law of timepass<br>I’ve decided, we’re roomies, just including you in it, duh!</h2>
      <button class="btn" onclick="showPage(5)">I have questions?</button>
      <button class="btn" onclick="showPage(5)">I guess I have no choice </button>
      <button class="btn no" onclick="showPage(99)">No, seriously! 🙅‍♂️</button>
    `;
  } else if (page === 5) {
    container.innerHTML = `
      <h2>Got questions????? 🤨<br>BRUH Serioulsy? </h2>
      <button class="btn" onclick="showPage(6)">Yes, I have questions! 🙋‍♂️</button>
      <button class="btn" onclick="showPage(6)">No, I’m too shy 😬</button>
      <button class="btn no" onclick="showPage(99)">My answer is NO</button>
    `;
  } else if (page === 6) {
    container.innerHTML = `
      <h2>Nopes,  no questions allowed!<br>periodt<br>
       So, try choosing your answer again, What's your answer</h2>
      <button class="btn" onclick="showPage(3)">Yes</button>
      <button class="btn" onclick="showPage(7)">Omg yessss! 🔫 (Select this one, I’m watching you!)</button>
      <button class="btn no" onclick="showPage(99)">No, I refuse! 😿</button>
    `;
  } else if (page === 3) {
    container.innerHTML = `
      <h2>YAYYY! You Got The Best Roomate, I am so happy for you <3 How Lucky! <br><br>
     </h2>
      <button class="btn" onclick="confetti()">Omg yessss! 😍🎊</button>
      <button class="btn no" onclick="showPage(99)">No, wait! 😢</button>
     

    `;
  } else if (page === 7) {
    container.innerHTML = `
      <h2>You are so luckyy, I am jealous! 🎊🎉<br> 😭😭</h2>
      <button class="btn" onclick="confetti()">Celebrate! 🎈🎉</button>
      <button class="btn no" onclick="showPage(99)">Noooo! 😿</button>
    `;
  } else if (page === 99) {
    container.innerHTML = `
      <div class="crying-bunny-container">
        <div class="bunny-ear ear-left"></div>
        <div class="bunny-ear ear-right"></div>
        <div class="bunny-face">
          <div class="bunny-eye bunny-eye-left">
            <div class="bunny-tear-stream"></div>
          </div>
          <div class="bunny-eye bunny-eye-right">
            <div class="bunny-tear-stream"></div>
          </div>
          <div class="bunny-nose"></div>
          <div class="bunny-mouth sad-bunny-mouth"></div>
          <div class="bunny-cheek cheek-left"></div>
          <div class="bunny-cheek cheek-right"></div>
        </div>
      </div>
      <h2>Why would you make BunBun cry?🍓 🥹💔<br>Go Back before BunBun drowns in his own tears! </h2>
      <button class="btn" onclick="showPage(1)">Ok, let’s save  BunBun!</button>
      <div class="water-flood"></div>
    `;

    // AFTER innerHTML is set, create bubble elements inside .water-flood overlay
    const waterFlood = document.querySelector('.water-flood');
    if (waterFlood) {
      waterFlood.innerHTML = ''; // clear bubbles if any
      for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.setProperty('--delay', `${Math.random() * 8}s`);
        bubble.style.setProperty('--x-move', `${(Math.random() - 0.5) * 50}px`);
        waterFlood.appendChild(bubble);
      }
    }
  }
}

function confetti() {
  container.innerHTML = '<h2>🎉 Woohoo! You got the best roomate! 🎉<br>Ye tha mera faltu ka timepass, Thankyou for being interested! lol</h2>';
  makeConfetti(1000);
}

function makeConfetti(count) {
  for (let i = 0; i < count; i++) {
    let conf = document.createElement('div');
    conf.className = 'confetti';
    conf.style.position = 'absolute';
    conf.style.left = (Math.random() * 100) + '%';
    conf.style.top = '-20px';
    conf.style.width = '10px';
    conf.style.height = '12px';
    conf.style.backgroundColor = randomPastel();
    conf.style.opacity = '0.7';
    conf.style.borderRadius = '50%';
    conf.style.animation = `fall ${2 + Math.random() * 2}s ease-in forwards`;
    conf.style.zIndex = 40;
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 4000);
  }
}

function randomPastel() {
  const colors = ['#fbc2eb', '#fcdff1', '#b2cefe', '#ffe4b7', '#e0c3fc', '#f6d996'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Add keyframes for confetti animation dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0);}
  100% { transform: translateY(120vh) rotate(${Math.random()*360}deg);}
}
`;
document.head.appendChild(style);

// Start with page 1
showPage(1);

// Make sure functions are globally accessible for inline onclick
window.showPage = showPage;
window.confetti = confetti;

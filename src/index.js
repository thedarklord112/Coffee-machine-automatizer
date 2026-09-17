const express = require('express');
const { Board, Relay } = require('johnny-five');

const app = express();
const port = 3000;

// Initialize the microcontroler board (Arduino, Raspberry Pi, etc.)
const board = new Board();

app.use(express.json());

board.on('ready', () => {
  console.log('🔌 Board connected successfully and ready!');

  // Configure the digital pins where the relays are connected
  const relayPower = new Relay(2);  // Pin 2: Turn machine On/Off
  const relayGrinder = new Relay(3); // Pin 3: Coffee grinder (if available)
  const relayBrew = new Relay(4);    // Pin 4: Start extraction/brewing

  // Route to check server status
  app.get('/status', (req, res) => {
    res.json({ status: "online", message: "Smart coffee maker is ready for commands." });
  });

  // Route to trigger the full coffee brewing cycle
  app.post('/api/make-coffee', (req, res) => {
    const { grindBeans } = req.body;

    console.log('☕ Starting the coffee brewing process...');
    
    // 1. Turn on the coffee machine
    relayPower.on();
    
    // If the user wants to grind fresh beans (simulated 10-second timer)
    let delay = 2000;
    if (grindBeans) {
      setTimeout(() => {
        console.log('🫘 Grinding coffee beans...');
        relayGrinder.on();
        
        setTimeout(() => {
          relayGrinder.off();
        }, 8000);
      }, delay);
      
      delay += 9000;
    }

    // 2. Start brewing the coffee
    setTimeout(() => {
      console.log('💧 Brewing coffee...');
      relayBrew.on();
      
      // Simulates the time it takes to fill a cup (e.g., 30 seconds)
      setTimeout(() => {
        console.log('✅ Coffee is ready! Turning off components.');
        relayBrew.off();
        relayPower.off();
      }, 30000);

    }, delay);

    res.json({ success: true, message: "Coffee brewing process started successfully!" });
  });

  app.listen(port, () => {
    console.log(`🚀 Coffee maker server running at http://localhost:${port}`);
  });
});

board.on('fail', (event) => {
  console.error('❌ Failed to connect to the board:', event.message);
});

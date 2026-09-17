# ☕ Smart Coffee Maker Automation (The Caffeine Overlord 3000)

Because turning a physical knob in 2026 is just unacceptable. This repository transforms your regular, boring coffee machine into a sentient, API-driven caffeine dispensary using **Node.js**, **Johnny-Five**, and an **Arduino**. 

Now you can brew your morning survival juice with a simple `POST` request.

---

## 🛠️ Hardware You Need (To avoid walking to the kitchen)

* **1x Arduino Uno** (The brain that replaces your lazy hands).
* **1x Relay Module** (2 or 4 channels to do the actual clicky-clicky electrical work).
* **Jumper wires** (A colorful nest of anxiety).
* **1x Coffee Machine** (Safely modified. Please don't burn your house down, our warranty expired yesterday).

---

## 🚀 Getting Started (Emergency Mode)

### 1. Clone this bad boy
```bash
git clone https://github.com
cd smart-coffee-maker
```

### 2. Feed the dependencies
```bash
npm install
```

### 3. Wire it up
Plug your Arduino into your server/PC. Make sure you flashed it with `StandardFirmata` using the Arduino IDE. If you don't know what that means, pray to the open-source gods and Google it.

### 4. Initiate Liftoff
```bash
npm start
```

---

## 🔌 API Endpoints (How to summon the bean juice)

### 🩺 Health Check
* **URL:** `/status`
* **Method:** `GET`
* **Response:** Returns `200 OK` if the machine is alive and ready to fuel your coding addiction.

### ☕ The "Save My Life" Request
* **URL:** `/api/make-coffee`
* **Method:** `POST`
* **Payload (JSON):**
```json
{
  "grindBeans": true
}
```

#### What happens behind the scenes:
1. **Power On:** The relay clicks. The machine wakes up. Hope rises.
2. **Grinding (Optional):** If `grindBeans` is `true`, it will make an aggressive whirring noise for 8 seconds.
3. **Brewing:** The sweet aroma of productivity fills the room for 30 seconds.
4. **Done:** The system shuts down gracefully before it overfills your cup and shorts out your floor wiring.

---

## ⚠️ Disclaimer

This code is provided "as is". If your coffee machine gains self-awareness, refuses to brew decaf, or decides to overthrow your local government, the developers hold absolutely zero responsibility. Drink responsibly. Code irresponsibly.

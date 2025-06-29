const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Пример базы устройств
let devices = [
  { id: 'esp32_1', version: '1.0.0', status: 'online' },
  { id: 'esp32_2', version: '1.1.2', status: 'offline' }
];

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

// API: получить список устройств
app.get('/api/devices', (req, res) => {
  res.json(devices);
});

// API: команда обновления
app.post('/api/update', (req, res) => {
  const { device_id } = req.body;
  console.log(`Update requested for ${device_id}`);
  // Здесь ты можешь публиковать в MQTT
  res.json({ success: true, message: `Обновление запрошено для ${device_id}` });
});

app.listen(port, () => {
  console.log(`🟢 Server running on http://localhost:${port}`);
});

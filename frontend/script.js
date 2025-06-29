async function loadDevices() {
  const res = await fetch('/api/devices');
  const devices = await res.json();

  const tbody = document.querySelector('#deviceTable tbody');
  tbody.innerHTML = '';

  devices.forEach(device => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${device.id}</td>
      <td>${device.version}</td>
      <td>${device.status}</td>
      <td><button onclick="sendUpdate('${device.id}')">Обновить</button></td>
    `;

    tbody.appendChild(row);
  });
}

async function sendUpdate(device_id) {
  const res = await fetch('/api/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ device_id })
  });

  const result = await res.json();
  alert(result.message);
}

loadDevices();

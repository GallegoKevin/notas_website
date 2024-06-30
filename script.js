document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '$2a$10$hceRmKDoBNi.HWddoeLHuevgeFOOzw7fRt1fmBy8zgpDerVEPg496'; // Tu clave de acceso
    const binId = '6672da4cacd3cb34a859d109'; // Tu ID del bin en JSONBin

    fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
        headers: {
            'X-ACCESS-KEY': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const dataContainer = document.getElementById('data-container');
        dataContainer.textContent = JSON.stringify(data.record, null, 2);
    })
    .catch(error => {
        const dataContainer = document.getElementById('data-container');
        dataContainer.textContent = `Error fetching data: ${error}`;
        console.error('Error fetching data:', error);
    });
});

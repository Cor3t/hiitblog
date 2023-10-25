// // Get references to the HTML elements
// const startButton = document.getElementById('startRecording');
// const stopButton = document.getElementById('stopRecording');

// // Create variables to store audio stream and MediaRecorder
// let audioStream;
// let mediaRecorder;

// // Event listener for the "Start Recording" button
// startButton.addEventListener('click', async () => {
//     try {
//         audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         mediaRecorder = new MediaRecorder(audioStream);

//         const chunks = [];
//         mediaRecorder.ondataavailable = (e) => {
//             chunks.push(e.data);
//         };

//         mediaRecorder.onstop = () => {
//             const audioBlob = new Blob(chunks, { type: 'audio/wav' });
//             const audioURL = URL.createObjectURL(audioBlob);
//             const audioElement = new Audio(audioURL);
//             audioElement.controls = true;
//             document.body.appendChild(audioElement);
//         };

//         mediaRecorder.start();
//         startButton.disabled = true;
//         stopButton.disabled = false;
//     } catch (error) {
//         console.error('Error accessing the microphone:', error);
//     }
// });

// // Event listener for the "Stop Recording" button
// stopButton.addEventListener('click', () => {
//     mediaRecorder.stop();
//     audioStream.getTracks().forEach((track) => track.stop());
//     startButton.disabled = false;
//     stopButton.disabled = true;
// });

// Get a reference to the "Stop Recording" button
const stopButton = document.getElementById('stopRecording');
const displayLetterElement = document.getElementById('e')

let e_display = true;
// Create variables to store audio stream and MediaRecorder
let audioStream;
let mediaRecorder;

// Start recording automatically when the page loads
(async () => {
    try {
        audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(audioStream);

        const chunks = [];

        mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunks.push(e.data);
                displayLetterElement.textContent += 'e'
            }

        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(chunks, { type: 'audio/wav' });
            const audioURL = URL.createObjectURL(audioBlob);
            const audioElement = new Audio(audioURL);
            audioElement.controls = true;
            document.body.appendChild(audioElement);
            stopButton.disabled = true;
        };

        mediaRecorder.start();
        stopButton.disabled = false;
    } catch (error) {
        console.error('Error accessing the microphone:', error);
    }
})();

// Event listener for the "Stop Recording" button
stopButton.addEventListener('click', () => {
    mediaRecorder.stop();
    audioStream.getTracks().forEach((track) => track.stop());
});

const updateDisplay = () => {
    requestAnimationFrame(updateDisplay);
};
updateDisplay();

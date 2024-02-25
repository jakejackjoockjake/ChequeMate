function speakR() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance("Most banks have website options to do basic things like check how much money is still in an account, but there are some common signs to see if a web page is unsafe. ");
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
    // Speak the text
    speechSynthesis.speak(utterance);
}
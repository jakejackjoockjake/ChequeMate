function speakH() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance("Secure and safe websites will start their website with https colon: which shows they are on a secure protocol. Check this url to see that HTTPS is a part of it!");
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
    // Speak the text
    speechSynthesis.speak(utterance);
}
function speak() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance("Safe Pages Will not have many spelling errors! If a page has multiple spelling errors, take that as a red flag that it is not legitimate. Scammers often use tactics like urgency, fear, and a sense of authority to trick people into gaining sensitive information to steal money.");
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
    // Speak the text
    speechSynthesis.speak(utterance);
}
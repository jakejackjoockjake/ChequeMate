function speak() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance("If something tells you to act fast or urgently make sure to do the opposite. Do not be afraid to call your local bank to ensure any message is real. If a message is coming in the form of email, do not be afraid to google search the email that sent you an email to make sure they are who they say they are.");
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
    // Speak the text
    speechSynthesis.speak(utterance);
}
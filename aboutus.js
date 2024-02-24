function speak() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance("Cheque Mate was a project created by three students named Martinez, Jaspal Kahlon, and Jacob Reeves for the RowdyHacks 2024 Hackathon competition. We wanted to create a project that could aid elderly people with online financial services. We hope this project helps anyone who is interested and has questions about online banking cyberspace. If you have any questions, feel free to contact us at any time!");
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
    // Speak the text
    speechSynthesis.speak(utterance);
}
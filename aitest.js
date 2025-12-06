function generateAIMessage(type) {
  const messages = {
    calm: [
      "Take a deep breath. You are safe and everything will be okay.",
      "Slow down for a moment. You deserve peace and clarity.",
      "Inhale calm, exhale tension. You’re doing better than you think.",
      "Let your shoulders relax. You are allowed to rest.",
      "You’ve survived every tough moment so far — you’ll get through this too."
    ],

    motivation: [
      "You’ve got this! Keep pushing forward, success is closer than you think.",
      "Small steps every day lead to big results — keep going.",
      "Believe in your ability to grow. You’re stronger than you realize.",
      "Progress isn’t always loud. Even quiet effort counts.",
      "Your future self will thank you for not giving up today."
    ],

    study: [
      "Review your notes daily, practice past exams, and take short breaks to stay sharp.",
      "Focus for 25 minutes, rest for 5 — your brain will thank you.",
      "Understanding beats memorizing. Try explaining the topic in your own words.",
      "You don’t need to study perfectly — just consistently.",
      "Stay hydrated, stay focused, and trust the work you’ve already done."
    ]
  };

  const category = messages[type];

  if (!category) {
    console.log("AI Output: Please choose calm, motivation, or study.");
    return;
  }

  // Pick a random message from the category
  const randomMessage = category[Math.floor(Math.random() * category.length)];

  console.log("AI Output:", randomMessage);
}

// Example calls
generateAIMessage("calm");
generateAIMessage("motivation");
generateAIMessage("study");
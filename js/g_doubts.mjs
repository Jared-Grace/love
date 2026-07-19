export function g_doubts() {
  "the pool for the 'what do you believe?' turns — each is a person-neutral belief DOUBT the NPC voices (`concern`) + the on-topic answer/assurance verse (`correct` {reference, text}). same shape as g_struggles; app_g_believe quizzes it against an off-topic verse. real questions get real Scripture, never a trite dismissal";
  let doubts = [
    { concern: "Honestly, I'm not sure God is even real.", correct: { reference: "Romans 1:20", text: "His invisible attributes—His eternal power and divine nature—have been clearly seen in what has been made." } },
    { concern: "How could God ever forgive someone like me?", correct: { reference: "Romans 5:8", text: "God shows His love for us in that while we were still sinners, Christ died for us." } },
    { concern: "I don't think I could ever be sure I'm saved.", correct: { reference: "1 John 5:13", text: "I write these things to you who believe, that you may know that you have eternal life." } },
    { concern: "Isn't Jesus just one way among many?", correct: { reference: "John 14:6", text: "I am the way, and the truth, and the life. No one comes to the Father except through Me." } },
    { concern: "If God is good, why is there so much suffering?", correct: { reference: "Romans 8:28", text: "We know that for those who love God all things work together for good." } },
    { concern: "How can I know the Bible is really true?", correct: { reference: "2 Timothy 3:16", text: "All Scripture is breathed out by God and profitable for teaching and for training in righteousness." } },
    { concern: "Can I really start over after everything I've done?", correct: { reference: "2 Corinthians 5:17", text: "If anyone is in Christ, he is a new creation. The old has passed away; the new has come." } },
    { concern: "Does God really care about me personally?", correct: { reference: "Matthew 10:30-31", text: "Even the hairs of your head are all numbered. You are of more value than many sparrows." } },
  ];
  return doubts;
}

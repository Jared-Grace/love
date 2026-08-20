import { fn_name } from "./fn_name.mjs";
export function g_temptations() {
  ("the pool for a TEMPTATION turn — each is a person-neutral temptation the NPC voices in their own words + the Scripture that REFUTES that particular pull ({reference, text}); the quiz shows the refuting verse against an off-topic one (",
    fn_name("g_verses_off_topic"),
    "), so the discernment is 'which word actually answers THIS pull'. modeled on Matthew 4 / Luke 4, where every answer was 'it is written' and each answer met the specific offer. the verse must refute the pull ITSELF, never merely scold the person: named restraint and a better thing offered, not condemnation");
  let temptations = [
    {
      concern:
        "I keep thinking that if I just had a little more, I would finally feel safe. I catch myself wanting things I do not even need.",
      correct: {
        reference: "Luke 12:15",
        text: "Take care, and be on your guard against all covetousness, for one's life does not consist in the abundance of his possessions.",
      },
    },
    {
      concern:
        "There are things I could look at on my phone tonight, and nobody would ever know.",
      correct: {
        reference: "Psalm 101:3",
        text: "I will not set before my eyes anything that is worthless.",
      },
    },
    {
      concern:
        "Someone humiliated me in front of everybody. I want to make them feel exactly what I felt.",
      correct: {
        reference: "Romans 12:19",
        text: "Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, Vengeance is mine, I will repay, says the Lord.",
      },
    },
    {
      concern:
        "One small lie and this whole problem goes away tonight. It would not really hurt anyone.",
      correct: {
        reference: "Ephesians 4:25",
        text: "Therefore, having put away falsehood, let each one of you speak the truth with his neighbor, for we are members one of another.",
      },
    },
    {
      concern:
        "I have failed at this so many times already. I do not think I have it in me to hold out again.",
      correct: {
        reference: "1 Corinthians 10:13",
        text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.",
      },
    },
    {
      concern:
        "It has been a terrible week. I just want to drink until I stop feeling any of it.",
      correct: {
        reference: "Ephesians 5:18",
        text: "And do not get drunk with wine, for that is debauchery, but be filled with the Spirit.",
      },
    },
    {
      concern:
        "My friend just received the very thing I have been praying for, and I cannot make myself be glad for them.",
      correct: {
        reference: "Romans 12:15",
        text: "Rejoice with those who rejoice, weep with those who weep.",
      },
    },
    {
      concern:
        "I have the reply already typed out and it would wreck them. My finger is over the send button.",
      correct: {
        reference: "James 1:19-20",
        text: "Let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God.",
      },
    },
  ];
  return temptations;
}

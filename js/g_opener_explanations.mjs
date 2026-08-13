export function g_opener_explanations() {
  "For every opener the player may approach with: what the player actually says, and what kind of thing the person says back.";
  "THE OPENER LISTS ARE TAGS, NOT SPEECH. A written arc marks each turn with the opener it answers, and that mark has to be one fixed word to be matched on - so the lists hold `how are you`, unpunctuated, and cannot also carry the sentence a player hears. This is where the sentence lives, and a tag stays a tag.";
  "WITHOUT IT A WRITER IS ANSWERING A SENTENCE IT WAS NEVER SHOWN. Five of the openers read close enough to speech to guess at, but `the gospel` is an ACT rather than an utterance - the player shares it, and nothing anywhere said what was shared. A person cannot object to words that were never given.";
  "AND THE OPENER DECIDES THE KIND OF ANSWER, which is the half nobody would infer. Asked how they are, somebody names a trouble. Asked what they believe, they state their own belief - `I believe people are reincarnated` - which is not a trouble at all. Told the gospel, they answer the gospel itself, with a question about it or an objection to it. Three openers, three different shapes of reply, and a prompt that says only `the person utters an answer` gets one shape three times.";
  "KEYED BY THE OPENER WORD so one explanation serves both lists. `how are you` is offered to a believer and an unbeliever alike, and it means the same thing at both doors - the belief state is already said by which list the opener was rendered under.";
  let r = {
    "how are you": {
      said: 'The player asks "How are you?"',
      draws:
        "The person says how life is going - whatever is weighing on them, in their own words.",
    },
    "what do you believe": {
      said: "What do you believe?",
      draws:
        "The person says what they themselves believe, plainly, as their own settled view rather than as a problem.",
    },
    "the gospel": {
      said: "The player tells them the gospel: who Jesus is, that he died for their sin and rose again.",
      draws:
        "The person answers the gospel itself - a question about it, or an objection to it.",
    },
    "a Bible question": {
      said: "The believer asks the player a question about Scripture.",
      draws: "The person asks the question, and Scripture is what answers it.",
    },
    "how is your walk with God": {
      said: "How is your walk with God?",
      draws:
        "The person says where they are with God right now - what is growing, or what has gone cold.",
    },
    "how is ministering to your neighbour going": {
      said: "How is ministering to your neighbour going?",
      draws:
        "The person says how serving somebody else is going - what it is costing them, or what they do not know how to do.",
    },
  };
  return r;
}

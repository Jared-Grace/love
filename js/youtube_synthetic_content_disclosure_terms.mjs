export function youtube_synthetic_content_disclosure_terms() {
  "the words of the rule the channel is held under about machine-made content, quoted rather than paraphrased, so that whoever uploads reads what it actually says instead of working it out again";
  "IT IS A SECOND RULE AND NOT THE SAME ONE. The licence the pictures are drawn under and the policy the channel is published under are different documents, written by different people, answering different questions, and neither of them mentions the other. The first says what may be done to a picture; this says what has to be told to a viewer. Reading only the first and calling the question answered was the mistake this exists to stop.";
  "THE TEST IS WHETHER A VIEWER COULD BE MISLED ABOUT WHAT ACTUALLY HAPPENED, and everything else follows from it. That is why the exempt list holds a unicorn and a fully animated missile: nobody watching those is being told a thing occurred. It is not a rule about how a picture was made. It is a rule about what a picture claims.";
  "SO THE DRAWINGS FOR THIS HYMN FALL ON THE EXEMPT SIDE, and by design rather than by luck. They are flat, frontal, never photographic, and hold no people and no faces, because the style says so; a stained glass symbol cannot be mistaken for a photograph of an event. The one clause they would have had to answer to is the one they were already built to fail.";
  "THE SINGING IS THE PART THAT IS NOT SETTLED, and it is worth saying plainly because it is the opposite of where anybody was looking. The list of what must be disclosed names machine-made music outright, while guidance written elsewhere says such music is exempt unless it imitates a named performer, and the two cannot both be read as they stand. Whoever uploads should read the page rather than trust either.";
  "AND THE DISCLOSURE COSTS NOTHING, WHICH IS WHAT MAKES THAT UNSETTLED QUESTION CHEAP. The label is stated not to narrow who is shown the song, not to change whether it is recommended, and not to affect whether it earns. Where a rule is genuinely unclear and saying yes is free, saying yes is the side to be wrong on.";
  "read on 2026-09-06 from support.google.com, at youtube/answer/14328491. Dated because a platform policy changes more often than a licence does, and an undated quotation cannot be told from a current one.";
  let clauses = [
    {
      source: "what does not need disclosing",
      words:
        "non-realistic content that's made with AI, or edits to realistic content that are minor",
    },
    {
      source: "exempt example, animation",
      words:
        "using an AI-generated or altered animation of a missile in a fully animated video",
    },
    {
      source: "exempt example, fantasy",
      words: "someone riding a unicorn through a fantastical world",
    },
    {
      source: "what must be disclosed",
      words: "AI generated music",
    },
    {
      source: "what the label does",
      words:
        "does not limit a video's audience, change recommendation eligibility, or remove monetization eligibility",
    },
  ];
  return clauses;
}

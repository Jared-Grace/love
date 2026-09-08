export function gloss_passage_text_first_cases() {
  "What a passage's verses have to look like once they are one line, written down.";
  "The reading this pins is a join, and a join is the kind of work that looks done when it is not: something comes back, it is made of the right words, and only the few characters between two verses are wrong. So the cases are chosen by where the verses meet rather than by what they say, and every one of them is a passage a reader has actually been shown.";
  "The single-verse case is the important one and it is the one that looks pointless. A passage of one verse has nothing to join, so it reads correctly however the joining is done - and that is exactly why the fault went unseen: almost every passage in the store is one verse, and the eye that checked them found nothing to find. Kept here so a later reader is told that a passing single verse proves nothing about the join.";
  "The last mark of a verse is what the cases vary, because that is what the wrong join collided with. A verse ending in a comma and a verse ending in a semicolon both showed the reader two marks stuck together with no space, and a four-verse passage showed three of them in one sentence.";
  let cases = [
    {
      texts: ["For since the creation of the world."],
      text: "For since the creation of the world.",
      why: "one verse and nothing to join - reads correctly whatever the joining does, which is why a store full of these hid the fault",
    },
    {
      texts: ["they will speak in new tongues;", "they will pick up snakes."],
      text: "they will speak in new tongues; they will pick up snakes.",
      why: "two verses meeting at a semicolon - the wrong join wrote the mark and a comma together with no space between the words",
    },
    {
      texts: [
        "through His prophets in the Holy Scriptures,",
        "regarding His Son.",
      ],
      text: "through His prophets in the Holy Scriptures, regarding His Son.",
      why: "two verses meeting at a comma, where the wrong join doubled the mark itself and the reader saw two commas in a row",
    },
    {
      texts: [
        "Paul, a servant of Christ Jesus,",
        "the gospel He promised beforehand,",
        "regarding His Son,",
        "who was declared with power.",
      ],
      text: "Paul, a servant of Christ Jesus, the gospel He promised beforehand, regarding His Son, who was declared with power.",
      why: "four verses in one passage, so one sentence carries three joins - the shape that made the fault plain enough to notice at last",
    },
  ];
  return cases;
}

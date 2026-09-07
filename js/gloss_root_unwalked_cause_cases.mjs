export function gloss_root_unwalked_cause_cases() {
  "A small written-out dictionary, roots to ask it about, and why each one leaves it with no step to take.";
  "The dictionary here is written out rather than gathered, so a case says what it means on its own page. Every entry in it stands for one the real dictionary was measured to hold in that shape.";
  "The two answers that matter most are the two that look identical from outside. nako and pailub are both words the walk gives up on, and one of them closes by asking the dictionary again while the other never will - the first has never been asked, the second was asked and its page carries no breakdown. A reading that ran them together would report a pile half of which cannot move, which is the reading this file exists to prevent.";
  "walked is here because the reading answers about a root it was never meant to be handed, and what it answers has to be written down rather than left to be discovered.";
  let known = {
    higugma: {
      analysed: true,
      root: "gugma",
      affixes: "hi-",
    },
    pailub: {
      analysed: false,
      root: "",
      affixes: "",
    },
    "sad-an": {
      analysed: true,
      root: "sala",
      affixes: "-an",
    },
    gugma: {
      analysed: true,
      root: "gugma",
      affixes: "",
    },
    tingala: {
      analysed: true,
      root: "",
      affixes: "",
    },
  };
  let cases = [
    {
      root: "nako",
      cause: "unasked",
      why: "the dictionary has never seen the word, so the nine sightings behind it close by going and asking - the half of the silence that can move",
    },
    {
      root: "pailub",
      cause: "unanalysed",
      why: "the dictionary holds the word and its page carries no breakdown, so asking a second time fetches the same page and nothing changes - the half that cannot",
    },
    {
      root: "pailob",
      cause: "unanalysed",
      why: "the same word spelled with the other vowel, which must reach the same page rather than reading as a word nobody has ever asked about",
    },
    {
      root: "sal-an",
      cause: "spelled_otherwise",
      why: "the dictionary holds it as sad-an, so the answer is already on the machine and nobody has to go anywhere for it - thirteen sightings, the largest such class in the corpus",
    },
    {
      root: "gugma",
      cause: "rootless",
      why: "the dictionary took the word apart and named the word itself, which ends the walk without either asking or refusing",
    },
    {
      root: "tingala",
      cause: "rootless",
      why: "taken apart and named no root at all, which ends the walk the same way and is a different thing from never having been asked",
    },
    {
      root: "higugma",
      cause: "walked",
      why: "a root the dictionary did step on from, handed in to pin what comes back - there is no silence here to explain",
    },
    {
      root: "",
      cause: "unasked",
      why: "an empty root is asked about like any other and found nowhere",
    },
  ];
  let r = {
    known,
    cases,
  };
  return r;
}

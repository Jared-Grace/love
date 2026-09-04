import { arguments_assert } from "./arguments_assert.mjs";
export function lists_matched_indexes_cases() {
  "Written-down pairings between two short lists of words, each one a shape that a psalm read aloud actually produces.";
  "★ THE CASES ARE WORDS AND NOT NUMBERS BECAUSE THE ONE THING THAT MUST NOT BE ASSUMED IS THAT AN ITEM IS UNIQUE. A psalm says praise fifteen times, so the pairing that matters is the one a lookup cannot make, and a corpus of distinct items would agree with a lookup and prove nothing.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      name: "two readings that agree word for word, which is what a forced aligner always hands back and so the only case it exercises",
      before: ["praise", "the", "lord"],
      after: ["praise", "the", "lord"],
      matched: [0, 1, 2],
    },
    {
      name: "a written word that went unheard, which costs that one word its pairing and leaves every word after it still paired",
      before: ["praise", "him", "forever"],
      after: ["praise", "forever"],
      matched: [0, null, 1],
    },
    {
      name: "a repeated pair of words whose first word went unheard, which a lookup by word would pair with the wrong later copy",
      before: ["praise", "him", "praise", "him"],
      after: ["him", "praise", "him"],
      matched: [null, 0, 1, 2],
    },
    {
      name: "a word heard that was never written, which is what a transcriber does with an instrumental bar and which must not shift the words around it",
      before: ["praise", "him"],
      after: ["praise", "and", "him"],
      matched: [0, 2],
    },
    {
      name: "a reading that heard nothing at all, which is a recording of the wrong thing and has to come back as no pairings rather than as a throw",
      before: ["praise", "him"],
      after: [],
      matched: [null, null],
    },
    {
      name: "nothing written, which is a line of a document holding no words and answers with nothing rather than with the whole reading",
      before: [],
      after: ["praise"],
      matched: [],
    },
    {
      name: "one written word sung over and over, which is what a refrain does to a document holding the line once, and which has to pair with the first time it was sung rather than the last",
      before: ["hallelujah"],
      after: ["hallelujah", "hallelujah", "hallelujah"],
      matched: [0],
    },
  ];
  return cases;
}

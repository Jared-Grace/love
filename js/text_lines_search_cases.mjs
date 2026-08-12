import { arguments_assert } from "./arguments_assert.mjs";
export function text_lines_search_cases() {
  "A text and a word to look for, with the lines that come back written down rather than derived.";
  "The case that matters most is the one where the word holds a dot. Every machine's own searching command would read that dot as standing for any letter and would answer yes; this must answer no. That single difference is the whole claim that one word means the same thing on every machine, so if it ever stops being true this corpus is where it says so.";
  "A word landing twice on one line is written down too. A line is an answer, not a count of answers, and a reader that started giving a line back once per hit would quietly change what every caller counting these records is counting.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      text: "alpha\nbeta\ngamma",
      s: "beta",
      found: [
        {
          number: 2,
          line: "beta",
        },
      ],
      why: "a word on one line, given back with the place it sits at, counted from one the way an editor counts rather than from nothing the way a list does",
    },
    {
      text: "alpha\nbeta\ngamma",
      s: "delta",
      found: [],
      why: "a word on no line at all is nothing found, which is an answer and not a failure",
    },
    {
      text: "alpha\nbeta\nalpha again",
      s: "alpha",
      found: [
        {
          number: 1,
          line: "alpha",
        },
        {
          number: 3,
          line: "alpha again",
        },
      ],
      why: "every line holding the word, in the order they sit in, with the skipped line still counted",
    },
    {
      text: "alpha alpha\nbeta",
      s: "alpha",
      found: [
        {
          number: 1,
          line: "alpha alpha",
        },
      ],
      why: "a word landing twice on one line gives that line back once - a line is an answer, not a tally",
    },
    {
      text: "unalphabetical\nbeta",
      s: "alpha",
      found: [
        {
          number: 1,
          line: "unalphabetical",
        },
      ],
      why: "the word is looked for inside the line rather than as a whole word of its own, which is what makes it useful for finding a name that is part of longer names",
    },
    {
      text: "abc\naxc",
      s: "a.c",
      found: [],
      why: "a dot is a dot. Every machine's own searching command would read it as standing for any letter and answer with both lines; a plain word means the same thing everywhere, and that sameness is the whole reason this is worth learning once",
    },
    {
      text: "",
      s: "alpha",
      found: [],
      why: "an empty text holds no line that holds anything",
    },
  ];
  return cases;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function g_verify_chapter_asked_cases() {
  "The words a link has actually been seen to carry in the chapter field, each written down beside what it ought to amount to.";
  "Two mistakes are here because they are the two people make. Three letters that are not this bible's letters for the book is the one nobody knows by heart; a chapter number written without its leading nought is the one a person makes typing the link themselves. Both used to get all the way through to a fetch for a chapter that cannot exist, and left the reader looking at a blank page with no idea their own address was the problem.";
  "Nothing and an empty word are both written down, because they look like the same case and are reached by different lines. A link that never named the field and a link that named it and left it blank must both come back as nothing, or the note that quotes the word back would one day quote an empty pair of nothings at somebody.";
  "The words are frozen because a corpus that let its own literals be turned into references would stop spelling the thing it is testing. What is written here is the reader's typing, not this repo's vocabulary, and JOH04 in particular is a word this repo must never come to answer to.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      asked: null,
      answer: {
        asked: null,
        usable: false,
      },
      why: "a link that never named the chapter at all, which is not a mistake - the page falls back the way it always did and there is nothing to tell anybody",
    },
    {
      asked: text_frozen(""),
      answer: {
        asked: null,
        usable: false,
      },
      why: "the field named and left empty, which asked for exactly as much as not naming it, so it must come back as nothing rather than as itself",
    },
    {
      asked: text_frozen("1JN01"),
      answer: {
        asked: text_frozen("1JN01"),
        usable: true,
      },
      why: "a chapter written the way this bible writes one, in a book whose letters start with a digit",
    },
    {
      asked: text_frozen("JHN04"),
      answer: {
        asked: text_frozen("JHN04"),
        usable: true,
      },
      why: "the same, in a book whose letters are all letters",
    },
    {
      asked: text_frozen("JHN4"),
      answer: {
        asked: text_frozen("JHN4"),
        usable: false,
      },
      why: "the missing nought, the mistake a person makes typing the link themselves - the word is still handed back, because the note has to quote it",
    },
    {
      asked: text_frozen("JOH04"),
      answer: {
        asked: text_frozen("JOH04"),
        usable: false,
      },
      why: "three letters that are a real abbreviation for John somewhere else and not the one this bible uses, the mistake nobody can be expected to know by heart",
    },
  ];
  return cases;
}

import { arguments_assert } from "./arguments_assert.mjs";
export function ebible_chapter_code_known_cases() {
  "Written-out chapter codes pinning which ones a link may carry and what is offered back for one it may not";
  "Both halves are written beside each other because they are one promise to a reader: a code judged wrong hands them a screen, and the screen is only worth having if what it offers is a code that would then be judged right. Pinned apart, a reader could go on refusing correctly while the correction it offered led back to the same refusal.";
  "The answers must disagree with each other in both directions. Cases that are all refused would be passed by a judge that refuses everything, and every link in the repo would stop opening; cases that are all allowed would be passed by the judge this corpus was written after, which allowed a chapter number missing its nought all the way through to a lookup that came back with nothing.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      name: "a book and a padded number is what a link carries",
      code: "JHN04",
      answer: {
        known: true,
        suggestions: ["JHN04"],
      },
    },
    {
      name: "the nought left off a single-digit chapter",
      code: "JHN3",
      answer: {
        known: false,
        suggestions: ["JHN03"],
      },
    },
    {
      name: "Psalms is the book whose numbers are three wide",
      code: "PSA023",
      answer: {
        known: true,
        suggestions: ["PSA023"],
      },
    },
    {
      name: "Psalms padded to two is padded too little",
      code: "PSA23",
      answer: {
        known: false,
        suggestions: ["PSA023"],
      },
    },
    {
      name: "a book spelled the way people say it rather than the way it is filed",
      code: "JOH04",
      answer: {
        known: false,
        suggestions: ["JOS04", "JOB04", "JOL04", "JON04", "JHN04"],
      },
    },
    {
      name: "how far the numbers go is taken on trust, because nothing here can know it",
      code: "JHN100",
      answer: {
        known: true,
        suggestions: ["JHN100"],
      },
    },
    {
      name: "a number padded further than the book asks for",
      code: "JHN004",
      answer: {
        known: false,
        suggestions: ["JHN04"],
      },
    },
    {
      name: "a tail that is not a number at all is answered rather than thrown at",
      code: "JHNx",
      answer: {
        known: false,
        suggestions: ["JHN01"],
      },
    },
    {
      name: "the whole name written out with the number after it",
      code: "JOHN4",
      answer: {
        known: false,
        suggestions: ["JHN04"],
      },
    },
    {
      name: "nothing at all names no book, so there is nothing to offer",
      code: "",
      answer: {
        known: false,
        suggestions: [],
      },
    },
  ];
  return cases;
}

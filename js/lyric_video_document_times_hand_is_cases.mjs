import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document_times_hand_is_cases() {
  "Timing documents in each of the states one is actually found in, with whether the moments in it are a person's and so must not be written over.";
  "★ THE PAIR THAT CARRIES THE WHOLE POINT IS THE THIRD AND THE FOURTH, WHICH ARE THE SAME TIMES AND OPPOSITE ANSWERS. Both hold lines a twentieth of a second short of the one below, because a machine writes its times through the very function the tapping desk writes through; nothing in the numbers tells them apart and nothing ever will. Only the word one of them carries about itself separates them, which is the reason the word was added.";
  "The unmarked document answering yes is the case that keeps the guess pointing the safe way. Every document that existed before the mark did carries no mark, and some of those were tapped by hand, so silence has to read as a person's.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      name: "a document straight from the drafting, where each line ends on the very moment the next begins because both come out of the same share",
      document: {
        lines: [
          {
            start: 2,
            end: 6.33,
            text: "one",
          },
          {
            start: 6.33,
            end: 10.67,
            text: "two",
          },
          {
            start: 10.67,
            end: 15,
            text: "three",
          },
        ],
      },
      hand: false,
    },
    {
      name: "a drafted document that somehow also says a machine timed it, where the spread answers first and the mark changes nothing",
      document: {
        times_from: "machine",
        lines: [
          {
            start: 2,
            end: 6.33,
            text: "one",
          },
          {
            start: 6.33,
            end: 10.67,
            text: "two",
          },
          {
            start: 10.67,
            end: 15,
            text: "three",
          },
        ],
      },
      hand: false,
    },
    {
      name: "a document a machine timed and said so, whose times a later and better listening is free to replace",
      document: {
        times_from: "machine",
        lines: [
          {
            start: 1.76,
            end: 3.65,
            text: "one",
          },
          {
            start: 3.7,
            end: 6.65,
            text: "two",
          },
          {
            start: 6.7,
            end: 10.79,
            text: "three",
          },
        ],
      },
      hand: false,
    },
    {
      name: "a document holding those very same moments and saying nothing about where they came from, which is an afternoon of somebody's listening until proven otherwise",
      document: {
        lines: [
          {
            start: 1.76,
            end: 3.65,
            text: "one",
          },
          {
            start: 3.7,
            end: 6.65,
            text: "two",
          },
          {
            start: 6.7,
            end: 10.79,
            text: "three",
          },
        ],
      },
      hand: true,
    },
    {
      name: "a document somebody tapped as far as the second line and left, which is an interrupted afternoon rather than a draft",
      document: {
        lines: [
          {
            start: 1.76,
            end: 3.65,
            text: "one",
          },
          {
            start: 3.7,
            end: 6.65,
            text: "two",
          },
          {
            start: null,
            end: null,
            text: "three",
          },
        ],
      },
      hand: true,
    },
    {
      name: "a document marked as some other hand's, which is not the one word the guard stands down for and so is read as a person's",
      document: {
        times_from: "somebody",
        lines: [
          {
            start: 1.76,
            end: 3.65,
            text: "one",
          },
          {
            start: 3.7,
            end: 6.65,
            text: "two",
          },
          {
            start: 6.7,
            end: 10.79,
            text: "three",
          },
        ],
      },
      hand: true,
    },
  ];
  return cases;
}

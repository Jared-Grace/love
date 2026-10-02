import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document_times_hand_is_cases() {
  "Timing documents in each of the states one is actually found in, with whether the moments in it are a person's and so must not be written over.";
  "★ THE PAIR THAT CARRIES THE WHOLE POINT IS THE THIRD AND THE FOURTH, WHICH ARE THE SAME TIMES AND OPPOSITE ANSWERS. Both hold lines a twentieth of a second short of the one below, because a machine writes its times through the very function the tapping desk writes through; nothing in the numbers tells them apart and nothing ever will. Only the word one of them carries about itself separates them, which is the reason the word was added.";
  "The unmarked document answering yes is the case that keeps the guess pointing the safe way. Every document that existed before the mark did carries no mark, and some of those were tapped by hand, so silence has to read as a person's.";
  "★ THE LAST CASE IS THE ONE THIS LIST CLAIMED TO HOLD AND DID NOT, AND IT IS THE ONLY ONE HERE THAT HAS EVER DISAGREED WITH THE CODE. The first line above has said since it was written that these are the states a document is actually found in. A document holding lines and no moments anywhere is such a state, and on 2026-10-02 sixteen of them were found at once - Psalm 90 through 104 and 136 - each answering that a person had timed it, so the one command able to listen to them refused every one. Six written cases agreeing is not cover for a seventh nobody wrote: the fault sat in a neighbouring gate about keeping copies, which could only report that sixteen protected documents had no copy kept, never that there was nothing in them worth protecting.";
  "★ AND THEN IT HAPPENED AGAIN, WHICH IS WHAT THE EIGHTH CASE IS. Every drafted document written down above ends each line on the very moment the next begins, because that is how the drafting divides a song up and it is what the first reading of a draft looks for. A step that does not land on a whole hundredth of a second does not come out that way: the starts round one way and the ends the other, a few pairs fail to meet, and the document reads as a person's. Two were sitting like that - bsb_PSA_106_1-12_take1 and bsb_PSA_131_take1 - and the eighth case is their shape. The lesson is the one above repeated: a corpus of states is only as complete as somebody's imagination of what a draft can look like, and the draft had a second shape nobody had drawn.";
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
    {
      name: "a document whose lines are words and nothing else, which has never been near the tapping desk and so holds nobody's work to lose",
      document: {
        lines: [
          {
            text: "one",
          },
          {
            text: "two",
          },
          {
            text: "three",
          },
        ],
      },
      hand: false,
    },
    {
      name: "a draft whose step does not land on a whole hundredth of a second, so a few of its lines end a hundredth away from the next start and the flush reading alone calls it somebody's work",
      document: {
        lines: [
          {
            start: 2,
            end: 6.36,
            text: "one",
          },
          {
            start: 6.36,
            end: 10.72,
            text: "two",
          },
          {
            start: 10.73,
            end: 15.09,
            text: "three",
          },
          {
            start: 15.09,
            end: 19.45,
            text: "four",
          },
        ],
      },
      hand: false,
    },
  ];
  return cases;
}

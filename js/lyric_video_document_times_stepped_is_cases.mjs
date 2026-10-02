import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document_times_stepped_is_cases() {
  "Timing documents in each of the states one is actually found in, with whether every line of it begins the same distance after the last, which is a draft's arithmetic rather than anybody listening.";
  "★ THE ONE THAT MATTERS IS THE FIRST, BECAUSE IT IS THE DOCUMENT THE FLUSH READING LET THROUGH. Its starts are rounded from a step of 4.3625 seconds, so they come out of the file alternating 4.36 and 4.37 and no two of its line ends can be relied on to match. That shape was defended as a person's work for as long as it existed, and the command that could have timed it refused every time, saying somebody's ear was better than its own.";
  "★ THE ONE THAT MATTERS NEXT IS THE TAPPED DOCUMENT ANSWERING NO, BECAUSE A WRONG YES OVERWRITES AN AFTERNOON NOTHING CAN REDO AND REPORTS SUCCESS. Every other wrong answer costs a psalm that stays untimed until somebody runs the command again, which anybody notices.";
  "Two hundredths of a second between gaps is written down as a separate case from one, because one is the whole of what rounding a constant step can produce and two is not - that is the edge of the only allowance here, and it is the arithmetic's edge rather than a chosen one.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      name: "a draft whose step does not land on a hundredth, so its starts alternate 4.36 and 4.37 and its line ends cannot be relied on to match - the document the flush reading let through",
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
      stepped: true,
    },
    {
      name: "a draft whose step lands exactly on a hundredth, which both readings of the drafting recognise",
      document: {
        lines: [
          {
            start: 2,
            end: 6.5,
            text: "one",
          },
          {
            start: 6.5,
            end: 11,
            text: "two",
          },
          {
            start: 11,
            end: 15.5,
            text: "three",
          },
          {
            start: 15.5,
            end: 20,
            text: "four",
          },
        ],
      },
      stepped: true,
    },
    {
      name: "a document somebody has tapped, where the lines are as long as they are sung and no two gaps are alike",
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
            end: 10.74,
            text: "three",
          },
          {
            start: 10.79,
            end: 14.2,
            text: "four",
          },
        ],
      },
      stepped: false,
    },
    {
      name: "a document tapped as far as the third line and left, which is an afternoon interrupted rather than a draft and must not be written over",
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
          {
            start: null,
            end: null,
            text: "four",
          },
        ],
      },
      stepped: false,
    },
    {
      name: "three lines evenly stepped, which is two gaps of arithmetic and too little to tell a sum from a coincidence",
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
            start: 10.72,
            end: 15.08,
            text: "three",
          },
        ],
      },
      stepped: false,
    },
    {
      name: "gaps two hundredths of a second apart, which is one more than rounding a constant step can account for, so the evenness is somebody else's doing",
      document: {
        lines: [
          {
            start: 2,
            end: 6.36,
            text: "one",
          },
          {
            start: 6.36,
            end: 10.74,
            text: "two",
          },
          {
            start: 10.74,
            end: 15.1,
            text: "three",
          },
          {
            start: 15.1,
            end: 19.46,
            text: "four",
          },
        ],
      },
      stepped: false,
    },
    {
      name: "a draft with one line moved onto the beat it is sung on, which is the first of somebody's work in it and answers no on the gap that changed",
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
            end: 15.35,
            text: "three",
          },
          {
            start: 15.4,
            end: 19.76,
            text: "four",
          },
        ],
      },
      stepped: false,
    },
  ];
  return cases;
}

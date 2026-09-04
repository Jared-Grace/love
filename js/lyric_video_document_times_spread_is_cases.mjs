import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document_times_spread_is_cases() {
  "Timing documents in each of the states one is actually found in, with whether the times in it are still the even spread it was drafted with.";
  "★ THE ONE THAT MATTERS IS THE TIMED DOCUMENT ANSWERING NO, BECAUSE A WRONG YES DESTROYS WORK THAT CANNOT BE REDONE BY ANY COMMAND. Every other wrong answer costs a psalm that stays untimed until somebody runs the command again, which anybody notices. A wrong yes overwrites an afternoon of tapping with an even spread and reports success.";
  "The timed lines are written the way the tapping desk writes them, a twentieth of a second short of the line below, because that sliver is the entire difference between the two states and a corpus that rounded it away would prove nothing.";
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
      spread: true,
    },
    {
      name: "a document somebody has tapped, where every line stops a twentieth of a second short so that two lines never stand on one frame",
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
      spread: false,
    },
    {
      name: "a document tapped as far as the second line and left, which is an afternoon interrupted rather than a draft and must not be written over",
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
      spread: false,
    },
    {
      name: "a document of one line, which has nothing below it to be flush against and so cannot be told either way",
      document: {
        lines: [
          {
            start: 2,
            end: 15,
            text: "one",
          },
        ],
      },
      spread: false,
    },
    {
      name: "a document whose lines were tapped flush by hand for the first pair and left drafted after, which is still somebody's work in it and answers no on the pair that disagrees",
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
            start: 10.72,
            end: 15,
            text: "three",
          },
        ],
      },
      spread: false,
    },
  ];
  return cases;
}

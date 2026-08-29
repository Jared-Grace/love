import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_lines_timed_cases() {
  arguments_assert(arguments, 0);
  ("Worked passages handed to the line builder and the lines each one has to come back as, written around the moments nobody tapped.");
  ("THE FAULT THESE HOLD DOWN LEFT NOTHING BEHIND TO FIND IT BY. An untapped line arrives here as nothing, and nothing times a hundred is nothing as far as arithmetic is concerned, so rounding quietly turned it into second zero - the one moment in a song that never looks wrong on its own. The document that came out was valid, the gates were green, and the first thing that ever mentioned it was a finished video with the closing Hallelujah of Psalm a hundred and forty-eight standing over every other line from the first frame to the last.");
  ("Second zero is written down as an ordinary answer too, in its own case. A guard against a stray zero that also refused a real one would be trading this fault for its opposite - a first line tapped on the very first note is somebody's actual tap, and the two are told apart by whether anybody tapped, never by the number.");
  let cases = [
    {
      starts: [2.69, null],
      texts: ["Hallelujah!", "Hallelujah!"],
      duration: 30,
      lines: [
        {
          start: 2.69,
          end: 30,
          text: "Hallelujah!",
        },
        {
          start: null,
          end: null,
          text: "Hallelujah!",
        },
      ],
      why: "a line nobody tapped comes back with no times at all rather than with zero, which is the whole of the fault that shipped a wrong video",
    },
    {
      starts: [0, 2.5],
      texts: ["Praise the LORD", "from the heavens"],
      duration: 10,
      lines: [
        {
          start: 0,
          end: 2.45,
          text: "Praise the LORD",
        },
        {
          start: 2.5,
          end: 10,
          text: "from the heavens",
        },
      ],
      why: "second zero is a real tap and is kept, so the guard above cannot be written as a guard against the number",
    },
    {
      starts: [1, null, null, 5],
      texts: ["one", "two", "three", "four"],
      duration: 20,
      lines: [
        {
          start: 1,
          end: 4.95,
          text: "one",
        },
        {
          start: null,
          end: null,
          text: "two",
        },
        {
          start: null,
          end: null,
          text: "three",
        },
        {
          start: 5,
          end: 20,
          text: "four",
        },
      ],
      why: "a line before a run of untapped lines ends where the next tapped line begins, because leaning on the line straight after it would be leaning on nothing",
    },
    {
      starts: [1, 5, null, null],
      texts: ["one", "two", "three", "four"],
      duration: 20,
      lines: [
        {
          start: 1,
          end: 4.95,
          text: "one",
        },
        {
          start: 5,
          end: 20,
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
      why: "somebody who stopped tapping partway leaves the last line they did tap running to the end of the song, which is the ordinary last-line rule reached through a run of nothing",
    },
    {
      starts: [null, null],
      texts: ["one", "two"],
      duration: 10,
      lines: [
        {
          start: null,
          end: null,
          text: "one",
        },
        {
          start: null,
          end: null,
          text: "two",
        },
      ],
      why: "a passage opened and never tapped at all comes back with nothing timed, so saving it cannot write a document claiming the whole song was heard at once",
    },
  ];
  return cases;
}

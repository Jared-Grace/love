import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_lines_timed_cases() {
  arguments_assert(arguments, 0);
  ("Worked passages handed to the line builder and the lines each one has to come back as, written around the moments nobody tapped.");
  ("THE FAULT THESE HOLD DOWN LEFT NOTHING BEHIND TO FIND IT BY. An untapped line arrives here as nothing, and nothing times a hundred is nothing as far as arithmetic is concerned, so rounding quietly turned it into second zero - the one moment in a song that never looks wrong on its own. The document that came out was valid, the gates were green, and the first thing that ever mentioned it was a finished video with the closing Hallelujah of Psalm a hundred and forty-eight standing over every other line from the first frame to the last.");
  ("Second zero is written down as an ordinary answer too, in its own case. A guard against a stray zero that also refused a real one would be trading this fault for its opposite - a first line tapped on the very first note is somebody's actual tap, and the two are told apart by whether anybody tapped, never by the number.");
  ("THE MOMENTS WITH REAL DIGITS ON THEM ARE HERE BECAUSE NINE WRONG VERSIONS WERE WRITTEN OUT AND CHECKED AGAINST THESE CASES, AND ONE OF THEM WAS REFUSED BY NOTHING. Every case above was built out of tidy numbers - a second and a half, five seconds - and a version that did no rounding at all answered all of them exactly right, while the paragraph about rounding to hundredths sat in the code being enforced by no case whatever. A moment that has actually come off somebody's hand never looks like five; it looks like five point eight seven two one one. So one case carries the untidy digits on a beginning, on an ending worked out from the next beginning, and on the length of the song - which is three places the rounding has to happen and only one case to hold all three.");
  ("THAT CHECK WAS RUN AGAIN LATER AGAINST SIXTEEN WRONG VERSIONS, AND ONE MORE GOT THROUGH: the version that rounds the next beginning first and takes the sliver off afterwards, instead of taking the sliver off and rounding the result. Those two are the same sum in real arithmetic and they are not the same sum in a machine, because five hundredths is not a number a machine can hold exactly. Measured over three million moments spread across three minutes of song, they disagree on about a third of them, and what comes out of the wrong one is an ending like a hundred and seventeen point eight eight zero zero zero zero zero zero zero zero zero zero one. Nothing about that is wrong by a hundredth of a second - it is wrong by nothing anybody could hear - but it is written into a document that a person is meant to open and correct by hand, and the paragraph in the code about rounding says in as many words that such a document should not carry digits nobody can check. So the last case carries a next beginning chosen because the two orders part company on it.");
  ("THE FIRST OF THOSE TWO SWEEPS WAS ALREADY WRITTEN UP HERE AS A CHECK THIS CORPUS HAD PASSED, WHICH IS THE THING WORTH TAKING AWAY. A sweep like this answers for the wrong versions somebody thought of and says nothing whatever about the ones they did not, so a corpus that has been through one is not a corpus that is finished - it is a corpus that is finished against a list. Both of the holes found here were invisible for the same reason: every case that existed happened to share a property - tidy digits the first time, digits that survive either order of rounding the second - and a property shared by every case is exactly what a case cannot test.");
  ("THE WRONG VERSIONS ARE NO LONGER A PARAGRAPH ABOUT THE PAST. All sixteen are written out in data/given/red_proofs/",
    fn_name("lyric_timing_lines_timed"),
    ".mjs, and ",
    fn_name("red_proofs_gate_run"),
    " asks every one of them of every case here on each run - so a case removed later, or a version that stops being wrong, is said out loud rather than leaving this account describing a check nobody is doing any more. Everything above records what was learnt from the two sweeps; the file is what makes a third one cost nothing.");
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
    {
      starts: [2.69134, 5.87211],
      texts: ["Praise Him", "all His angels"],
      duration: 12.3456,
      lines: [
        {
          start: 2.69,
          end: 5.82,
          text: "Praise Him",
        },
        {
          start: 5.87,
          end: 12.35,
          text: "all His angels",
        },
      ],
      why: "moments as they actually arrive off a hand, with the digits nobody can tap to still on them, so an ending worked out from one of them and the length of the song are cut down as well as a beginning",
    },
    {
      starts: [31.20418, 34.597814083099365],
      texts: ["Praise Him, sun and moon", "praise Him, all you shining stars"],
      duration: 60,
      lines: [
        {
          start: 31.2,
          end: 34.55,
          text: "Praise Him, sun and moon",
        },
        {
          start: 34.6,
          end: 60,
          text: "praise Him, all you shining stars",
        },
      ],
      why: "the sliver is taken off the next beginning before the rounding rather than after it, and this next beginning is one of the roughly one in three where those two orders part company - taking it off afterwards gives an ending of thirty-four point five five followed by fourteen more digits, which is right to the hundredth and still wrong to put in a document somebody is going to open",
    },
  ];
  return cases;
}

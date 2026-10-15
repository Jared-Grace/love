import { arguments_assert } from "./arguments_assert.mjs";
export function giveaway_psalms_songs_rows_verses_unsung_cases() {
  arguments_assert(arguments, 0);
  ("Small sets of sung recordings, each with the lengths of the chapters they name, and what the coverage of those chapters ought to come back as.");
  ("★ THE CASES ARE THE WHOLE EVIDENCE THIS WORKS, BECAUSE THE RECORD ON THIS DISK IS ALMOST ENTIRELY WHOLE. Eighty three of its eighty four sung chapters have nothing missing, so a run over the record prints one line of finding - and a judging that had stopped looking would print none and read as better news. The cases are where a gap is made on purpose and watched to come back.");
  ("★ THE CHAPTER LENGTHS ARE WRITTEN OUT BY HAND, AND THEY ARE THE REAL LENGTHS OF THOSE PSALMS. A case a reader cannot check against the book is a copy of whatever the code did the day it was written. Psalm 103 has twenty two verses and Psalm 104 has thirty five, and both of those are why the cases about them look as they do.");
  ("The two psalms that really are cut inside a verse are both here, because they are the two shapes that a reader counting whole verses gets wrong in opposite directions: one joins at a half and the other joins at a third.");
  ("The file names are the names that are really on the disk, down to the counter in brackets that marks a second take, so that a case cannot pass by naming a shape the folder never produces.");
  let cases = [
    {
      rows: [
        {
          file_name: "Psalm_20_1-7a.wav",
        },
        {
          file_name: "Psalm_20_7b-9.wav",
        },
      ],
      verse_last_by_chapter: {
        20: 9,
      },
      report: {
        chapters: [
          {
            chapter: 20,
            verse_last: 9,
            songs: 2,
            missing: [],
          },
        ],
        chapters_unknown: [],
        names_unread: [],
      },
      why: "two recordings joining at a half verse sing the chapter whole, so a reader counting in whole verses would either call verse seven missing or call half of it the whole of it",
    },
    {
      rows: [
        {
          file_name: "Psalm_104_14-24b.wav",
        },
        {
          file_name: "Psalm_104_24c-31.wav",
        },
      ],
      verse_last_by_chapter: {
        104: 35,
      },
      report: {
        chapters: [
          {
            chapter: 104,
            verse_last: 35,
            songs: 2,
            missing: ["1-13", "32-35"],
          },
        ],
        chapters_unknown: [],
        names_unread: [],
      },
      why: "a verse cut in three joins at its third part as readily as at its second, and the parts of a verse are whatever the names say they are rather than halves; the gaps before and after are what is really unsung there",
    },
    {
      rows: [
        {
          file_name: "Psalm_103_1-11.wav",
        },
        {
          file_name: "Psalm_103_13-18.wav",
        },
        {
          file_name: "Psalm_103_19-22.wav",
        },
      ],
      verse_last_by_chapter: {
        103: 22,
      },
      report: {
        chapters: [
          {
            chapter: 103,
            verse_last: 22,
            songs: 3,
            missing: ["12"],
          },
        ],
        chapters_unknown: [],
        names_unread: [],
      },
      why: "one verse skipped between two ranges is the fault this exists to find, and it is the one real gap in the record as it stands - psalm 103 verse 12 has never been sung",
    },
    {
      rows: [
        {
          file_name: "Psalm_12_1-7a.wav",
        },
      ],
      verse_last_by_chapter: {
        12: 12,
      },
      report: {
        chapters: [
          {
            chapter: 12,
            verse_last: 12,
            songs: 1,
            missing: ["7b-12"],
          },
        ],
        chapters_unknown: [],
        names_unread: [],
      },
      why: "a chapter sung as far as the middle of a verse is missing the rest of that verse, said with the letter, because that is the word the next recording will be named with",
    },
    {
      rows: [
        {
          file_name: "Psalm_7_2-12.wav",
        },
        {
          file_name: "Psalm_7_2-12 (1).wav",
        },
      ],
      verse_last_by_chapter: {
        7: 17,
      },
      report: {
        chapters: [
          {
            chapter: 7,
            verse_last: 17,
            songs: 2,
            missing: ["1", "13-17"],
          },
        ],
        chapters_unknown: [],
        names_unread: [],
      },
      why: "two takes of one range cover it once rather than twice, and a chapter can be missing its opening as well as its end, each said as its own run",
    },
    {
      rows: [
        {
          file_name: "Psalm_93.wav",
        },
      ],
      verse_last_by_chapter: {
        93: 5,
      },
      report: {
        chapters: [
          {
            chapter: 93,
            verse_last: 5,
            songs: 1,
            missing: [],
          },
        ],
        chapters_unknown: [],
        names_unread: [],
      },
      why: "a recording that names no verses is the whole chapter, so it covers every verse the chapter has rather than none of them",
    },
    {
      rows: [
        {
          file_name: "Psalm_7_1-17.wav",
        },
      ],
      verse_last_by_chapter: {
        7: 17,
        66: 18,
      },
      report: {
        chapters: [
          {
            chapter: 7,
            verse_last: 17,
            songs: 1,
            missing: [],
          },
        ],
        chapters_unknown: [],
        names_unread: [],
      },
      why: "a chapter nothing sings at all is left out rather than answered as wholly unsung, because whether anything is sung is the question the withholding already asks and answering it twice in two voices is how the two would come to disagree",
    },
    {
      rows: [
        {
          file_name: "Psalm_59_1-5.wav",
        },
      ],
      verse_last_by_chapter: {},
      report: {
        chapters: [],
        chapters_unknown: [59],
        names_unread: [],
      },
      why: "a chapter whose length was not handed in is named rather than guessed at, because the gap in a chapter of unknown length is unknowable and a guess prints a wrong answer in the shape of a right one",
    },
    {
      rows: [
        {
          file_name: "Psalm_20_9-3.wav",
        },
      ],
      verse_last_by_chapter: {
        20: 9,
      },
      report: {
        chapters: [],
        chapters_unknown: [],
        names_unread: ["Psalm_20_9-3.wav"],
      },
      why: "a range running backwards is named rather than passed over, because a chapter judged on singing that was quietly dropped comes back short with nothing said",
    },
    {
      rows: [
        {
          file_name: "Agape.wav",
        },
      ],
      verse_last_by_chapter: {
        20: 9,
      },
      report: {
        chapters: [],
        chapters_unknown: [],
        names_unread: [],
      },
      why: "a name that is not a psalm recording at all is passed over without a word, because the folder holds songs under their titles and the walk that writes this record admits only names this same reading accepts",
    },
  ];
  return cases;
}

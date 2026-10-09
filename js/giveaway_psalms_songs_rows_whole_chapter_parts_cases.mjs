export function giveaway_psalms_songs_rows_whole_chapter_parts_cases() {
  "Written rows for the check that no sung psalm goes up at two addresses, one row to a case, each saying which file names it expects back.";
  "★ THESE ARE THE ONLY PLACE THE FAULT IS EVER SEEN, BECAUSE THE RECORD ON THIS DISK HAS NONE. Thirty-one of its passages start at verse one and not one of them reaches its chapter's last verse, so the check passes over the real record by printing nothing, and a check that had stopped working would print nothing too. Without a case that comes back non-empty there is no evidence at all that a psalm arriving at two permanent addresses would be caught rather than waved through.";
  "★ EACH CASE IS CORRECT ON EVERY AXIS BUT THE ONE IT IS FOR, WHICH HAD TO BE SAID BECAUSE THE LAST SET OF CASES ON THIS RECORD WAS NOT. Two of those were written with a passage code that did not match their own file name, which nothing yet compared, and the day a check started comparing them each case named two faults and could no longer say which branch it was holding. So every file name here is a name the reading actually accepts, and every passage code is the one the naming spells for it.";
  "★ ONE CHAPTER LENGTH HERE IS DELIBERATELY NOT THE REAL ONE, AND IT IS THE HALF-VERSE CASE. Psalm 95 runs to verse eleven, so its singing of verses one to seven-a cannot reach the end of it however the letter is read, and no real passage on this disk is cut inside a verse at the end of its own chapter: the six halves that exist are 7a, 7b, 24b, 24c, 13a and 13b, in psalms running to eleven and twenty-one verses. So the only way to watch the letter being read away as a number is to shorten the chapter to seven on paper. The alternative was to leave the branch untested on the grounds that today's data cannot reach it, which is how a branch nobody has seen fire comes to be trusted.";
  "The chapter lengths are given beside the rows rather than fetched, which is the whole reason the judging was split away from the fetching.";
  "Psalm 93 is the case that fires, and it is the real one: Psalm_93_1-5.wav and Psalm_93.wav both sit on this disk, and the psalm has exactly five verses, so they are one psalm under two codes.";
  let cases = [
    {
      rows: [
        {
          file_name: "Psalm_93_1-5.wav",
          passage_code: "PSA093_001-005",
          name_published: "PSA093_001-005_engbsb_song_take00.wav",
        },
      ],
      verse_last_by_chapter: {
        93: 5,
      },
      file_names: "Psalm_93_1-5.wav",
      why: "Psalm 93 has five verses, so a range of one to five is the whole chapter said the long way, and its code would sit beside the bare PSA093 of the same psalm sung again.",
    },
    {
      rows: [
        {
          file_name: "Psalm_93.wav",
          passage_code: "PSA093",
          name_published: "PSA093_engbsb_song_take00.wav",
        },
      ],
      verse_last_by_chapter: {
        93: 5,
      },
      file_names: "",
      why: "A name with no range at all is the shape the naming rule asks for, so it is the thing the other case should be renamed to and never itself a fault.",
    },
    {
      rows: [
        {
          file_name: "Psalm_92_1-8.wav",
          passage_code: "PSA092_001-008",
          name_published: "PSA092_001-008_engbsb_song_take00.wav",
        },
      ],
      verse_last_by_chapter: {
        92: 15,
      },
      file_names: "",
      why: "Psalm 92 runs to verse fifteen, so a range stopping at eight is a genuine part of its chapter and the range is the only thing saying which part.",
    },
    {
      rows: [
        {
          file_name: "Psalm_95_1-7a.wav",
          passage_code: "PSA095_001-007a",
          name_published: "PSA095_001-007a_engbsb_song_take00.wav",
        },
      ],
      verse_last_by_chapter: {
        95: 7,
      },
      file_names: "",
      why: "A range ending 7a stops halfway through verse seven, so a chapter said here to end at seven is still not covered - the length is shortened on paper because no real psalm is cut inside its own last verse, and this is the case that would fire if the letter were ever read away as a number.",
    },
    {
      rows: [
        {
          file_name: "Psalm_119_Aleph.wav",
          passage_code: "PSA119_001-008",
          name_published: "PSA119_001-008_engbsb_song_take00.wav",
        },
      ],
      verse_last_by_chapter: {
        119: 176,
      },
      file_names: "",
      why: "A stanza name carries a range the file never spells, and the longest chapter in the Bible is nowhere near covered by its first eight verses - so a range arrived at by looking a name up is judged the same way as one that was written down.",
    },
    {
      rows: [
        {
          file_name: "Psalm_93_1-5.wav",
          passage_code: "PSA093_001-005",
          name_published: "PSA093_001-005_engbsb_song_take00.wav",
        },
      ],
      verse_last_by_chapter: {},
      file_names: "",
      why: "With no length given for the chapter there is no fact to judge against, and the row is passed over rather than accused - guessing here is what would put a wrong accusation on a name that can never be changed.",
    },
    {
      rows: [
        {
          file_name: "Abaddon.wav",
          passage_code: "PSA093",
          name_published: "PSA093_engbsb_song_take00.wav",
        },
      ],
      verse_last_by_chapter: {
        93: 5,
      },
      file_names: "",
      why: "A file name the reading cannot place names no chapter and no verses, so there is nothing here to compare and the row is left to the checks that do read this record against itself.",
    },
  ];
  return cases;
}

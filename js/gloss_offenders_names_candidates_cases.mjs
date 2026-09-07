import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_offenders_names_candidates_cases() {
  "A findings dump written by hand, small enough to read whole, and the sheet of name candidates it must produce.";
  "Every judgment the sheet makes is present here once. A word written with a capital in every finding stays; the same word written once in small letters leaves, and it leaves on the strength of that one sighting alone. A word the app's own sentence calls a name is marked proven; a word whose sentence merely mentions it is not. The count of sightings that named no root at all is kept apart from the count of all sightings, because those are the ones no other queue reads.";
  "Two spellings of one word differing only in their capitals are one row with both spellings kept, and three chapters naming the same word are one row with three chapters. A sheet that repeated a word once per chapter would bury the commonest names under their own commonness.";
  "The sightings counts are deliberately all different, so the order the rows come back in is a real check on the ranking rather than an accident of how ties happen to settle.";
  arguments_assert(arguments, 0);
  let moises_named =
    "‘Moises’ is the name of the man who led Israel out of Egypt.";
  let saulo_seen = "‘Saulo’ is Saul, before his renaming.";
  let efeso_seen = "‘Efeso’ is Ephesus, a large port city.";
  let cefas_named = "‘Cefas’ is the name Jesus gave Simon.";
  let offenders = [
    {
      chapter_code: "MAT01",
      found: [
        {
          word: "Moises",
          explain: moises_named,
          claimed: "",
          root: "isi",
          kind: "silent",
        },
        {
          word: "Saulo",
          explain: saulo_seen,
          claimed: "ulo",
          root: "ulo",
          kind: "claimed",
        },
        {
          word: "Efeso",
          explain: efeso_seen,
          claimed: "",
          root: "peso",
          kind: "silent",
        },
        {
          word: "gugma",
          explain: "‘Gugma’ is love.",
          claimed: "gugma",
          root: "higugma",
          kind: "claimed",
        },
        {
          word: "Hinumdomi",
          explain: "‘Hinumdomi’ is remember, said as a command.",
          claimed: "hinumdom",
          root: "hinumdom",
          kind: "claimed",
        },
      ],
    },
    {
      chapter_code: "MAT02",
      found: [
        {
          word: "Moises",
          explain: "‘Moises’ stands here again.",
          claimed: "",
          root: "isi",
          kind: "silent",
        },
        {
          word: "Saulo",
          explain: "‘Saulo’ stands here again.",
          claimed: "",
          root: "ulo",
          kind: "silent",
        },
        {
          word: "Efeso",
          explain: "‘Efeso’ stands here again.",
          claimed: "",
          root: "peso",
          kind: "silent",
        },
        {
          word: "hinumdomi",
          explain: "Remember it, said in the middle of a line.",
          claimed: "hinumdom",
          root: "hinumdom",
          kind: "claimed",
        },
        {
          word: "Cefas",
          explain: cefas_named,
          claimed: "",
          root: "sipa",
          kind: "silent",
        },
      ],
    },
    {
      chapter_code: "MAT03",
      found: [
        {
          word: "Moises",
          explain: "‘Moises’ stands here a third time.",
          claimed: "",
          root: "isi",
          kind: "silent",
        },
        {
          word: "MOISES",
          explain: "The same word, written in capitals.",
          claimed: "",
          root: "isi",
          kind: "silent",
        },
        {
          word: "Saulo",
          explain: "‘Saulo’ stands here a third time.",
          claimed: "",
          root: "ulo",
          kind: "silent",
        },
      ],
    },
  ];
  let wanted = [
    {
      word: "moises",
      sightings: 4,
      silent: 4,
      declared: true,
      root: "isi",
      spellings: ["Moises", "MOISES"],
      chapters: ["MAT01", "MAT02", "MAT03"],
      explain: moises_named,
    },
    {
      word: "saulo",
      sightings: 3,
      silent: 2,
      declared: false,
      root: "ulo",
      spellings: ["Saulo"],
      chapters: ["MAT01", "MAT02", "MAT03"],
      explain: saulo_seen,
    },
    {
      word: "efeso",
      sightings: 2,
      silent: 2,
      declared: false,
      root: "peso",
      spellings: ["Efeso"],
      chapters: ["MAT01", "MAT02"],
      explain: efeso_seen,
    },
    {
      word: "cefas",
      sightings: 1,
      silent: 1,
      declared: true,
      root: "sipa",
      spellings: ["Cefas"],
      chapters: ["MAT02"],
      explain: cefas_named,
    },
  ];
  let r = {
    offenders,
    wanted,
  };
  return r;
}

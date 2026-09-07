import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_names_filter_checked_cases() {
  "A findings dump and a list of rows a vocabulary test removed, written by hand so that the test and the app's sentences disagree in both directions at once, with the split they must produce.";
  "Three words carry the whole of it. Moises is removed by the test and proven by its sentence, so the two agree. Efeso is removed by the test and its sentence never uses the word name, so it rests on the test alone - and Efeso is a name, which is why the unproven list must never be read as a list of mistakes. Canaan is proven by its sentence and the test did not remove it, which is the failure that has no other witness.";
  "Both directions are here on purpose. A join written the wrong way round still answers plausibly when only one direction is present in the corpus, and the count it returns looks the same.";
  arguments_assert(arguments, 0);
  let offenders = [
    {
      chapter_code: "MAT01",
      found: [
        {
          word: "Moises",
          explain:
            "‘Moises’ is the name of the man who led Israel out of Egypt.",
          claimed: "",
          root: "isi",
          affixes: "mo-~-s~",
          kind: "silent",
        },
        {
          word: "Efeso",
          explain: "‘Efeso’ is Ephesus, a large port city.",
          claimed: "",
          root: "peso",
          affixes: "i-~",
          kind: "silent",
        },
        {
          word: "Canaan",
          explain: "A proper noun, the name of a place. No further breakdown.",
          claimed: "",
          root: "kana",
          affixes: "-an~",
          kind: "silent",
        },
      ],
    },
  ];
  let names_taken = [
    {
      word: "Moises",
      sightings: 1,
      chapters: ["MAT01"],
      root: "isi",
      affixes: "mo-~-s~",
    },
    {
      word: "Efeso",
      sightings: 1,
      chapters: ["MAT01"],
      root: "peso",
      affixes: "i-~",
    },
  ];
  let wanted = {
    taken_total: 2,
    declared_total: 2,
    proven_total: 1,
    unproven_total: 1,
    missed_total: 1,
    proven_words: ["Moises"],
    unproven_words: ["Efeso"],
    missed_words: ["Canaan"],
  };
  let r = {
    offenders,
    names_taken,
    wanted,
  };
  return r;
}

export function ebible_index_flats_union_cases() {
  "Sets of verse lists beside the one walk that joining them should give, one case for each way the joining can be got wrong.";
  "What rests on this reading is which verse a reader is taken to next. Drop a number and somebody is walked past a verse one of their bibles holds; keep one nobody holds and they are shown a blank row with an apology for a gap that is not there. Neither shows up as an error.";
  "The numbers are the ones the bibles actually disagree about at Luke eighteen: English divides the healing of the blind man into three verses where Persian holds two, and Telugu writes a joined pair under a name that is not a number at all.";
  let english = [
    {
      chapter_code: "LUK18",
      verse_number: "40",
    },
    {
      chapter_code: "LUK18",
      verse_number: "41",
    },
    {
      chapter_code: "LUK18",
      verse_number: "42",
    },
    {
      chapter_code: "LUK19",
      verse_number: "1",
    },
  ];
  let persian = [
    {
      chapter_code: "LUK18",
      verse_number: "40",
    },
    {
      chapter_code: "LUK18",
      verse_number: "42",
    },
    {
      chapter_code: "LUK19",
      verse_number: "1",
    },
  ];
  let telugu = [
    {
      chapter_code: "LUK18",
      verse_number: "39-40",
    },
    {
      chapter_code: "LUK18",
      verse_number: "42",
    },
    {
      chapter_code: "LUK18",
      verse_number: "9",
    },
  ];
  let chapter_codes = ["LUK18", "LUK19"];
  let cases = [
    {
      chapter_codes,
      lists: [persian],
      union: [
        {
          chapter_code: "LUK18",
          verse_number: "40",
        },
        {
          chapter_code: "LUK18",
          verse_number: "42",
        },
        {
          chapter_code: "LUK19",
          verse_number: "1",
        },
      ],
      why: "a reader who chose Persian alone walks the numbers Persian has, so forty-one is never reached and there is no gap to apologise for - this is the whole reason the walk is asked of the bibles that were chosen",
    },
    {
      chapter_codes,
      lists: [persian, english],
      union: [
        {
          chapter_code: "LUK18",
          verse_number: "40",
        },
        {
          chapter_code: "LUK18",
          verse_number: "41",
        },
        {
          chapter_code: "LUK18",
          verse_number: "42",
        },
        {
          chapter_code: "LUK19",
          verse_number: "1",
        },
      ],
      why: "a reader who chose both is shown forty-one with the Persian side blank, and that is right: the blank is the honest report that the two bibles divide the passage differently, not a fault to be hidden",
    },
    {
      chapter_codes,
      lists: [telugu],
      union: [
        {
          chapter_code: "LUK18",
          verse_number: "9",
        },
        {
          chapter_code: "LUK18",
          verse_number: "42",
        },
      ],
      why: "a joined pair is filed under thirty-nine to forty, which is a name rather than a number and would give every other bible a blank row beside it, so it is left out; and nine comes before forty-two, which it would not if these were sorted as words",
    },
  ];
  return cases;
}

import { arguments_assert } from "./arguments_assert.mjs";
export function bible_verses_hyphen_words_measured_cases() {
  "Six verses of Cebuano holding one of every kind of hyphened word the reading has to tell apart, and the whole of what it should answer about them.";
  "Panan-aw is the case the whole measurement exists for: neither panan nor aw is written anywhere else in these verses, so a reading that ended a word at the hyphen would file two things the translation never says and lose the word itself. Jesu-cristo is the half-way case - cristo is written on its own and jesu is not - and it is here because a reading that only ever answered all or nothing would pass without it. Diha-diha is the case where both pieces are real words, which is what an English hyphen looks like and what stops this from simply always accusing the hyphen.";
  "Ika-tulo is the one the translation writes both ways, and ikatulo standing in another verse is what makes it so. That is a different fault from panan-aw and has a different remedy, which is why the joined spelling is counted apart from the pieces.";
  "★ THE SPACED DASH IN THE THIRD VERSE IS NOT A HYPHEN AND MUST NOT BE KEPT. A dash with a space beside it is punctuation, and a reading that took it for part of a word would weld two words together into one that was never written. Jesu-Cristo is capitalised for the same kind of reason: it has to come back as jesu-cristo or the reading is counting one word as two.";
  "★ NO TWO OF THE FOUR WORDS ARE WRITTEN THE SAME NUMBER OF TIMES, AND THAT IS DELIBERATE. The rows come back ranked by how often the word was written, and a sort asked to rank two equal things may put either first, so a corpus with a tie in it would pin down an order nothing promises and go red on a day the sort changed its mind. Four, three, two and one leaves the ranking with only one answer it can give.";
  arguments_assert(arguments, 0);
  let verses = [
    {
      chapter_code: "JHN01",
      verse_number: "1",
      text: "Ang panan-aw ni Jesu-Cristo.",
    },
    {
      chapter_code: "JHN01",
      verse_number: "2",
      text: "Si Cristo ug ang ika-tulo nga adlaw.",
    },
    {
      chapter_code: "JHN01",
      verse_number: "3",
      text: "Ang ikatulo nga panan-aw - dako.",
    },
    {
      chapter_code: "JHN01",
      verse_number: "4",
      text: "Diha-diha miadto siya diha sa balay.",
    },
    {
      chapter_code: "JHN01",
      verse_number: "5",
      text: "Ang panan-aw sa Jesu-Cristo nga ika-tulo.",
    },
    {
      chapter_code: "JHN01",
      verse_number: "6",
      text: "Nakita ni Jesu-Cristo ang panan-aw.",
    },
  ];
  let expected = {
    verses: 6,
    plain_words: 15,
    hyphened_words: 4,
    hyphened_sightings: 10,
    parts_total: 8,
    parts_standalone: 3,
    parts_never_standalone: 5,
    words_every_part_standalone: 1,
    words_joined_spelling_written: 1,
    rows: [
      {
        word: "panan-aw",
        count: 4,
        joined: "pananaw",
        joined_count: 0,
        parts: [
          {
            piece: "panan",
            alone: 0,
          },
          {
            piece: "aw",
            alone: 0,
          },
        ],
        parts_standalone: 0,
        parts_total: 2,
      },
      {
        word: "jesu-cristo",
        count: 3,
        joined: "jesucristo",
        joined_count: 0,
        parts: [
          {
            piece: "jesu",
            alone: 0,
          },
          {
            piece: "cristo",
            alone: 1,
          },
        ],
        parts_standalone: 1,
        parts_total: 2,
      },
      {
        word: "ika-tulo",
        count: 2,
        joined: "ikatulo",
        joined_count: 1,
        parts: [
          {
            piece: "ika",
            alone: 0,
          },
          {
            piece: "tulo",
            alone: 0,
          },
        ],
        parts_standalone: 0,
        parts_total: 2,
      },
      {
        word: "diha-diha",
        count: 1,
        joined: "dihadiha",
        joined_count: 0,
        parts: [
          {
            piece: "diha",
            alone: 1,
          },
          {
            piece: "diha",
            alone: 1,
          },
        ],
        parts_standalone: 2,
        parts_total: 2,
      },
    ],
  };
  let c = {
    verses,
    expected,
  };
  return c;
}

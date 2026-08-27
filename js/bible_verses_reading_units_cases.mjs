import { arguments_assert } from "./arguments_assert.mjs";
export function bible_verses_reading_units_cases() {
  "Written-out verses pinning where one chapter stops being gathered into a piece a reader or a singer may stop at.";
  "The verses are copied out here rather than read from a bible, because the bibles are downloads and are not in this repo. A gate runs in a frozen copy of the tree, so a case that asked for a chapter would pass on this machine and refuse everywhere else, which is the opposite of what a gate is for.";
  "EVERY CASE IS REAL SCRIPTURE AND NOT A SENTENCE WRITTEN TO SUIT THE RULE. The rule exists to cut recordings of these books, so a made-up verse would prove the rule against a text nobody will ever record. Each case names its translation, because the same psalm is punctuated differently in two of them and that difference is half of what is being pinned.";
  "THE CASES MUST DISAGREE WITH EACH OTHER ABOUT WHETHER A VERSE CLOSES. Cases that all close would be passed by a rule that gathered nothing, which is the rule this one replaced; cases that all run on would be passed by a rule that gathered the whole chapter into one piece.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      name: "a semicolon closes a piece, which is why this is not splitting on sentences (Psalm 136:3-5, WEB updated)",
      verses: [
        {
          verse_number: "3",
          text: "Give thanks to the Lord of lords, for his loving kindness endures forever;",
        },
        {
          verse_number: "4",
          text: "to him who alone does great wonders, for his loving kindness endures forever;",
        },
        {
          verse_number: "5",
          text: "to him who by understanding made the heavens, for his loving kindness endures forever;",
        },
      ],
      units: [
        {
          verse_numbers: ["3"],
          text: "Give thanks to the Lord of lords, for his loving kindness endures forever;",
        },
        {
          verse_numbers: ["4"],
          text: "to him who alone does great wonders, for his loving kindness endures forever;",
        },
        {
          verse_numbers: ["5"],
          text: "to him who by understanding made the heavens, for his loving kindness endures forever;",
        },
      ],
    },
    {
      name: "a genealogy runs on until a verse finishes the thought, and the whole run is one piece (Luke 3:35-38, BSB)",
      verses: [
        {
          verse_number: "35",
          text: "the son of Serug, the son of Reu, the son of Peleg, the son of Eber, the son of Shelah,",
        },
        {
          verse_number: "36",
          text: "the son of Cainan, the son of Arphaxad, the son of Shem, the son of Noah, the son of Lamech,",
        },
        {
          verse_number: "37",
          text: "the son of Methuselah, the son of Enoch, the son of Jared, the son of Mahalalel, the son of Cainan,",
        },
        {
          verse_number: "38",
          text: "the son of Enosh, the son of Seth, the son of Adam, the son of God.",
        },
      ],
      units: [
        {
          verse_numbers: ["35", "36", "37", "38"],
          text: "the son of Serug, the son of Reu, the son of Peleg, the son of Eber, the son of Shelah, the son of Cainan, the son of Arphaxad, the son of Shem, the son of Noah, the son of Lamech, the son of Methuselah, the son of Enoch, the son of Jared, the son of Mahalalel, the son of Cainan, the son of Enosh, the son of Seth, the son of Adam, the son of God.",
        },
      ],
    },
    {
      name: "what is left over when the verses run out is still a piece (Luke 3:35-37, BSB)",
      verses: [
        {
          verse_number: "35",
          text: "the son of Serug, the son of Reu, the son of Peleg, the son of Eber, the son of Shelah,",
        },
        {
          verse_number: "36",
          text: "the son of Cainan, the son of Arphaxad, the son of Shem, the son of Noah, the son of Lamech,",
        },
        {
          verse_number: "37",
          text: "the son of Methuselah, the son of Enoch, the son of Jared, the son of Mahalalel, the son of Cainan,",
        },
      ],
      units: [
        {
          verse_numbers: ["35", "36", "37"],
          text: "the son of Serug, the son of Reu, the son of Peleg, the son of Eber, the son of Shelah, the son of Cainan, the son of Arphaxad, the son of Shem, the son of Noah, the son of Lamech, the son of Methuselah, the son of Enoch, the son of Jared, the son of Mahalalel, the son of Cainan,",
        },
      ],
    },
    {
      name: "a colon closes, a comma holds, and a full stop and an exclamation each close (Psalm 8:6-9, BSB)",
      verses: [
        {
          verse_number: "6",
          text: "You made him ruler of the works of Your hands; You have placed everything under his feet:",
        },
        {
          verse_number: "7",
          text: "all sheep and oxen, and even the beasts of the field,",
        },
        {
          verse_number: "8",
          text: "the birds of the air and the fish of the sea, all that swim the paths of the seas.",
        },
        {
          verse_number: "9",
          text: "O LORD, our Lord, how majestic is Your name in all the earth!",
        },
      ],
      units: [
        {
          verse_numbers: ["6"],
          text: "You made him ruler of the works of Your hands; You have placed everything under his feet:",
        },
        {
          verse_numbers: ["7", "8"],
          text: "all sheep and oxen, and even the beasts of the field, the birds of the air and the fish of the sea, all that swim the paths of the seas.",
        },
        {
          verse_numbers: ["9"],
          text: "O LORD, our Lord, how majestic is Your name in all the earth!",
        },
      ],
    },
    {
      name: "an em dash is not a stop, so the piece waits for the question two verses on (Psalm 8:3-4, BSB)",
      verses: [
        {
          verse_number: "3",
          text: "When I behold Your heavens, the work of Your fingers, the moon and the stars, which You have set in place—",
        },
        {
          verse_number: "4",
          text: "what is man that You are mindful of him, or the son of man that You care for him?",
        },
      ],
      units: [
        {
          verse_numbers: ["3", "4"],
          text: "When I behold Your heavens, the work of Your fingers, the moon and the stars, which You have set in place— what is man that You are mindful of him, or the son of man that You care for him?",
        },
      ],
    },
    {
      name: "a sentence that finishes inside quotation has still finished (Psalm 2:3, BSB)",
      verses: [
        {
          verse_number: "3",
          text: "“Let us break Their chains and cast away Their cords.”",
        },
      ],
      units: [
        {
          verse_numbers: ["3"],
          text: "“Let us break Their chains and cast away Their cords.”",
        },
      ],
    },
    {
      name: "no verses gather into no pieces, rather than into one empty one",
      verses: [],
      units: [],
    },
  ];
  return cases;
}

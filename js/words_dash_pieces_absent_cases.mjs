export function words_dash_pieces_absent_cases() {
  "A small list of Cebuano words, standing for the words one gloss store explains, and what the reading of its dashes must come back with.";
  "★ THE DASHED WORDS ARE FOUR DIFFERENT ANSWERS, AND THAT IS WHAT MAKES THE CHECK ABLE TO DISAGREE. Neither piece of panan-aw is in the list; both pieces of pag-ayo are, since the list spells pag and spells ayo on their own; nag-ingon has one of each; and tagsa-tagsa is one piece twice over. A reading that accused every dash would fail on pag-ayo, and one that accused none would fail on panan-aw.";
  "Ang and Dios carry no dash at all and must be counted among the words while adding nothing to either list, so that the count of words and the count of dashed words cannot be read for each other.";
  "Panan-Aw is written with capitals on purpose. It is a word of the list in its own right, so it stands beside panan-aw among the dashed words; but it is the same word underneath, so the pieces it is cut into are the ones panan-aw was already cut into and the list of pieces does not grow. That is what says the reading compares in small letters.";
  "Tagsa-tagsa says the same piece twice. It is one piece missing from the list, not two, and it is named once.";
  let words = [
    "Ang",
    "Dios",
    "panan-aw",
    "Panan-Aw",
    "pag-ayo",
    "pag",
    "ayo",
    "nag-ingon",
    "ingon",
    "tagsa-tagsa",
  ];
  let expected = {
    words: 10,
    dashed: 5,
    absent: 4,
    words_dashed: [
      "panan-aw",
      "Panan-Aw",
      "pag-ayo",
      "nag-ingon",
      "tagsa-tagsa",
    ],
    words_absent: ["panan", "aw", "nag", "tagsa"],
    cut_from: {
      panan: ["panan-aw", "Panan-Aw"],
      aw: ["panan-aw", "Panan-Aw"],
      nag: ["nag-ingon"],
      tagsa: ["tagsa-tagsa"],
    },
  };
  let r = {
    words,
    expected,
  };
  return r;
}

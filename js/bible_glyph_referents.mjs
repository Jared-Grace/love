export function bible_glyph_referents() {
  "The places where one Greek word is drawn by more than one glyph, because the word is standing for more than one thing and the text says which.";
  "A word usually earns one glyph, and bible_glyph_roots gives it one. A few do not, and the survey found them rather than anyone predicting them. The same word Iesous is Jesus eight hundred and forty seven times and Joshua three times, so a cross drawn on all of them puts the cross on Joshua. The same word kurios is the Lord and is also an ordinary man addressed as Sir. The same word anthropos is a human being and is also half of the title Son of Man.";
  "What makes this honest rather than a licence to guess is that the DECISION IS ALREADY IN THE TEXT. The interlinear glosses the word in the place it stands, so it has already written Joshua where the referent is Joshua and Sir where the referent is a man. So the rule keys on the word AND the wording the interlinear printed, both of which can be pointed at, and nobody is asked to intuit anything. Where the interlinear does not distinguish, neither does this table.";
  "Capitalisation is doing real work here and is not noise. Man with a capital letter is the title and man without one is a person, and the tables mark the difference consistently. That is the whole reason bible_glyph_gloss_normalized keeps case.";
  "A referent may name SEVERAL glyphs, and the Son of Man is why. The title is not a word needing a new picture; it is son and human being standing together, which is what the title says. So it is drawn as the group of the two glyphs already earned, and the grouping ring says they are one name rather than two words in a row.";
  let referents = [
    {
      strong: "2424",
      root: "iesous",
      glosses: ["Joshua"],
      glyphs: ["name_tag"],
      because: "the same Greek name; Acts 7:45 and Hebrews 4:8 mean Joshua",
    },
    {
      strong: "2962",
      root: "kurios",
      glosses: ["master", "masters", "Master", "Sir", "owner", "owners"],
      glyphs: ["master"],
      because: "an ordinary man with authority, not the Lord",
    },
    {
      strong: "444",
      root: "anthropos",
      glosses: ["Man"],
      glyphs: ["son", "person"],
      because: "the title Son of Man, which the capital letter marks",
    },
  ];
  return referents;
}

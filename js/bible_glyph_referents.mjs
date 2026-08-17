export function bible_glyph_referents() {
  "The places where one Greek word is drawn by more than one glyph, because the word is standing for more than one thing and the text says which.";
  "A word usually earns one glyph, and bible_glyph_roots gives it one. A few do not, and the survey found them rather than anyone predicting them. The same word Iesous is Jesus eight hundred and forty seven times and Joshua three times, so a cross drawn on all of them puts a cross on Joshua. The same word anthropos is a human being and is also half of the title Son of Man.";
  "A SPLIT MUST BE ONE THE ORIGINAL LANGUAGE MADE, and that is the whole discipline of this table. An earlier draft keyed every rule on the English wording the interlinear printed - Sir here, master there, Man with a capital letter - and every one of those is a fact about English. A Greek reader met one word kurios and one word anthropos. Keying on the translator's word choice draws distinctions the writer never drew and hides the ones he did, so the interlinear's gloss is now EVIDENCE and never the criterion: it is a fine way to FIND a candidate split, and the split only stands if Greek marks it too.";
  "Two things do mark a split in the Greek, and the table carries one rule for each. A rule naming VERSES splits by REFERENT: Iesous is one Greek name, and in Acts 7:45 and Hebrews 4:8 it stands for Joshua son of Nun and not for Jesus of Nazareth, which is a fact about who the sentence is about and stays true in every language. A rule naming a PHRASE splits by CONSTRUCTION: son of man is a set Greek phrase carried over from Daniel, and the word anthropos standing in it is not being used as an ordinary human being, which is visible in the Greek words themselves without reading a translation.";
  "The word kurios USED TO HAVE A RULE HERE and no longer does, for exactly this reason. Greek had one word for the Lord, for a landowner, and for a man politely addressed, and it is the same word the Septuagint puts where the divine name stands. Splitting it by whether an English translator wrote Lord or Sir would settle a question the writer left open, and in John 4:11 the openness is the point - the Samaritan woman means only sir and says the word that means Lord. One glyph everywhere lets the reader meet the ambiguity the Greek reader met.";
  "Said as one line: SPLIT ON A DIFFERENT REFERENT, NEVER ON A DIFFERENT INTENSITY. A word pointing at two different beings has earned two pictures. A word meaning one thing more strongly or more weakly has earned one, because the strength is the reader's to feel and choosing it for them removes something the text left them.";
  "A referent may name SEVERAL glyphs, and the Son of Man is why. The title is not a word needing a new picture; it is son and human being standing together, which is what the title says. So it is drawn as the group of the two glyphs already earned, and the grouping ring says they are one name rather than two words in a row.";
  let referents = [
    {
      strong: "2424",
      root: "iesous",
      glyphs: ["name_tag"],
      verses: [
        {
          chapter_code: "ACT07",
          verse_number: 45,
        },
        {
          chapter_code: "HEB04",
          verse_number: 8,
        },
      ],
      because:
        "one Greek name, two men: here it stands for Joshua son of Nun, who is a different person from Jesus of Nazareth in any language",
    },
    {
      strong: "444",
      root: "anthropos",
      glyphs: ["son", "person"],
      phrase: ["5207", "444"],
      because:
        "the set Greek phrase son of man, carried over from Daniel, where the two words together are a title and not a description",
    },
  ];
  return referents;
}

export function bible_glyph_artwork_absent() {
  "The glyphs the artwork set holds no drawing for at all, and what each one falls back to.";
  "A NAME THE SET DOES NOT ANSWER TO AND A PICTURE THE SET DOES NOT HAVE ARE OPPOSITE FACTS that both show up as one missing file. The first is a mistake in this repo and is corrected by spelling the name the set's way. The second is a fact about the set, and no spelling will fix it. Keeping the second here is what stops somebody spending an afternoon hunting for a name that was never going to be found.";
  "IT IS NOT A PROBLEM, and that is worth saying plainly. Every glyph in this Bible already has a character that a font draws, and the drawn file was only ever a better version of that character. A glyph with no file is drawn by the font instead, exactly as it was before any of this, so the page is complete either way.";
  "BOTH WERE ASKED A SECOND TIME, on a later day and through a listing fetched fresh, and the set held nothing carrying holding hands, nothing carrying family, and nothing carrying men at all. Asking twice is what tells a fact about the set apart from a listing that happened to be short the first time, and the second answer is what makes this list something to trust rather than something to re-check.";
  "THE FINDING WAS READ FROM THE SET rather than assumed from a failed fetch. The set's own list of names was searched for the words - family, holding hands - and holds nothing carrying either of them, which is a different and much stronger statement than one address not answering.";
  let absent = [
    {
      glyph: "brother",
      wanted: "Men holding hands",
      because:
        "the set holds no name carrying the words holding hands, so it draws no two people side by side at all. The nearest things it has are people hugging, which this Bible already uses for a different glyph, and a single man, which loses the whole point of the picture - that there are two of them and they belong to each other.",
    },
    {
      glyph: "family",
      wanted: "Family",
      because:
        "the set holds no name carrying the word family. It draws individual people in every combination of age and tone, and no group standing together as one household.",
    },
  ];
  return absent;
}

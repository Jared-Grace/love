export function bible_glyph_artwork_absent() {
  "The glyphs the artwork set holds no drawing for at all, and what each one falls back to.";
  "A NAME THE SET DOES NOT ANSWER TO AND A PICTURE THE SET DOES NOT HAVE ARE OPPOSITE FACTS that both show up as one missing file. The first is a mistake in this repo and is corrected by spelling the name the set's way. The second is a fact about the set, and no spelling will fix it. Keeping the second here is what stops somebody spending an afternoon hunting for a name that was never going to be found.";
  "IT WAS NOT A PROBLEM FOR THE FIRST TWO AND IT IS THE WHOLE POINT OF THE LAST TWO, which is why they are listed together and told apart here rather than in two files. The first two have a character a font draws, so the drawn file was only ever a better version of something already complete, and a missing file changes nothing a reader sees. The last two have no character anywhere - no font on earth draws an altar or a priest - so for those the missing file IS the word, and the plain text prints the English instead.";
  "THAT IS THE LINE BETWEEN THE TWO TEXTS THIS BIBLE MAKES. The emoji text can be sent as a message and read in a terminal and can never say altar; the drawn text says everything and needs a page. A glyph in this list with an emoji character belongs to both texts and is merely undrawn; a glyph in this list whose character is an English word belongs to the drawn text alone. Nothing else in the repo has to know the difference, because the page already hides the character behind the picture and shows it only when the picture fails.";
  "AND THE LAST TWO ARE THE ONLY WORDS HERE WAITING ON SOMEBODY DRAWING RATHER THAN SOMEBODY SEARCHING. Both were measured, both are wanted, and neither can be composed out of what is already seated without claiming something false - an altar out of meat and fire says meat God, and a priest out of a person and oil says the Messiah. So they sit here fully seated and fully authored, drawing the English until a picture exists, which costs the emoji text nothing and lets the drawn text finish the moment one arrives.";
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
    {
      glyph: "altar",
      wanted: "Altar",
      because:
        "no artwork set holds one and no emoji exists for it, because an altar is not a thing the people who chose the emoji had any reason to name. It is the first word in this Bible that has to be drawn rather than found, and until it is the drawn text prints the English word exactly as the emoji text does.",
    },
    {
      glyph: "priest",
      wanted: "Priest",
      because:
        "no artwork set holds one and no emoji exists for it. The set draws people in every combination of dress and role it has a name for, and none of those names is a priest of Israel; the nearest is a person in a headscarf, which says something else entirely about somebody who is not in this book.",
    },
  ];
  return absent;
}

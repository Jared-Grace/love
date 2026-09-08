export function reply_typo_sounds() {
  "Pairs of spellings that sound the same, so that a word written the way it is heard still reads as the word it is. `filippines` is not a slip of the finger - it is somebody spelling a sound correctly and English spelling it differently.";
  "Each pair is one direction: the first is what the rules have written down, the second is what the message may hold instead. Both directions are listed separately where both happen, because a person who writes `f` for `ph` is not the same person as one who writes `ph` for `f`, and either could be reading this list later to remove one.";
  "★ THESE ARE THE ONLY LENGTH-CHANGING MISTAKES NOT COUNTED AGAINST THE ONE-DROPPED-LETTER LIMIT. A dropped letter is limited because enough of them walk any word to any shorter word; a sounding-out swap changes the length by the fixed amount the pair itself states, so no number of them reaches anywhere a dropped letter could not already reach.";
  let sounds = [
    ["ph", "f"],
    ["f", "ph"],
    ["c", "k"],
    ["k", "c"],
    ["ck", "k"],
    ["s", "z"],
    ["z", "s"],
    ["x", "ks"],
    ["ei", "ie"],
    ["ie", "ei"],
    ["y", "i"],
    ["i", "y"],
    ["ou", "u"],
    ["u", "ou"],
  ];
  return sounds;
}

export function text_character_name_part_is(character) {
  "Whether one character is the sort that carries a name on rather than letting a new one begin - a letter, a digit, an underscore, a dot or a hyphen.";
  "Asked of the character standing immediately before a name, to tell a name that starts there from the tail end of a longer word that happens to finish with the same letters. The word `wrappy` ends in `py`, and a sweep with no way to ask this rewrote a downloaded package's address into one that leads nowhere.";
  "Nothing at all, and anything longer than a single character, both answer no. The place this is asked from is the very start of a piece of writing as often as it is the middle, and the start is a place a name may begin.";
  let r = /^[A-Za-z0-9_.-]$/;
  let part = r.test(character);
  return part;
}

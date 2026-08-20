export function text_character_name_part_is(character) {
  "Whether one character is the sort that carries a name on rather than letting a new one begin - a letter, a digit, an underscore, a dot or a hyphen.";
  "Asked of the character standing immediately before a name, to tell a name that starts there from the tail end of a longer word that happens to finish with the same letters. The word `wrappy` ends in `py`, and a sweep with no way to ask this rewrote a downloaded package's address into one that leads nowhere.";
  "Nothing at all, and anything longer than a single character, both answer no, so that a caller holding no character rather than a plain one is never told yes by accident.";
  let r = /^[A-Za-z0-9_.-]$/;
  let part = r.test(character);
  return part;
}

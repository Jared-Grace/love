export function bible_glyph_name_character_is(character) {
  "$plain character";
  "the character is one character of shorthand being read apart. It is a character to test and nothing that runs.";
  "Whether one character is allowed inside a glyph name, which is what decides where a name ends when nothing closes it.";
  "A glyph name is lower case letters, digits and underscores, and a plus joins two names inside one group, so those four are the characters a name run may contain. Everything else - a full stop, a comma, a colon, an apostrophe, a space - is ordinary text, and meeting one is how the reader knows the name finished.";
  "The rule is spelled here rather than inside the parser because the gate that checks an authored chapter needs the same answer, and a name rule that two places each decide for themselves is a name rule that will one day disagree with itself.";
  let name_characters = "abcdefghijklmnopqrstuvwxyz0123456789_+";
  let found = name_characters.includes(character);
  return found;
}

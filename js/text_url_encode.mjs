export function text_url_encode(word) {
  "Spell one word the way an address is allowed to carry it, so a space or a letter outside the plain alphabet reaches the far end as itself.";
  "$plain word";
  "the word is a word being looked up, not a path and not anything that runs. It is turned into text and joined into an address; nothing here reads or writes a file.";
  let encoded = encodeURIComponent(word);
  return encoded;
}

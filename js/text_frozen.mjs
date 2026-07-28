export function text_frozen(t) {
  "A word that must stay exactly as written - do not change this text.";
  "It hands back what it was given and does nothing else. What it is for is to be";
  "read: by the canonicalizing pass, which leaves its argument alone, and by";
  "anybody opening the file, who can see at the site that the word is fixed";
  "rather than having to know a list somewhere else.";
  "The sibling of the spelled-name form. That one means this word IS a reference";
  "and should follow whatever it names; this one means the opposite - the word";
  "only looks like a name, and following anything would be the bug. Without it a";
  "word that happens to match a function gets promoted into a reference to that";
  "function, and a value already written into somebody's browser silently starts";
  "tracking a rename.";
  "Everything else that must not change - a tag in a saved format, a segment of a";
  "bookmarked address - can wear it too. Say it here and freeze it in the list of";
  "frozen values to have a gate watch it.";
  return t;
}

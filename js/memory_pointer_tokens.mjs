export function memory_pointer_tokens(text) {
  "Extract every index pointer target in text - the markdown-link file name written between ']( ' and ')' - de-duplicated. Empty list when nothing matches.";
  "An anchor is dropped: a pointer aimed at one heading inside an entry still names the same file, and the file is what has to exist.";
  "Kept apart from the sweep that reads the index, because this is the part that can be wrong. The sweep is a set difference and cannot be; reading a link out of prose is a judgment, and a corpus can hand this one lines nobody has written into the index.";
  let pattern = /\]\(([a-z0-9_]+\.md)[^)]*\)/g;
  let matches = [...text.matchAll(pattern)];
  function inner(m) {
    let name = m[1];
    return name;
  }
  let unique = list_map_unique(matches, inner);
  return unique;
}

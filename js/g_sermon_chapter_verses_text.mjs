export function g_sermon_chapter_verses_text(passages) {
  "One chapter's written passages as plain numbered text - the Scripture an arc is allowed to answer from, ready to sit in a prompt.";
  "Numbered rather than run together, because every turn an arc writes has to name the verses that answer it. A block of unnumbered text can be quoted from but not cited, so the numbers are the part that makes the answer checkable.";
  "The ENGLISH is what goes over, not the sermon lines written from it. The lines are the game's own words and an arc that answered from them would be answering from a paraphrase of Scripture rather than from Scripture.";
  "A passage's verses are given together on one line because that is the unit the sermon was written against - splitting them back into single verses would offer a smaller answer than any passage actually makes.";
  let lines = [];
  for (let passage of passages) {
    let numbers = property_get(passage, "verse_numbers");
    let joined = list_join_comma(numbers);
    let english = property_get(passage, "english");
    let line = list_join_space([joined, english]);
    list_add(lines, line);
  }
  let r = list_join_newline(lines);
  return r;
}

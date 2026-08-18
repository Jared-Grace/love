export function bible_glyph_roots_testament_table(testament_name) {
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names which table to hand back and nothing that runs.";
  "The seed glyph table written for one testament.";
  "A Strong's number is a TESTAMENT'S OWN, so there is one table per testament and this is the one place that says which is which. Every reader of a table asks here rather than naming one, so a reader cannot pick the wrong one up.";
  "AN UNKNOWN TESTAMENT IS REFUSED rather than answered with an empty table. An empty table surveys perfectly happily and reports that nought per cent of the text is drawn, which is indistinguishable from a testament nobody has started - so the mistake would look like honest work left to do.";
  let old_name = ebible_testament_name_old();
  let older = equal(testament_name, old_name);
  if (older) {
    let hebrew = bible_glyph_roots_hebrew();
    return hebrew;
  }
  let new_name = ebible_testament_name_new();
  let newer = equal(testament_name, new_name);
  assert_json(newer, {
    testament_name,
    old_name,
    new_name,
    hint: "the glyph tables are written one per testament and this name matches neither of them, so there is no table to hand back - spell the testament the way the book divisions spell it",
  });
  let greek = bible_glyph_roots();
  return greek;
}

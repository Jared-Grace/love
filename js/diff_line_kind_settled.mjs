export function diff_line_kind_settled(kind, line, sources) {
  "$plain kind";
  "$plain line";
  "One changed line's kind after the file it came from has been asked about it - the same answer as before for every kind but the undecided one.";
  "IT IS THE SECOND LOOK AND NOT A SECOND READING. The reading of the line stands as it is for prose, imports, values and program, because a line of those kinds says what it is; only the one shape that says nothing about itself is asked again, and only that one can change.";
  "THE SIDE DECIDES WHICH FILE IS ASKED. A line put in stands in the file the commit left behind and a line taken out stands in the file it started from, so a word is looked for in the file that actually holds it.";
  "NO FILE MEANS THE FIRST ANSWER STANDS. A commit touching more than one code file, a path the history has nothing for, a file that will not parse - none of them make the doubt any smaller, and the undecided answer was already the honest one.";
  arguments_assert(arguments, 3);
  let alone_is = equal(kind, "name alone");
  if (not(alone_is)) {
    return kind;
  }
  let put_in = text_starts_with(line, "+");
  let side = "before";
  if (put_in) {
    side = "after";
  }
  let source = property_get(sources, side);
  let missing = null_is(source);
  if (missing) {
    return kind;
  }
  let without_sign = text_slice_from(line, 1);
  let bare = text_trim(without_sign);
  let told = js_source_bare_token_kind(source, bare);
  return told;
}

export async function commit_edit_lines_placed(commit) {
  "$plain commit";
  "Every line one commit changed, each one carrying the kind of thing it turned out to be - the line read first on its own and then, where the line could not say, looked up in the file it came from.";
  "THE LINE AND ITS KIND TRAVEL TOGETHER FROM HERE ON. They used to be two lists handed over side by side and read back by position, and every reader that wanted both had to trust the two to stay lined up. One of them did not: the reading that names what a commit amounts to took the kinds it was given and then worked the kinds out again from the lines, so a kind settled by the file was quietly thrown away and the line's own first answer used instead.";
  "THE FILE IS ONLY FETCHED WHERE THE DOUBT IS. Most commits hold no word standing alone, and asking git for two more copies of a file to settle nothing would double the cost of a sweep over hundreds of commits for the sake of the few that need it.";
  arguments_assert(arguments, 1);
  let changed = await commit_edit_changed_lines(commit);
  let kinds = list_map(changed, diff_line_kind);
  let doubted = list_includes(kinds, "name alone");
  let sources = { before: null, after: null };
  if (doubted) {
    sources = await commit_edit_js_sources(commit);
  }
  let placed = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    let settled = diff_line_kind_settled(kind, line, sources);
    let record = { line, kind: settled };
    list_add(placed, record);
  }
  return placed;
}

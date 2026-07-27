export function memory_hub_children(text) {
  "Every note stem a hub note DECLARES as a child, read from its '## Children' section. Containment is declared, never inferred: notes cross-link liberally and a passing wikilink in a body is an association, not parentage, so only links inside that one section count. The section ends at the next '## ' heading or at the end of the note. Returns an empty list when the note declares nothing. Read-only, pure.";
  let heading = "## Children";
  let start = text.indexOf(heading);
  let missing = equal(start, -1);
  if (missing) {
    let none = [];
    return none;
  }
  let past = add(start, heading.length);
  let after = text.slice(past);
  let next_heading = after.indexOf("\n## ");
  let has_next = not(equal(next_heading, -1));
  let section = after;
  if (has_next) {
    section = after.slice(0, next_heading);
  }
  let children = memory_wikilink_tokens(section);
  return children;
}

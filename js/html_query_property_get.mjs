export function html_query_property_get(key) {
  "The value one field of the query part of this page's address carries, or nothing when the address does not carry that field.";
  "The query part is the run of fields after the question mark. It is saved and shared exactly like the part after the hash - somebody bookmarks the link, or sends it to a friend - so a word naming a field here is published the moment it is used, and rewording it later opens every saved link on nothing.";
  "One door, and that is the whole reason this exists rather than each site speaking to the browser itself. A word that reaches the browser through a single named place is a word a gate can find; a word handed straight to the browser is invisible to everything, and the one site that did that had its word published unwatched until somebody happened to read the line.";
  let params = new URLSearchParams(location.search);
  let value = params.get(key);
  return value;
}

export function memory_todo_prefix() {
  "How a link says it means a note nobody has written yet. The memory instructions allow writing such a link on purpose - it marks something worth writing later - but nothing in the shape of a link tells that apart from a misspelling, so the writer says which they meant by putting this at the front.";
  "Lower case, because the reader that finds links in prose matches lower case names only, and an upper case marker would not be seen at all. A marker that works by being invisible is one regex away from becoming an error nobody meant.";
  "No note is ever named this way, so it takes nothing from the four kinds - it lives only in links.";
  let prefix = "todo_";
  return prefix;
}

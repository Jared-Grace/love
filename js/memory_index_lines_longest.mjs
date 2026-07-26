export async function memory_index_lines_longest() {
  "The index entries that are longer than one line may be, named by the note each points at and how long it is, longest first. Read-only.";
  "The note name rather than the line number, because a line number moves every time a peer adds an entry above it, and the name is what the next reader has to open.";
  let folder = memory_folder();
  let name = "MEMORY.md";
  let path = path_join([folder, name]);
  let text = await file_read(path);
  let lines = text.split("\n");
  let ceiling = memory_index_line_ceiling();
  let opener = "- [";
  let over = [];
  for (let line of lines) {
    let entry_is = text_starts_with(line, opener);
    if (not(entry_is)) {
      continue;

    }
    let size = text_size(line);
    let long = greater_than(size, ceiling);
    if (not(long)) {
      continue;
    }
    let pointed = memory_pointer_tokens(line);
    let first = list_first(pointed);
    let told = text_combine_multiple([first, " (", size, ")"]);
    list_add(over, { told, size });
  }
  function inner(a, b) {
    let difference = subtract(b.size, a.size);
    return difference;
  }
  over.sort(inner);
  function said(one) {
    let words = property_get(one, "told");
    return words;
  }
  let names = over.map(said);
  return names;
}

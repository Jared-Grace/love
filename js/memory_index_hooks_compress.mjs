export async function memory_index_hooks_compress() {
  "Shortens every over-long index line to its own hook plus the bare links it was carrying, and answers which lines changed and by how much.";
  "What is dropped is the second hook a line writes about a note it merely links to. That note already carries the same sentence in its own header, so the index was holding a copy - and it is the copy that overflows the budget the index is read within.";
  "This is safe to run over the whole index only because of that. Where it is untrue, the name lives in the index and nowhere else, which is exactly what memory_index_only_tokens answers - so ask that before and after: empty both times is the proof that the lines were compressed rather than robbed.";
  "Lines carrying no link are left alone. Their whole length is the hook for the note they point at, and shortening that is a judgment about what the note is for, which no rule here can make.";
  let folder = memory_folder();
  let name = "MEMORY.md";
  let path = path_join([folder, name]);
  let text = await file_read(path);
  let lines = text.split("\n");
  let ceiling = memory_index_line_ceiling();
  let opener = "- [";
  let marker = "[[";
  let dash = "—";
  let kept = [];
  let shortened = [];
  for (let line of lines) {
    let entry_is = text_starts_with(line, opener);
    let over = greater_than(line.length, ceiling);
    let linked = text_includes(line, marker);
    let touched = and(entry_is, and(over, linked));
    if (not(touched)) {
      list_add(kept, line);
      continue;
    }
    let at = line.indexOf(marker);
    let head = line.slice(0, at);
    let tidy = memory_index_head_tidy(head);
    let links = memory_wikilink_tokens(line);
    function inner(stem) {
      let one = "[[" + stem + "]]";
      return one;
    }
    let spelled = links.map(inner);
    let joined = spelled.join("; ");
    let separator = "; ";
    let dashed = text_ends_with(tidy, dash);
    if (dashed) {
      separator = " ";
    }
    let short = tidy + separator + joined;
    list_add(kept, short);
    let record = { was: line.length, now: short.length };
    list_add(shortened, record);
  }
  let rebuilt = kept.join("\n");
  await file_overwrite(path, rebuilt);
  let r = { lines: shortened.length, shortened };
  return r;
}

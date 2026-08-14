export async function memory_index_lines_write_removed(lines, kept) {
  "Writes the memory index back as the lines that were kept, and answers how many of the ones read did not survive.";
  "Every tidier of the index does the same two things once it has decided what to keep: put the file back together and say what it cost. Keeping that here means a tidier is only its own decision about which lines to drop, which is the part that differs, and none of them can write the file back a slightly different way from the others.";
  "The count is taken from the two lists rather than tallied while deciding, so it cannot drift from what was actually written. A tidier that forgot to count would report nothing removed while removing lines, and that is the report a reader would trust.";
  let rebuilt = list_join_lines(kept);
  let path = memory_index_path();
  await file_overwrite(path, rebuilt);
  let removed = subtract(list_size(lines), list_size(kept));
  let r = {
    removed,
  };
  return r;
}

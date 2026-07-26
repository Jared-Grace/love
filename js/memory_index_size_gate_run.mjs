export async function memory_index_size_gate_run() {
  "Fails when the memory index has grown past the size it can be loaded whole at, and names the longest lines so the next reader knows where the weight is.";
  "This guards a failure that is silent by construction. Every other memory check answers a question about content and can be seen to be wrong; this one is about a budget, and going over it costs nothing at the moment it happens - the price is paid later, by a session that never learns the note it needed was cut off.";
  "The way out is to shorten the lines that carry a second hook about a note they only link to, which is a mechanical change; the lines that carry no link at all are the ones a reader has to judge.";
  let folder = memory_folder();
  let name = "MEMORY.md";
  let path = path_join([folder, name]);
  let text = await file_read(path);
  let size = text_bytes_size(text);
  let ceiling = memory_index_size_ceiling();
  let over = greater_than(size, ceiling);
  if (not(over)) {
    let fine = { size, ceiling, over: false };
    return fine;
  }
  let waiting = await memory_index_lines_longest();
  let message = text_combine_multiple([
    "memory index size gate: the index is ",
    size,
    " bytes and may be ",
    ceiling,
    " - shorten the longest lines, whose hooks the notes they link to already carry: ",
    waiting.join(", "),
  ]);
  throw new Error(message);
}

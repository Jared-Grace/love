export function memory_index_line_length_ceiling() {
  "How many characters one index line may be. An index line is read to decide whether to open the note behind it, so it has to stay a hook rather than becoming the note; and the whole index is loaded into every session, so a line that keeps growing spends a budget every Claude shares.";
  "Single-sourced because the thing that shortens the lines and the thing that checks them have to agree, or a cleanup lands still failing.";
  let count = 200;
  return count;
}

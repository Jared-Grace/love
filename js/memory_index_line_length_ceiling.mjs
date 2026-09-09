export function memory_index_line_length_ceiling() {
  "How many characters one index entry may be. An entry is read to decide whether to open the note behind it, so it has to stay a hook rather than becoming the note; and the whole index is loaded into every session, so an entry that keeps growing spends a budget every Claude shares.";
  "Single-sourced because the thing that shortens the lines and the thing that checks them have to agree, or a cleanup lands still failing.";
  "It is a budget per entry rather than per line, and the two are the same number for almost every line because almost every line holds one entry. A line that folds a family of notes together holds several, separated by a middle dot, and is allowed this much for each of them - read flat, the ceiling condemns exactly the lines that were written to save room.";
  let count = 200;
  return count;
}

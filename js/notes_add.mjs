import { arguments_assert } from "./arguments_assert.mjs";
import { notes_read } from "./notes_read.mjs";
import { list_add } from "./list_add.mjs";
import { notes_write } from "./notes_write.mjs";
export async function notes_add(store, key, entry) {
  "$plain store";
  "$plain key";
  "$plain entry";
  "Put one note against one thing, keeping every note already standing.";
  "IT APPENDS AND NEVER REPLACES. A thing is looked at more than once and by more than one person, and the commonest thing a second reviewer does is see again what the first one saw. Replacing would make the second look quietly erase the first.";
  "THE WHOLE ENTRY IS HANDED IN rather than built here, because stores record different things beside the words - a drawing's note also says which attempt was on screen - and a store that built the entry could only ever record one shape.";
  arguments_assert(arguments, 3);
  let notes = await notes_read(store, key);
  list_add(notes, entry);
  let path = await notes_write(store, key, notes);
  return path;
}

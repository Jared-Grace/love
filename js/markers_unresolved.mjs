import { function_exists } from "./function_exists.mjs";
import { list_add } from "./list_add.mjs";
import { marker_reader_name } from "./marker_reader_name.mjs";
import { not } from "./not.mjs";
export async function markers_unresolved(marker_names) {
  "Every mark whose promise no longer holds - either the mark itself is not a function, or the function it is named after is gone.";
  "Renaming the reader is what this is watching for. Nothing links a mark to its reader except the spelling of its name, so a rename repoints every caller and leaves the mark behind pointing at a name that no longer exists - and a mark nobody can follow is worse than none, because it still reads like an answer.";
  let unresolved = [];
  for (let mark_name of marker_names) {
    let marker_lives = await function_exists(mark_name);
    if (not(marker_lives)) {
      list_add(unresolved, {
        mark_name,
        missing: mark_name,
      });
      continue;
    }
    let reader = marker_reader_name(mark_name);
    let reader_lives = await function_exists(reader);
    if (not(reader_lives)) {
      list_add(unresolved, {
        mark_name,
        missing: reader,
      });
    }
  }
  return unresolved;
}

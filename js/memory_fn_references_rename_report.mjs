import { memory_fn_references_rename } from "./memory_fn_references_rename.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function memory_fn_references_rename_report(before, after) {
  "Say out loud what a rename did to memory and what it deliberately left alone. Printing rather than returning keeps it out of the rename's answer, so nothing that already calls a rename has to learn a new shape.";
  "The notes still holding the old name bare are the useful half. They are listed and not touched, because whoever is renaming right now is the only one who can tell a pointer that should follow from a sentence recording what the name used to be - a reader coming back months later cannot.";
  let v = await memory_fn_references_rename(before, after);
  let rewritten = property_get(v, "rewritten");
  let mentioned = property_get(v, "mentioned");
  for (let one of rewritten) {
    let note = property_get(one, "note");
    console.log("memory pointer rewritten  " + note);
  }
  if (list_empty_not_is(mentioned)) {
    console.log(
      "\n" +
        mentioned.length +
        " memory notes still write " +
        before +
        " bare - narrative is left alone on purpose, so read these and decide:",
    );
    for (let two of mentioned) {
      let note = property_get(two, "note");
      let count = property_get(two, "count");
      console.log("  " + note + "  x" + count);
    }
  }
  return v;
}

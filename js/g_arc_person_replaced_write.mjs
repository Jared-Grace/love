import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { not_equal } from "./not_equal.mjs";
export async function g_arc_person_replaced_write(
  path,
  arcs,
  chapter_code,
  index,
  arc,
) {
  "Put one person's arc into a chapter's arcs in place of whatever was there for that same person, leave every other person's alone, write the chapter out, and give back the file it was written to.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "THE STORE IS HANDED IN RATHER THAN LOOKED UP, AND THAT IS THE WHOLE REASON THIS CAN BE SHARED. There are two of them - the arcs being played from, and the arcs kept as they were before a rewrite - and which one is being written is the only thing the two callers disagree about. Asked for by name here, this would have to be told which store anyway, and the telling would be a word standing for a pair of lookups instead of the pair itself.";
  "REPLACING IS DONE BY DROPPING AND ADDING, NOT BY WRITING OVER A PLACE IN THE LIST. A person may have no arc in the chapter yet, and the same run has to answer for that; a write by position would need to know whether it is adding or replacing before it could start, and getting that wrong puts a second arc for one person in a store every reader assumes holds one.";
  "The person that is dropped is found by number, so the number has to be the number the store spells and not one read off a screen. A number that never matches drops nothing and adds one, which is a store quietly holding two arcs for one person - the same failure as above, reached from the other side.";
  arguments_assert(arguments, 5);
  function arc_other(other) {
    let left = property_get(other, "index");
    let neq = not_equal(left, index);
    return neq;
  }
  let others = list_filter(arcs, arc_other);
  list_add(others, {
    index,
    arc,
  });
  let contents = json_format_to({
    chapter_code,
    arcs: others,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}

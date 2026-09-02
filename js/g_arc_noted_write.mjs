import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_noted_write_path } from "./g_arc_noted_write_path.mjs";
import { g_arc_noted_chapter } from "./g_arc_noted_chapter.mjs";
import { g_arc_noted_person } from "./g_arc_noted_person.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function g_arc_noted_write(chapter_code, index, addresses) {
  "Keep the addresses somebody has stopped at and asked a question about, adding to what is already kept for that person rather than standing in for it, so that a line once questioned goes on being marked on the bench long after its answer was written.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, and it names the file the whole chapter's asked addresses are kept in.";
  "$plain index";
  "the index is which person in the chapter, counting from zero, and it is the same number the arc store files them under.";
  "$plain addresses";
  "each address is a turn number and a field joined by a dot, like 24.after, naming one line of one person's arc.";
  "IT ADDS TO WHAT IS ALREADY KEPT AND NEVER STANDS IN FOR IT. What is written here is read back as the whole list of lines this person has ever been asked about, and the bench works out its held marks from that list - a line asked about and then kept word for word is a line the reviewer decided about, and the mark is what says so. A pass that wrote only its own addresses would take every earlier mark off the page at the moment it answered something unrelated, which is the same loss that used to happen to the moved marks and for the same reason: a store that is read as a history was being written as a snapshot. So an earlier pass's addresses survive a later pass, and an address asked about twice is kept once.";
  "IT IS A RECORD OF WHAT WAS ASKED AND NOT OF WHAT WAS ANSWERED. The notes themselves are cleared once they are answered, so after a revision this is the only thing left saying which lines a reviewer had reason to stop at. That is also what makes it safe to read before revising anything: a line already on this list is a line somebody has decided about, and rewriting it would be stepping over their decision rather than doing the work.";
  arguments_assert(arguments, 3);
  let path = g_arc_noted_write_path(chapter_code);
  let people = await g_arc_noted_chapter(chapter_code);
  let asked = g_arc_noted_person(people, index);
  let kept = list_concat_unique(asked, addresses);
  function person_other(other) {
    let left = property_get(other, "index");
    let neq = not_equal(left, index);
    return neq;
  }
  let others = list_filter(people, person_other);
  list_add(others, {
    index,
    addresses: kept,
  });
  let contents = json_format_to({
    chapter_code,
    people: others,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}

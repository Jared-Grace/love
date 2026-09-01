import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_noted_write_path } from "./g_arc_noted_write_path.mjs";
import { g_arc_noted_chapter } from "./g_arc_noted_chapter.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function g_arc_noted_write(chapter_code, index, addresses) {
  "Keep the addresses one person's revision was asked to answer, replacing whatever was kept for that same person before, and give back the file it was written to.";
  "$plain chapter_code";
  "$plain index";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS WRITTEN BESIDE THE ARC THAT WAS REPLACED AND ANSWERS THE QUESTION THAT ONE CANNOT. The replaced arc says what a revision changed; on its own it cannot say what the revision was asked to change, so a note whose line was written back word for word leaves no trace at all - the note is cleared, the line is identical, and the reader who filed it is told nothing. Kept here, the two together say which asks were answered by a rewrite and which were answered by leaving the line alone.";
  "IT IS REPLACED RATHER THAN ADDED TO, because it is paired with one arc and that arc is one version back. Kept as a growing list it would name lines answered two waves ago beside lines asked about now, and a reader cannot tell those apart.";
  "REPLACING IS DONE BY DROPPING AND ADDING, the same as the arcs are, because a person may have no record here yet and a write by position cannot answer for that.";
  arguments_assert(arguments, 3);
  let path = g_arc_noted_write_path(chapter_code);
  let people = await g_arc_noted_chapter(chapter_code);
  function person_other(other) {
    let left = property_get(other, "index");
    let neq = not_equal(left, index);
    return neq;
  }
  let others = list_filter(people, person_other);
  list_add(others, {
    index,
    addresses,
  });
  let contents = json_format_to({
    chapter_code,
    people: others,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}

import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_chapter_reference_entry_text(chapter) {
  arguments_assert(arguments, 1);
  ("One chapter written out as the lines it takes up in the light list of chapters - its code and the words a reader knows it by, and nothing else.");
  ("IT IS ONE ENTRY AND NOT THE LIST, so the same shape serves whether a chapter is being added, removed or reordered. The list is then a join of these and a join has no case to get wrong.");
  ("It ends with its own newline, so joining a run of them needs nothing between them and a list of one and a list of thirty are written the same way.");
  let json = json_to(chapter.chapter_code);
  let json2 = json_to(chapter.reference);
  let entry = text_combine_multiple([
    "    {\n      chapter_code: ",
    json,
    ",\n      reference: ",
    json2,
    ",\n    },\n",
  ]);
  return entry;
}

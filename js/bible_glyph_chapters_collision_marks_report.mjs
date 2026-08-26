import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_walked } from "./bible_glyph_chapters_collision_marks_walked.mjs";
import { bible_glyph_collision_marks_row } from "./bible_glyph_collision_marks_row.mjs";
import { list_first } from "./list_first.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_glyph_chapters_collision_marks_report() {
  "What the split of every shared picture would actually cost, counted one shared picture at a time: how many marks already on the page the interlinear decides by itself, how many a person has to read, and where those are.";
  "THE COUNT IS THE WHOLE POINT AND THE LISTS ARE THE LEFTOVER. The reading underneath hands back every mark it examined, which is hundreds of rows and unreadable in one sitting; almost all of them are the answer nobody needs to see, because a mark the interlinear decides on its own is a mark nobody will ever open. So the decided ones come back as a tally per root and the undecided ones come back in full, which is the shape of the work rather than the shape of the data.";
  "A PICTURE WITH NOTHING UNDECIDED UNDER IT IS A PICTURE THAT CAN BE SPLIT TODAY, and that is the sentence this exists to be able to say. Which of the pair keeps the picture is still a person's call, but nothing about the chapters already written stands in the way.";
  arguments_assert(arguments, 0);
  let walk = await bible_glyph_chapters_collision_marks_walked();
  let rows = {};
  for (let entry of walk.decided) {
    let row = bible_glyph_collision_marks_row(rows, entry);
    let root_name = list_first(entry.roots);
    property_count_add(row.decided, root_name, entry.drew);
  }
  for (let entry of walk.ambiguous) {
    let row = bible_glyph_collision_marks_row(rows, entry);
    list_add(row.ambiguous, entry);
  }
  for (let entry of walk.unseated) {
    let row = bible_glyph_collision_marks_row(rows, entry);
    list_add(row.unseated, entry);
  }
  let pictures = [];
  for (let name of object_property_names(rows)) {
    let item = property_get(rows, name);
    list_add(pictures, item);
  }
  let r = {
    walked: walk.walked,
    pictures,
  };
  return r;
}

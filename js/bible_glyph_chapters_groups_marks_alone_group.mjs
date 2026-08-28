import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_chapters_groups_marks_alone_group(
  vocabulary,
  entries,
  rows,
) {
  arguments_assert(arguments, 3);
  for (let group of vocabulary) {
    let parts = bible_glyph_group_names(group);
    let drawn = [];
    let alone = [];
    let drawn_chapters = {};
    for (let entry of entries) {
      let names = property_get(entry, "names");
      let joined = names.join("+");
      let whole = equal(joined, group);
      if (whole) {
        list_add(drawn, entry);
        let property_name = property_get(entry, "chapter_code");
        property_set(drawn_chapters, property_name, true);
        continue;
      }
      let single = list_size_equal(names, 1);
      if (not(single)) {
        continue;
      }
      let name = list_first(names);
      let component = list_includes(parts, name);
      if (component) {
        list_add(alone, entry);
      }
    }
    let shared = [];
    for (let entry of alone) {
      let chapter_code = property_get(entry, "chapter_code");
      let both = property_exists(drawn_chapters, chapter_code);
      if (not(both)) {
        continue;
      }
      let already = list_includes(shared, chapter_code);
      if (already) {
        continue;
      }
      list_add(shared, chapter_code);
    }
    list_add(rows, {
      group,
      parts,
      drawn_count: list_size(drawn),
      alone_count: list_size(alone),
      shared_chapters: shared,
      drawn,
      alone,
    });
  }
}

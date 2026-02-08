import { add } from "../../../love/public/src/add.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_multiple_async } from "../../../love/public/src/each_multiple_async.mjs";
import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { bible_verse_end_is } from "../../../love/public/src/bible_verse_end_is.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export async function list_adder_group_async() {
  async function adder_groups(la) {
    let group = null;
    async function each_chapter(verses_chapter_folders) {
      let verses_chapter = list_first(verses_chapter_folders);
      let verse_first = list_first(verses_chapter);
      let chapter_code = object_property_get(verse_first, "chapter_code");
      let interlinear = object_property_get(chapters_interlinear, chapter_code);
      let index_last = list_index_last(verses_chapter);
      clear();
      async function each_verse(verse, index) {
        let text = object_property_get(verse, "text");
        let verse_number = object_property_get(verse, "verse_number");
        function mapper(verses_chapter_folder) {
          let v = list_find_property(
            verses_chapter_folder,
            "verse_number",
            verse_number,
          );
          let text = object_property_get(v, "text");
          return text;
        }
        let texts = list_map(verses_chapter_folders, mapper);
        let original = null;
        if (verse_number !== "0") {
          let original_verse = list_find_property(
            interlinear,
            "verse_number",
            verse_number,
          );
          original = object_property_get(original_verse, "text");
        }
        list_add(group, {
          original,
          texts,
          verse_number,
          chapter_code,
        });
        let end = bible_verse_end_is(text);
        if (end || index === index_last) {
          add();
        }
      }
      await each_index_async(verses_chapter, each_verse);
    }
    await each_multiple_async(verses_book_folders, each_chapter);
    function add() {
      la(group);
      clear();
    }
    function clear() {
      group = [];
    }
  }
  let groups = await list_adder_async(adder_groups);
}

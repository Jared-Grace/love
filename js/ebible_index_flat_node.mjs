import { arguments_assert } from "./arguments_assert.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { each } from "./each.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
export async function ebible_index_flat_node(bible_folder) {
  "$plain bible_folder";
  "Which verses one bible carries, worked out by reading the whole bible off this disk a chapter at a time.";
  "★ THIS IS THE BUILD MACHINE'S HALF OF A QUESTION A PAGE ALSO ASKS, AND IT IS A SEPARATE NAME SO THAT THE PAGE CAN LEAVE IT BEHIND. It was a branch, and a branch is something a bundler carries whether or not it is ever walked - so every page that asked which verses a bible has was shipping the fetching, the unzipping and the chapter-by-chapter disk reading in order never to run a line of it. Behind its own name it can be asked for at the moment it is wanted, and a page that never wants it never holds it.";
  "The page's half is the same list already worked out and published, which is why neither half can simply be the other: this one derives the answer, and that one is handed it.";
  arguments_assert(arguments, 1);
  async function lambda(la) {
    await ebible_chapters_each_verses(bible_folder, each_chapter);
    async function each_chapter(chapter_code, verses) {
      let property_name = verse_number_key();
      let verse_numbers = list_map_property(verses, property_name);
      function lambda2(verse_number) {
        la({
          chapter_code,
          verse_number,
        });
      }
      each(verse_numbers, lambda2);
    }
  }
  let list = await list_adder_async(lambda);
  return list;
}

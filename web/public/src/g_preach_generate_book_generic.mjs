import { exit } from "../../../love/public/src/exit.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { list_map_property_join_space } from "../../../love/public/src/list_map_property_join_space.mjs";
import { g_generate_openai } from "../../../love/public/src/g_generate_openai.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { string_ends_with_any } from "../../../love/public/src/string_ends_with_any.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { bible_verse_trim_right } from "../../../love/public/src/bible_verse_trim_right.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { bible_interlinear_chapters } from "../../../love/public/src/bible_interlinear_chapters.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { ebible_chapters } from "../../../love/public/src/ebible_chapters.mjs";
export async function g_preach_generate_book_generic(
  bible_folder,
  book_code,
  fn,
  prompt_user_middle,
  prompt_system,
  property_name,
) {
  marker("1");
  let chapters = await ebible_chapters(bible_folder, book_code);
  async function lambda7(chapter_code) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    function lambda8(v) {
      let to2 = object_merge(v, {
        chapter_code,
      });
    }
    each(verses, lambda8);
    return verses;
  }
  let chapters_interlinear = await bible_interlinear_chapters();
  let verses_book = await list_map_unordered_async(chapters, lambda7);
  async function lambda4(la) {
    async function lambda10(verses_chapter) {
      let first = list_first(verses_chapter);
      let chapter_code = object_property_get(first, "chapter_code");
      let interlinear = object_property_get(chapters_interlinear, chapter_code);
      let index_last = list_index_last(verses_chapter);
      let group = [];
      async function lambda3(verse, index) {
        let text = object_property_get(verse, "text");
        let verse_number = object_property_get(verse, "verse_number");
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
          text,
          verse_number,
          chapter_code,
        });
        let trimmed = bible_verse_trim_right(text);
        let suffixes = ".?!";
        let split = string_split_empty(suffixes);
        let end = string_ends_with_any(trimmed, split);
        if (end || index === index_last) {
          la(group);
          group = [];
        }
      }
      await each_index_async(verses_chapter, lambda3);
    }
    await each_async(verses_book, lambda10);
  }
  let groups = await list_adder_async(lambda4);
  let nearness = 2;
  function lambda(item, index) {
    let r = range_from(index - nearness, index + nearness + 1);
    function lambda6(index3) {
      let ii = list_index_is(groups, index3);
      return ii;
    }
    let filtered = list_filter(r, lambda6);
    function lambda2(index2) {
      let item2 = list_get(groups, index2);
      return item2;
    }
    let range = list_map(filtered, lambda2);
    let v3 = {
      range,
      item,
    };
    return v3;
  }
  let mapped = list_map_index(groups, lambda);
  async function lambda9(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let exists = await file_exists(path);
    if (exists) {
      log({
        chapter_code,
        skip: true,
      });
      return;
    } else {
      log({
        chapter_code,
        skip: false,
      });
    }
    function lambda11(group) {
      let mapped4 = object_property_get(group, "item");
      let mapped2 = list_filter_property(mapped4, "chapter_code", chapter_code);
      let ne = list_empty_not_is(mapped2);
      return ne;
    }
    let filtered2 = list_filter(mapped, lambda11);
    async function lambda5(r) {
      let item3 = object_property_get(r, "item");
      let range2 = object_property_get(r, "range");
      let mapped2 = list_map(range2, prompt_get);
      let mapped3 = list_map_property(mapped2, "user_prompt");
      let joined = list_join(mapped3, " ::: ");
      var { user_prompt, text, original } = prompt_get(item3);
      let verse_numbers = list_map_property(item3, "verse_number");
      const prompt_user =
        "Here is the context: " +
        joined +
        " :::: " +
        prompt_user_middle +
        user_prompt;
      let output = await g_generate_openai(prompt_system, prompt_user);
      let v = {
        verse_numbers,
        text,
        [property_name]: output,
        original,
      };
      log(v);
      return v;
      function prompt_get(group) {
        let text = list_map_property_join_space(group, "text");
        let original = list_map_property_join_space(group, "original");
        const user_prompt = original + " :: " + text;
        let v2 = {
          user_prompt,
          text,
          original,
        };
        return v2;
      }
    }
    let passages = await list_map_async(filtered2, lambda5);
    await file_overwrite_json(path, {
      chapter_code,
      passages,
    });
    exit();
  }
  await each_async(chapters, lambda9);
}

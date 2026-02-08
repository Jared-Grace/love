import { list_find_property_get } from "../../../love/public/src/list_find_property_get.mjs";
import { list_adder_group_async } from "../../../love/public/src/list_adder_group_async.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { list_nearby } from "../../../love/public/src/list_nearby.mjs";
import { ebible_chapters_codes_or_specified } from "../../../love/public/src/ebible_chapters_codes_or_specified.mjs";
import { g_sermon_generate_book_generic_verses } from "../../../love/public/src/g_sermon_generate_book_generic_verses.mjs";
import { bible_verse_end_is } from "../../../love/public/src/bible_verse_end_is.mjs";
import { exit } from "../../../love/public/src/exit.mjs";
import { text_colon_3 } from "../../../love/public/src/text_colon_3.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { each_multiple_async } from "../../../love/public/src/each_multiple_async.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { g_generate_openai_responses } from "../../../love/public/src/g_generate_openai_responses.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { list_map_property_join_space } from "../../../love/public/src/list_map_property_join_space.mjs";
import { g_generate_openai_chat_completions } from "../../../love/public/src/g_generate_openai_chat_completions.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { bible_interlinear_chapters } from "../../../love/public/src/bible_interlinear_chapters.mjs";
export async function g_sermon_generate_book_generic(
  bible_folders,
  book_code,
  fn,
  prompt_user_middle,
  prompt_system,
  property_name,
  chapter_code_specified,
) {
  let bible_folder_first = list_first(bible_folders);
  let chapters_codes = await ebible_chapters_codes_or_specified(
    bible_folder_first,
    book_code,
    chapter_code_specified,
  );
  let verses_book_folders = await g_sermon_generate_book_generic_verses(
    chapters_codes,
    bible_folders,
  );
  let chapters_interlinear = await bible_interlinear_chapters();
  async function adder_groups({ clear, add, end }) {
    async function each_chapter(verses_chapter_folders) {
      clear();
      let verses_chapter = list_first(verses_chapter_folders);
      let verse_first = list_first(verses_chapter);
      let chapter_code = object_property_get(verse_first, "chapter_code");
      let interlinear = object_property_get(chapters_interlinear, chapter_code);
      async function each_verse(verse, index) {
        let text = object_property_get(verse, "text");
        let verse_number = object_property_get(verse, "verse_number");
        function mapper(verses_chapter_folder) {
          let text = list_find_property_get(
            verses_chapter_folder,
            "verse_number",
            verse_number,
            "text",
          );
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
        add({
          original,
          texts,
          verse_number,
          chapter_code,
        });
        let ei = bible_verse_end_is(text);
        let index_last = list_index_last(verses_chapter);
        if (ei || index === index_last) {
          end();
        }
      }
      await each_index_async(verses_chapter, each_verse);
    }
    await each_multiple_async(verses_book_folders, each_chapter);
  }
  let groups = await list_adder_group_async(adder_groups);
  let nearness = 2;
  let nearbys = list_nearby(groups, nearness);
  async function each_chapter(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let exists = await file_exists(path);
    if (exists) {
    } else {
    }
    function filter_group(group) {
      let items = object_property_get(group, "item");
      let match_chapter = list_filter_property(
        items,
        "chapter_code",
        chapter_code,
      );
      let ne = list_empty_not_is(match_chapter);
      return ne;
    }
    let filtered2 = list_filter(nearbys, filter_group);
    async function lambda5(r) {
      log(r);
      let item3 = object_property_get(r, "item");
      let range2 = object_property_get(r, "range");
      let mapped2 = list_map(range2, prompt_get);
      let mapped3 = list_map_property(mapped2, "user_prompt");
      let separator = text_colon_3();
      let joined = list_join(mapped3, separator);
      var v4 = prompt_get(item3);
      let original = object_property_get(v4, "original");
      let text = object_property_get(v4, "text");
      let user_prompt = object_property_get(v4, "user_prompt");
      let verse_numbers = list_map_property(item3, "verse_number");
      const prompt_user =
        "Here is the context: " +
        joined +
        " :::: " +
        prompt_user_middle +
        user_prompt;
      "sermons were originally generated using: " +
        g_generate_openai_chat_completions;
      log_keep(prompt_system + " " + prompt_user);
      exit();
      let output = await g_generate_openai_responses(
        prompt_system,
        prompt_user,
      );
      let v = {
        verse_numbers,
        text,
        [property_name]: output,
        original,
      };
      log_keep(output);
      return v;
      function prompt_get(group) {
        let texts = list_map_property(group, "texts");
        function lambda12(t) {
          let joined2 = list_join(t, " :: ");
          return joined2;
        }
        let mapped5 = list_map(texts, lambda12);
        let text = list_join(mapped5, " ::: ");
        let original = list_map_property_join_space(group, "original");
        const user_prompt = original + " :: " + text;
        log({
          user_prompt,
        });
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
    log({
      path,
    });
  }
  await each_async(chapters_codes, each_chapter);
}

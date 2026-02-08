import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_add_pair } from "../../../love/public/src/list_add_pair.mjs";
import { ebible_folders_chapters_codes_to_verses } from "../../../love/public/src/ebible_folders_chapters_codes_to_verses.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_new } from "../../../love/public/src/list_new.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { list_find_property_get } from "../../../love/public/src/list_find_property_get.mjs";
import { list_nearby } from "../../../love/public/src/list_nearby.mjs";
import { ebible_chapters_codes_or_specified } from "../../../love/public/src/ebible_chapters_codes_or_specified.mjs";
import { bible_verse_end_is } from "../../../love/public/src/bible_verse_end_is.mjs";
import { exit } from "../../../love/public/src/exit.mjs";
import { text_colon_3 } from "../../../love/public/src/text_colon_3.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { each_multiple_async } from "../../../love/public/src/each_multiple_async.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { g_generate_openai_responses } from "../../../love/public/src/g_generate_openai_responses.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { list_map_property_join_space } from "../../../love/public/src/list_map_property_join_space.mjs";
import { g_generate_openai_chat_completions } from "../../../love/public/src/g_generate_openai_chat_completions.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
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
  let verses_book_folders = await ebible_folders_chapters_codes_to_verses(
    chapters_codes,
    bible_folders,
  );
  let chapters_interlinear = await bible_interlinear_chapters();
  async function adder(la) {
    let originals = null;
    let verse_numbers = null;
    let texts = null;
    clear();
    function clear() {
      originals = [];
      texts = list_map(bible_folders, list_new);
      verse_numbers = [];
    }
    async function each_chapter(verses_chapter_folders) {
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
        let texts_add = list_map(verses_chapter_folders, mapper);
        let original = null;
        if (verse_number !== "0") {
          let original_verse = list_find_property(
            interlinear,
            "verse_number",
            verse_number,
          );
          original = object_property_get(original_verse, "text");
        }
        list_add(originals, original);
        list_add_pair(texts, texts_add);
        list_add(verse_numbers, verse_number);
        let ei = bible_verse_end_is(text);
        let index_last = list_index_last(verses_chapter);
        if (ei || index === index_last) {
          la({
            originals,
            texts,
            verse_numbers,
            chapter_code,
          });
          clear();
        }
      }
      await each_index_async(verses_chapter, each_verse);
    }
    await each_multiple_async(verses_book_folders, each_chapter);
  }
  let groups = await list_adder_async(adder);
  let nearness = 2;
  let nearbys = list_nearby(groups, nearness);
  async function each_chapter(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let exists = await file_exists(path);
    if (exists) {
    } else {
    }
    function filter_group(group) {
      let item = object_property_get(group, "item");
      let match_chapter = object_property_exists(
        item,
        "chapter_code",
        chapter_code,
      );
      return match_chapter;
    }
    let groups_match_chapter = list_filter(nearbys, filter_group);
    async function each_group(g) {
      log(g);
      let passage = object_property_get(g, "item");
      let r = object_property_get(g, "nearby");
      let mapped3 = list_map(r, prompt_get);
      let separator = text_colon_3();
      let joined = list_join(mapped3, separator);
      let user_prompt = prompt_get(passage);
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
      let passage_extension = {
        [property_name]: output,
      };
      let to2 = object_merge(passage, passage_extension);
      log_keep(output);
      return passage;
      function prompt_get(group) {
        let texts = object_property_get(group, "texts");
        function folder_map(t) {
          function lambda(item2) {}
          let mapped = list_map(list, lambda);
          let j = list_join_space(t);
          let joined2 = list_join(t, " :: ");
          return joined2;
        }
        let mapped5 = list_map(texts, folder_map);
        let text = list_join(mapped5, " ::: ");
        let original = list_map_property_join_space(group, "originals");
        const user_prompt = original + " :: " + text;
        log({
          user_prompt,
        });
        return user_prompt;
      }
    }
    await each_async(groups_match_chapter, each_group);
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

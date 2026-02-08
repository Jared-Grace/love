import { g_sermon_generate_book_generic_property } from "../../../love/public/src/g_sermon_generate_book_generic_property.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_new_multiple } from "../../../love/public/src/list_new_multiple.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { lists_to_news } from "../../../love/public/src/lists_to_news.mjs";
import { bible_interlinear_chapters } from "./bible_interlinear_chapters.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { each_async } from "./each_async.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { each_multiple_async } from "./each_multiple_async.mjs";
import { ebible_chapters_codes_or_specified } from "./ebible_chapters_codes_or_specified.mjs";
import { ebible_folders_chapters_codes_to_verses } from "./ebible_folders_chapters_codes_to_verses.mjs";
import { exit } from "./exit.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { g_generate_openai_chat_completions } from "./g_generate_openai_chat_completions.mjs";
import { g_generate_openai_responses } from "./g_generate_openai_responses.mjs";
import { g_sermon_generate } from "./g_sermon_generate.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_pair } from "./list_add_pair.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { list_join } from "./list_join.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_join_space } from "./list_map_join_space.mjs";
import { list_nearby } from "./list_nearby.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { log } from "./log.mjs";
import { log_keep } from "./log_keep.mjs";
import { object_merge } from "./object_merge.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
      texts = lists_to_news(bible_folders);
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
      let n = object_property_get(g, "nearby");
      let user_prompt_before = prompt_get(n);
      let user_prompt_after = prompt_get([passage]);
      const prompt_user =
        "Here is the context: " +
        user_prompt_before +
        " :::: " +
        prompt_user_middle +
        user_prompt_after;
      g_sermon_generate +
        "sermons were originally generated using: " +
        g_generate_openai_chat_completions;
      log_keep(prompt_system + " " + prompt_user);
      let output = await g_generate_openai_responses(
        prompt_system,
        prompt_user,
      );
      let passage_extension = {
        [g_sermon_generate_book_generic_property()]: output,
      };
      let to2 = object_merge(passage, passage_extension);
      log_keep(output);
      exit();
      return passage;
      function prompt_get(groups) {
        let size = list_size(bible_folders);
        let a = add_1(size);
        let r = list_new_multiple(a);
        function each_group(group) {
          let texts = object_property_get(group, "texts");
          let passages_folders_group = list_map_join_space(texts);
          let originals = object_property_get(group, "originals");
          let original = list_join_space(originals);
          list_add(passages_folders_group, original);
          return passages_folders_group;
        }
        let passages_folders = list_map(groups, each_group);
        log({
          r,
          passages_folders,
        });
        function lambda(item2) {
          list_add_pair(r, item2);
        }
        each(passages_folders, lambda);
        let mapped = list_map_join_space(r);
        let user_prompt = list_join(mapped, " :: ");
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

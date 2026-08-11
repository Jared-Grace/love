import { g_sermon_generate_book_generic_prompts_prompt_get } from "./g_sermon_generate_book_generic_prompts_prompt_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { log_keep } from "./log_keep.mjs";
import { openai_chat_completions } from "./openai_chat_completions.mjs";
import { g_sermon_generate } from "./g_sermon_generate.mjs";
import { list_filter } from "./list_filter.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { list_nearby } from "./list_nearby.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_multiple_async } from "./each_multiple_async.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { list_add_pair } from "./list_add_pair.mjs";
import { list_add } from "./list_add.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { property_get } from "./property_get.mjs";
import { lists_to_news } from "./lists_to_news.mjs";
import { bible_interlinear_chapters } from "./bible_interlinear_chapters.mjs";
import { ebible_folders_chapters_codes_to_verses } from "./ebible_folders_chapters_codes_to_verses.mjs";
import { ebible_chapters_codes_or_specified } from "./ebible_chapters_codes_or_specified.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function g_sermon_generate_book_generic_prompts(
  bible_folders,
  book_code,
  chapter_code_specified,
  fn,
  prompt_user_middle,
  prompt_system,
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
    async function each_chapter_verses(verses_chapter_folders) {
      let verses_chapter = list_first(verses_chapter_folders);
      let chapter_code = list_first_property(verses_chapter, "chapter_code");
      let interlinear = property_get(chapters_interlinear, chapter_code);
      async function each_verse(verse, index) {
        let text = property_get(verse, "text");
        let property_name = verse_number_key();
        let verse_number = property_get(verse, property_name);
        function mapper(verses_chapter_folder) {
          let property_find = verse_number_key();
          let words = list_find_property_get(
            verses_chapter_folder,
            property_find,
            verse_number,
            "text",
          );
          return words;
        }
        let texts_add = list_map(verses_chapter_folders, mapper);
        let original = null;
        if (not_equal(verse_number, "0")) {
          let property_name2 = verse_number_key();
          let original_verse = list_find_property(
            interlinear,
            property_name2,
            verse_number,
          );
          original = property_get(original_verse, "text");
        }
        list_add(originals, original);
        list_add_pair(texts, texts_add);
        list_add(verse_numbers, verse_number);
        let ei = bible_verse_end_is(text);
        let index_last = list_index_last(verses_chapter);
        if (ei || equal(index, index_last)) {
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
    await each_multiple_async(verses_book_folders, each_chapter_verses);
  }
  let groups = await list_adder_async(adder);
  let nearness = 2;
  let nearbys = list_nearby(groups, nearness);
  async function each_chapter(chapter_code) {
    local_function_path_json(chapter_code, fn);
    function filter_group(group) {
      let item = property_get(group, "item");
      let match_chapter = property_equals(item, "chapter_code", chapter_code);
      return match_chapter;
    }
    let groups_match_chapter = list_filter(nearbys, filter_group);
    async function map_group(g) {
      let passage = property_get(g, "item");
      let n = property_get(g, "nearby");
      let user_prompt_before =
        g_sermon_generate_book_generic_prompts_prompt_get(n, bible_folders);
      let user_prompt_after = g_sermon_generate_book_generic_prompts_prompt_get(
        [passage],
        bible_folders,
      );
      let prompt_user = text_combine_multiple([
        "Here is the context: ",
        user_prompt_before,
        " :::: ",
        prompt_user_middle,
        user_prompt_after,
      ]);
      text_combine_multiple([
        g_sermon_generate,
        "sermons were originally generated using: ",
        openai_chat_completions,
      ]);
      let message = text_combine_multiple([prompt_system, " ", prompt_user]);
      log_keep(g_sermon_generate_book_generic_prompts.name, message);
      let r = {
        prompt_system,
        prompt_user,
        passage,
      };
      return r;
    }
    let passages = await list_map_async(groups_match_chapter, map_group);
    let r3 = {
      chapter_code,
      passages,
    };
    return r3;
  }
  let chapters = await list_map_async(chapters_codes, each_chapter);
  return chapters;
}

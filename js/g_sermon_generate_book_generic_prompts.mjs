import { bible_passages_grouped } from "./bible_passages_grouped.mjs";
import { g_sermon_generate_book_generic_prompts_prompt_get } from "./g_sermon_generate_book_generic_prompts_prompt_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { log_keep } from "./log_keep.mjs";
import { openai_chat_completions } from "./openai_chat_completions.mjs";
import { g_sermon_generate } from "./g_sermon_generate.mjs";
import { list_filter } from "./list_filter.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { list_nearby } from "./list_nearby.mjs";
import { property_get } from "./property_get.mjs";
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
  let groups = await bible_passages_grouped(bible_folders, chapters_codes);
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

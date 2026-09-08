import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_titles_lower } from "./app_code_lesson_titles_lower.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_title_words_site } from "./app_code_lesson_title_words_site.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { repo_love_function_path } from "./repo_love_function_path.mjs";
import { file_text_replace_once } from "./file_text_replace_once.mjs";
import { list_size } from "./list_size.mjs";
export async function app_code_lesson_titles_capital_repair() {
  arguments_assert(arguments, 0);
  ("gives every lesson title that opens with a small letter its capital, by finding the place its own words are written and changing them there: how many places were changed, and the lessons whose words could not be pinned to one place");
  ("It finds its own set rather than being handed one. The lessons wanting a capital are asked for, not listed, so this cannot drift from what is actually wrong, and running it when nothing is wrong changes nothing and says so.");
  ("Two lessons can be drawn by one maker, and three sibling lessons can each spell the same fragment in their own file. So the places are gathered and the repeats dropped before anything is written, and each file is asked for exactly one change - a maker shared by two lessons would otherwise be told twice to change a run of text that is only there once, and the second telling would refuse.");
  ("What comes back does not claim the titles now read right. The lessons were drawn to find them, so their code is already loaded and running them again would draw the old words however the files now read. The proof is the gate, asked afresh.");
  let lower = app_code_lesson_titles_lower();
  let keys = [];
  let planned = [];
  let unplaced = [];
  for (let one of lower) {
    let f_name = property_get(one, "fn");
    let words = property_get(one, "words");
    let site = await app_code_lesson_title_words_site(f_name, words);
    if (not(site)) {
      list_add(unplaced, one);
      continue;
    }
    let site_name = property_get(site, "f_name");
    let needle = property_get(site, "needle");
    let key = text_combine_multiple([site_name, " ", needle]);
    let already = list_includes(keys, key);
    if (already) {
      continue;
    }
    list_add(keys, key);
    list_add(planned, site);
  }
  for (let site of planned) {
    let site_name = property_get(site, "f_name");
    let needle = property_get(site, "needle");
    let words = property_get(site, "words");
    let capital = text_first_upper_to(words);
    let after = text_replace_once(needle, words, capital);
    let f_path = repo_love_function_path(site_name);
    await file_text_replace_once(f_path, needle, after);
  }
  let repaired = list_size(planned);
  let r = {
    repaired,
    unplaced,
  };
  return r;
}

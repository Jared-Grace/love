import { json_equal_not } from "../../../love/public/src/json_equal_not.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { g_preach_generate_passage } from "../../../love/public/src/g_preach_generate_passage.mjs";
import { list_map_property_join_space } from "../../../love/public/src/list_map_property_join_space.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { local_function_path } from "../../../love/public/src/local_function_path.mjs";
import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { bible_verse_trim_right } from "../../../love/public/src/bible_verse_trim_right.mjs";
import { string_ends_with_any } from "../../../love/public/src/string_ends_with_any.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { bible_interlinear_chapters } from "../../../love/public/src/bible_interlinear_chapters.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function g_preach_generate() {
  let chapter_code = "JAS01";
  let chapters = await bible_interlinear_chapters();
  let interlinear = object_property_get(chapters, chapter_code);
  let verses = await ebible_verses("engbsb", chapter_code);
  async function lambda4(la) {
    let index_last = list_index_last(verses);
    let group = [];
    async function lambda3(verse, index) {
      let text = object_property_get(verse, "text");
      let verse_number = object_property_get(verse, "verse_number");
      let original_verse = list_find_property(
        interlinear,
        "verse_number",
        verse_number,
      );
      let original = object_property_get(original_verse, "text");
      list_add(group, {
        original,
        text,
        verse_number,
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
    await each_index_async(verses, lambda3);
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
  let file_name = file_name_json(chapter_code);
  let path = local_function_path(ebible_version_download, file_name);
  async function lambda5(r) {
    let item3 = object_property_get(r, "item");
    let range2 = object_property_get(r, "range");
    let mapped2 = list_map(range2, prompt_get);
    let mapped3 = list_map_property(mapped2, "user_prompt");
    let joined = list_join(mapped3, " ::: ");
    var { user_prompt, text, original } = prompt_get(item3);
    let verse_numbers = list_map_property(item3, "verse_number");
    const expected = ["7"];
    let n = json_equal_not(verse_numbers, expected);
    if (n) {
      return;
    }
    const prompt =
      "Here is the context: " +
      joined +
      " :::: Here is the passage to rewrite: " +
      user_prompt;
    log({
      prompt,
    });
    let sermon = await g_preach_generate_passage(prompt);
    let v = {
      verse_numbers,
      text,
      sermon,
      original,
    };
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
  let passages = await list_map_unordered_async(mapped, lambda5);
  await file_overwrite_json(path, {
    chapter_code,
    passages,
  });
  await file_open(path);
  return;
  let verse =
    "Γίνεσθε δὲ ποιηταὶ λόγου καὶ μὴ ἀκροαταὶ μόνον παραλογιζόμενοι ἑαυτούς :: Be doers of the word, and not hearers only. Otherwise, you are deceiving yourselves.";
  let sermon = await g_preach_generate_passage(verse);
  return sermon;
  marker("1");
}

import { range_from } from "../../../love/public/src/range_from.mjs";
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
    function lambda(item, index) {}
    let mapped2 = range_from(from, to);
    let mapped = list_map_index(list, lambda);
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
  let file_name = file_name_json(chapter_code);
  let path = local_function_path(ebible_version_download, file_name);
  let groups = await list_adder_async(lambda4);
  async function lambda5(group) {
    let text = list_map_property_join_space(group, "text");
    let original = list_map_property_join_space(group, "original");
    const user_prompt = original + " :: " + text;
    let verse_numbers = list_map_property(group, "verse_number");
    let sermon = await g_preach_generate_passage(user_prompt);
    let v = {
      verse_numbers,
      text,
      sermon,
      original,
    };
    return v;
  }
  let passages = await list_map_unordered_async(groups, lambda5);
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

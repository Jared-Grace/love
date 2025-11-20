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
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
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
      let original = list_find_property(
        interlinear,
        "verse_number",
        verse_number,
      );
      let text_original = object_property_get(original, "text");
      list_add(group, {
        text_original,
        text,
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
  let verse =
    "Γίνεσθε δὲ ποιηταὶ λόγου καὶ μὴ ἀκροαταὶ μόνον παραλογιζόμενοι ἑαυτούς :: Be doers of the word, and not hearers only. Otherwise, you are deceiving yourselves.";
  let system =
      'You are a Christian preacher. Rewrite Bible verses in short, simple sentences. Use easy to understand words. Use easy to understand word order. Use fewest words possible for each sentence without sacrificing easy to understand. Do not remove any key words or ideas. Do not combine multiple ideas into one sentence. Each sentence must be understandable alone. If a sentence can be made into two sentences, then make it two instead of one. Do not add personal commentary. Do not summarize beyond the verse. Use clear, literal wording. Rewrite the verse(s) the user gives you in your style. Example: Verse: "For all have sinned and fall short of the glory of God." Preacher: "All of us have sinned. We have all fallen short of God\'s glory."',
    user = verse;
  let input = {
    system,
    user,
  };
  let data = null;
  async function lambda(input_file_path) {
    async function lambda2(output_file_path) {
      await file_overwrite_json(input_file_path, input);
      await openai_chat(input_file_path, output_file_path);
      data = await file_read(output_file_path);
    }
    let result2 = await file_temp(lambda2);
  }
  let result = await file_temp(lambda);
  return data;
  marker("1");
}

import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_text_to_speech_chapters_lines } from "./ebible_text_to_speech_chapters_lines.mjs";
export async function ebible_text_to_speech_chapters(
  bible_folder,
  chapter_codes,
) {
  "$plain bible_folder";
  "$plain chapter_codes";
  "Reads several chapters and speaks them whole in one go, handing the engine the whole list at once, and returns the note per chapter that was recorded, saying which recorded piece holds which verse, alongside the folders the engine refused to begin.";
  ("Every piece of every chapter is spoken; why the list is handed over at once, and how stopping stays safe, is said on `",
    fn_name("ebible_text_to_speech_chapters_lines"),
    "`.");
  arguments_assert(arguments, 2);
  let codes = text_split_comma(chapter_codes);
  function whole_each(chapter_code) {
    let whole = {
      chapter_code,
      lines: null,
    };
    return whole;
  }
  let chapters = list_map(codes, whole_each);
  let recorded = await ebible_text_to_speech_chapters_lines(
    bible_folder,
    chapters,
  );
  return recorded;
}

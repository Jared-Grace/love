import { fn_name } from "./fn_name.mjs";
import { greek_word_speech_text } from "./greek_word_speech_text.mjs";
import { not_equal } from "./not_equal.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { hebrew_cantillation_strip } from "./hebrew_cantillation_strip.mjs";
import { path_join } from "./path_join.mjs";
import { google_text_to_speech_file } from "./google_text_to_speech_file.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function bible_words_google_text_to_speech_trial(
  chapter_code,
  count,
  voice_names,
  folder,
) {
  "$plain chapter_code";
  "the chapter whose words are said, spelled as the chapter codes spell it.";
  "$plain voice_names";
  "Google voice names, one comma-joined word. They pick voices and nothing that runs.";
  "Says the first distinct words of one chapter, one request per word, with each voice given, so the voices can be compared by ear and the account's character count read back against what was sent.";
  "Writes <folder>/<index>_<voice>.mp3 for each word and voice, and words.json listing each word and its character count.";
  ("A GREEK VOICE IS HANDED THE WORD THROUGH ",
    fn_name("greek_word_speech_text"),
    ", because a Greek word of one letter is otherwise named rather than said; every other language is handed the word as the chapter spells it.");
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let forms = [];
  for (let verse of verses) {
    for (let w of verse.words) {
      let form = hebrew_cantillation_strip(w.original).replace(
        /[.,;·:?!\s]/g,
        "",
      );
      if (not_equal(form, "") && not(forms.includes(form))) {
        forms.push(form);
      }
    }
  }
  let v = Number(count);
  let chosen = forms.slice(0, v);
  let voices = voice_names.split(",");
  let listed = [];
  for (let [index, text] of chosen.entries()) {
    listed.push({
      index,
      text,
      characters: [...text].length,
    });
    for (let voice_name of voices) {
      let file_path = path_join([folder, index + "_" + voice_name + ".mp3"]);
      let greek = voice_name.startsWith("el-");
      let spoken = greek ? greek_word_speech_text(text) : text;
      await google_text_to_speech_file(voice_name, spoken, file_path);
    }
  }
  let file_path2 = path_join([folder, "words.json"]);
  await file_overwrite_json(file_path2, listed);
  function lambda(sum, item) {
    let r = sum + item.characters;
    return r;
  }
  let characters = listed.reduce(lambda, 0);
  let r2 = {
    words: listed.length,
    requests: multiply(listed.length, voices.length),
    characters_sent: multiply(characters, voices.length),
  };
  return r2;
}

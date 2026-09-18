import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
export async function bible_word_voice_chapter_rows(
  chapter_code,
  voice_names_comma,
) {
  "$plain chapter_code";
  "Every different spoken form of one chapter as a row of the voice trial screen, with the address of its recording in each voice named.";
  "★ THE ADDRESS IS SPELLED FROM THE WORD ITSELF, the same way the recorder named the file, so nothing has to be kept in step between the two - a word with no recording is simply a button that plays nothing.";
  "★ THE WORD IS WRITTEN INTO THE ADDRESS AS ESCAPED TEXT, because Hebrew letters in a plain address are handed over differently by different browsers.";
  arguments_assert(arguments, 2);
  let voice_names = text_split_comma(voice_names_comma);
  let forms = await bible_interlinear_chapter_word_forms(chapter_code);
  function lambda2(form, index) {
    function lambda(voice_name) {
      let r = {
        name: voice_name,
        label: voice_name,
        pick: voice_name.toLowerCase(),
        url:
          "/love/gitignore/bible_word_voice/" +
          chapter_code +
          "/" +
          voice_name +
          "/" +
          encodeURIComponent(form.text) +
          ".mp3",
      };
      return r;
    }
    let r2 = {
      id: chapter_code + "-" + form.text,
      number: index + 1,
      text: form.text,
      meta: form.translit + " · " + form.gloss + " · Strong's " + form.strong,
      voices: voice_names.map(lambda),
    };
    return r2;
  }
  let rows = forms.map(lambda2);
  return rows;
}

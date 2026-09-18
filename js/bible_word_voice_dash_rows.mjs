import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
export async function bible_word_voice_dash_rows(
  chapter_code,
  voice_names_comma,
) {
  "$plain chapter_code";
  "Every word of one chapter that carries the joining dash as a row of the voice trial screen, each voice offering the recording that kept the dash next to the one that dropped it.";
  "★ THE TWO READINGS SIT NEXT TO EACH OTHER IN ONE ROW rather than in two tabs, because the question is which of the pair is clipped, and a difference that has to be remembered across a tap is a difference the listener cannot judge.";
  arguments_assert(arguments, 2);
  let voice_names = text_split_comma(voice_names_comma);
  let forms = await bible_interlinear_chapter_word_forms(chapter_code);
  function lambda3(form) {
    let held = form.text.includes("־");
    return held;
  }
  let dashed = forms.filter(lambda3);
  function lambda2(form, index) {
    let escaped = encodeURIComponent(form.text);
    function lambda(voice_name) {
      function lambda4([folder, word]) {
        let r = {
          name: voice_name + " " + word,
          label: voice_name + " " + word,
          pick: voice_name.toLowerCase() + "_" + word,
          url:
            "/love/gitignore/bible_word_voice/" +
            chapter_code +
            folder +
            "/" +
            voice_name +
            "/" +
            escaped +
            ".mp3",
        };
        return r;
      }
      let both = [
        ["", "with dash"],
        ["_dashless", "no dash"],
      ].map(lambda4);
      return both;
    }
    let r2 = {
      id: chapter_code + "-dash-" + form.text,
      number: index + 1,
      text: form.text,
      meta: form.translit + " · " + form.gloss + " · Strong's " + form.strong,
      voices: voice_names.flatMap(lambda),
    };
    return r2;
  }
  let rows = dashed.map(lambda2);
  return rows;
}

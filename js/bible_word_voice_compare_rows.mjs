import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapter_word_forms_first } from "./bible_interlinear_chapter_word_forms_first.mjs";
export async function bible_word_voice_compare_rows(chapter_code, count) {
  "$plain chapter_code";
  "The first so many words of one chapter as rows of the voice trial screen, each carrying the same word spoken by two engines in a man's voice and a woman's, so that the two engines can be judged against each other one word at a time.";
  "★ THE FOUR VOICES ARE WRITTEN IN HERE RATHER THAN HANDED IN, because this is one particular comparison rather than a general screen - which four they are is the question being asked, and a caller free to change them could answer a different question while looking like this one.";
  "★ THE TWO ENGINES ALTERNATE WITHIN EACH SEX, so the two buttons being compared sit next to each other. A listener judging two sounds hears the difference far better across a gap of one button than across a gap of two.";
  arguments_assert(arguments, 2);
  let forms = await bible_interlinear_chapter_word_forms_first(
    chapter_code,
    count,
  );
  let voices = [
    {
      pick: "google_man",
      label: "Google man",
      folder: "bible_word_voice",
      voice: "Achird",
    },
    {
      pick: "eleven_man",
      label: "Eleven man",
      folder: "bible_word_voice_eleven",
      voice: "onwK4e9ZLuTAKqWW03F9",
    },
    {
      pick: "google_woman",
      label: "Google woman",
      folder: "bible_word_voice",
      voice: "Vindemiatrix",
    },
    {
      pick: "eleven_woman",
      label: "Eleven woman",
      folder: "bible_word_voice_eleven",
      voice: "Xb7hH8MSUJpSbSDYk0k2",
    },
  ];
  function lambda2(form, index) {
    function lambda(voice) {
      let r = {
        name: voice.pick,
        label: voice.label,
        pick: voice.pick,
        url:
          "/love/gitignore/" +
          voice.folder +
          "/" +
          chapter_code +
          "/" +
          voice.voice +
          "/" +
          encodeURIComponent(form.text) +
          ".mp3",
      };
      return r;
    }
    let r2 = {
      id: chapter_code + "-compare-" + form.text,
      number: index + 1,
      text: form.text,
      meta: form.translit + " · " + form.gloss + " · Strong's " + form.strong,
      voices: voices.map(lambda),
    };
    return r2;
  }
  let rows = forms.map(lambda2);
  return rows;
}

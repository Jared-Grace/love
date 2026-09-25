import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { bible_word_voice_slow_trial_words } from "./bible_word_voice_slow_trial_words.mjs";
export function bible_word_voice_slow_trial_rows() {
  "Each word of the Greek slow trial with its ordinary clip and its slow one, for the voice trial screen.";
  "The two are one voice said twice, once at speed and once stretched, so there is nothing to pick between; what is being judged is whether the slow one is still the same word, and that goes in the comment.";
  let voice_name = "el-GR-Wavenet-B";
  let base = "/love/gitignore/bible_word_voice_trial/";
  function lambda([text, meta], index) {
    let file_name = bible_word_voice_path(voice_name, text).split("/").pop();
    let r = {
      id: "grc_slow-" + index,
      number: index + 1,
      text,
      meta,
      voices: [
        {
          name: voice_name,
          label: "Normal",
          pick: "normal",
          url: base + "grc_slow_from/" + voice_name + "/" + file_name,
        },
        {
          name: voice_name,
          label: "🐢 Slow",
          pick: "slow",
          url: base + "grc_slow/" + voice_name + "/" + file_name,
        },
      ],
    };
    return r;
  }
  let rows = bible_word_voice_slow_trial_words().map(lambda);
  return rows;
}

import { bible_word_voice_slow_trial_folder } from "./bible_word_voice_slow_trial_folder.mjs";
import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { bible_word_voice_slow_trial_speeds } from "./bible_word_voice_slow_trial_speeds.mjs";
import { bible_word_voice_slow_trial_words } from "./bible_word_voice_slow_trial_words.mjs";
export function bible_word_voice_slow_trial_rows() {
  "Each word of the Greek slow trial with its ordinary clip and one slow clip per speed on trial, for the voice trial screen.";
  "The pick is which speed is best for that word; the comment is for a slow clip that is no longer the same word.";
  let voice_name = "el-GR-Wavenet-B";
  function clip(part, label, pick, file_name) {
    let url =
      "/love/" +
      bible_word_voice_slow_trial_folder(part) +
      "/" +
      voice_name +
      "/" +
      file_name;
    let r2 = {
      name: voice_name,
      label,
      pick,
      url,
    };
    return r2;
  }
  function lambda([text, meta], index) {
    let file_name = bible_word_voice_path(voice_name, text).split("/").pop();
    let v = clip("from", "Normal", "normal", file_name);
    let voices = [v];
    for (let slow of bible_word_voice_slow_trial_speeds()) {
      let part = String(slow);
      let v2 = clip(part, "🐢 " + part, part, file_name);
      voices.push(v2);
    }
    let r = {
      id: "grc_slow-" + index,
      number: index + 1,
      text,
      meta,
      voices,
    };
    return r;
  }
  let rows = bible_word_voice_slow_trial_words().map(lambda);
  return rows;
}

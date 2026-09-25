import { round } from "./round.mjs";
import { multiply } from "./multiply.mjs";
import { bible_word_voice_slow_speed } from "./bible_word_voice_slow_speed.mjs";
import { bible_word_voice_folder_name } from "./bible_word_voice_folder_name.mjs";
export function bible_word_voice_slow_folder_name() {
  "The folder, under the assets folder, holding the slow saying of every Bible word that has an ordinary one.";
  "★ THE SPEED IS IN THE NAME, AS A PERCENTAGE. A word clip carries no stamp and a phone keeps it for good, so the one way a new speed can reach a phone is a new address. With the speed in the folder name, a new speed is a new folder, and nothing else has to be remembered.";
  "It is its own folder rather than a second name beside each ordinary clip, so the recorder, which asks its folder what is missing, never mistakes a slow clip for a word already said.";
  let left = bible_word_voice_slow_speed();
  let n = multiply(left, 100);
  let percent = round(n);
  let name = bible_word_voice_folder_name() + "_slow_" + percent;
  return name;
}

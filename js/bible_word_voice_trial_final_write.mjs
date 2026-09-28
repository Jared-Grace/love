import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
export async function bible_word_voice_trial_final_write() {
  "Sets the eight Gemini voices that came through their own rounds without faults side by side, on the same 25 Genesis 1 words, so the listener can choose two men and two women from all of them at once.";
  "★ NOTHING IS RECORDED AGAIN; every clip is copied from the round it was judged in, because those are the very clips the listener already heard, and a new request could come back said differently and would cost money.";
  "★ THE TWO ROUNDS NEVER MET: Charon, Puck, Kore and Aoede were marked the same as each other on 23 of 25 words, and Sadaltager, Schedar, Sulafat and Gacrux were chosen among themselves later, so which four are best across both was never asked.";
  "It writes under gitignore because these are for one listener to hear on this machine, not for the app.";
  arguments_assert(arguments, 0);
  let folder = "gitignore/bible_word_voice_trial/";
  let rounds = [
    ["gem_voices", ["Charon", "Puck", "Kore", "Aoede"]],
    ["gem_described", ["Sadaltager", "Schedar", "Sulafat", "Gacrux"]],
  ];
  let copied = 0;
  for (let [key, voice_names] of rounds) {
    for (let index = 0; less_than(index, 25); index++) {
      for (let voice_name of voice_names) {
        let name = index + "_" + voice_name + ".mp3";
        let to = folder + "gem_final/" + name;
        if (await file_exists(to)) {
          continue;
        }
        await file_copy_overwrite(folder + key + "/" + name, to);
        copied = copied + 1;
      }
    }
  }
  return copied;
}

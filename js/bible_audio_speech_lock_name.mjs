import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function bible_audio_speech_lock_name() {
  "The name of the one hold taken over recording, which every way of starting a recording takes and so which is what keeps two recordings off this machine at once.";
  "★ ONE WORD FOR EVERY WAY IN, BECAUSE A HOLD ONLY WORKS AGAINST SOMEBODY SAYING THE SAME WORD. Recording can be asked for by book, by a list of chapters, or by whatever is missing, and a hold named after any one of those would be a hold nobody else wanted; all three would take their own and all three would run at once. So it is named after the recording and not after the way in.";
  "★ TWO RECORDINGS AT ONCE IS NOT SLOW, IT IS THE THING THAT KILLED THE MACHINE. How many workers to run is worked out once against the whole machine, so two runs each size themselves as though they had all of it and together ask for twice what is there. On 2026-08-28 a single run was already enough for the kernel to kill the browser and the editor. This matters most exactly when nobody is watching, which is when a nightly start can land on top of a recording somebody left going.";
  arguments_assert(arguments, 0);
  let lock_name = fn_name("ebible_text_to_speech_chapters");
  return lock_name;
}

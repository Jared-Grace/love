import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_speech_lock_name } from "./bible_audio_speech_lock_name.mjs";
import { text_to_speech } from "./text_to_speech.mjs";
import { fn_name } from "./fn_name.mjs";
import { lock_try } from "./lock_try.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function bible_audio_speech_locked_run(asked) {
  "$plain asked";
  "Speaks the chapters asked for while no other recording on this machine is under way, and when one already is, says that none of them were begun instead of speaking any of them.";
  "★ BEING TURNED AWAY IS REPORTED AS EVERY CHAPTER REFUSED, WHICH IS THE ANSWER THE REST OF THE WORK ALREADY KNOWS HOW TO READ. A chapter the engine declines to begin is already reported by folder and already left without a note beside it, so a whole list declined needs no second path through the code and no second thing for a reader to remember. It also makes the count honest by itself: nothing was spoken, so nothing is subtracted from what is still missing, and the next run finds the same work waiting.";
  "★ A RUN THAT HAPPENED AND A RUN THAT WAS TURNED AWAY MUST NOT LOOK ALIKE, AND WITHOUT CARE THEY DO. Being turned away hands back nothing at all, and speaking hands back nothing at all when the engine's report cannot be read - and those two want opposite answers. Silence from a run that really spoke has to mean nothing was refused, because writing no notes would strand every chapter that is already on the disk. So what ran is handed back inside a box, and it is the box being missing, never what is in it, that says nobody ran.";
  "★ IT DOES NOT WAIT FOR ITS TURN, BECAUSE THERE IS NOTHING WORTH WAITING FOR. The run in front holds the machine for hours, and by the time it finishes the night this run was given may be over. Waiting would also leave two runs queued behind one keyboard with no way to tell either of them to stop. Coming back to the same work later costs nothing, because what is left is read off the folders.";
  arguments_assert(arguments, 1);
  let lock_name = bible_audio_speech_lock_name();
  async function lambda() {
    let spoken = await text_to_speech(asked);
    let box = {
      spoken,
    };
    return box;
  }
  let who = fn_name("bible_audio_speech_locked_run");
  let ran = await lock_try(lock_name, lambda, who);
  if (ran) {
    let spoken = property_get(ran, "spoken");
    return spoken;
  }
  let jobs = property_get(asked, "jobs");
  let folders = list_map_property(jobs, "path_output");
  let refused = {
    not_started: folders,
    locked: true,
  };
  return refused;
}

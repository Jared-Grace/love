import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lesson_ids_baseline_path } from "./app_code_lesson_ids_baseline_path.mjs";
import { app_code_lesson_ids } from "./app_code_lesson_ids.mjs";
export async function app_code_lesson_ids_gate_run() {
  "Fail if the set of lesson ids the code app teaches is not the set it last recorded. Read-only.";
  "The half that matters is the one for an id that has gone. What a learner has finished is written down on their own device under the lesson's id and nothing else - the record is an object keyed by it - so an id is a value that has already left here and cannot be moved from here. When one changes, every learner who finished that lesson is holding a key that now names nothing, the lesson reads as never started, and their place in it is asked for again. Nothing tells them why, and nothing here goes red.";
  "That is easier to do by accident than it looks. An id is not written down anywhere: it is built out of the lesson's category and the words handed to its title maker, so it is spelled the way it is only as a consequence of two other decisions. Recategorising a lesson moves it. Rewording those title words moves it. Neither edit looks like it touches a stored key, and the one edit this repo tells everybody is safe by construction - a rename - is nearby enough to be confused with them.";
  "The other half fails on an id that is new. That is not a fault and is not meant to read as one; it asks for the writer to be run once, so that a new id is something somebody said yes to rather than something that appeared.";
  "The shared ratchet says the same sentence about every name it finds left in a record, and here that sentence is the mild one - it invites the record to be shrunk. Shrinking is right only once somebody has decided what happens to the learners holding the old key: carry their record over to the new id, or accept that those lessons come back unfinished. This prose is where that decision is asked for, so read it before running the writer.";
  let ids = app_code_lesson_ids();
  let path = app_code_lesson_ids_baseline_path();
  let hint =
    "these lesson ids are being taught and the record does not hold them - if they are meant to be what learners' progress is stored under, record them";
  let name_write = fn_name("app_code_lesson_ids_baseline_write");
  let r = await baseline_names_gate_generic(ids, path, hint, name_write);
  return r;
}

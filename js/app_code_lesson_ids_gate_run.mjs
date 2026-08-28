import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_ids } from "./app_code_lesson_ids.mjs";
import { app_code_lesson_ids_baseline_path } from "./app_code_lesson_ids_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function app_code_lesson_ids_gate_run() {
  arguments_assert(arguments, 0);
  ("Fail if the set of lesson ids the code app teaches is not the set it last recorded. Read-only.");
  ("The half that matters is the one for an id that has gone. What a learner has finished is written down on their own device under the lesson's id and nothing else - the record is an object keyed by it - so an id is a value that has already left here and cannot be moved from here. When one changes, every learner who finished that lesson is holding a key that now names nothing, the lesson reads as never started, and their place in it is asked for again. Nothing tells them why, and nothing here goes red.");
  ("★ AN ID IS NOW WRITTEN DOWN, AND THAT IS WHAT THIS GATE WON. It used to be built out of the lesson's category and the words handed to its title maker, so it was spelled the way it was only as a consequence of two other decisions: recategorising a lesson moved it, and rewording those title words moved it. Neither edit looks like it touches a stored key. They are all written down now, one per lesson, under the lesson's own function name - so the only way to move one is to open the table and move it, which is an edit that looks like exactly what it is.");
  ("What that leaves this gate watching is the table against the course: a lesson added and not given an id, or an id changed on purpose. Both should still be said out loud, which is why the gate stays.");
  ("The other half fails on an id that is new. That is not a fault and is not meant to read as one; it asks for the writer to be run once, so that a new id is something somebody said yes to rather than something that appeared.");
  ("The shared ratchet says the same sentence about every name it finds left in a record, and here that sentence is the mild one - it invites the record to be shrunk. Shrinking is right only once somebody has decided what happens to the learners holding the old key: carry their record over to the new id, or accept that those lessons come back unfinished. This prose is where that decision is asked for, so read it before running the writer.");
  let ids = app_code_lesson_ids();
  let path = app_code_lesson_ids_baseline_path();
  let hint =
    "these lesson ids are being taught and the record does not hold them - if they are meant to be what learners' progress is stored under, record them";
  let name_write = fn_name("app_code_lesson_ids_baseline_write");
  let r = await baseline_names_gate_generic(ids, path, hint, name_write);
  return r;
}

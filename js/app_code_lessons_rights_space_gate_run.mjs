import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lessons_rights_space_carrying } from "./app_code_lessons_rights_space_carrying.mjs";
export async function app_code_lessons_rights_space_gate_run() {
  "Gate: no code lesson hands over a name-word starting with a space. Throws so the dispatcher seam exits nonzero.";
  "The space had no effect on the slug a shared link is written with, because the";
  "normalizer collapses the run of underscores it makes - which is why sixteen";
  "lessons carried it and two did not for as long as they did. Nobody could see it,";
  "so nobody could keep it either way, and the convention was decided one file at a";
  "time by whichever lesson was copied.";
  "That is what makes this worth a gate rather than a sweep alone. A defect nothing";
  "shows and nothing punishes comes back the next time a lesson is copied from an old";
  "one, and the sweep would have to be rediscovered from scratch.";
  "The lessons at fault are thrown as a record rather than printed and then summed up in a sentence, because whoever reads a failure next reads it for names and cannot tell a name being accused from a name being named as the cure. Here the cure is one command, and naming it in the same breath as the offenders made every app that ships it look guilty.";
  let carrying = await app_code_lessons_rights_space_carrying();
  let f_name = fn_name("app_code_lessons_rights_space_strip");
  let hint = text_combine_multiple([
    "these hand over a name-word starting with a space - take it off with ",
    f_name,
  ]);
  list_empty_is_assert_json(carrying, {
    hint,
  });
  let r = {
    carrying: 0,
  };
  return r;
}

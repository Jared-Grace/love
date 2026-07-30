import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lessons_rights_space_carrying } from "./app_code_lessons_rights_space_carrying.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
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
  let carrying = await app_code_lessons_rights_space_carrying();
  for (let f_name of carrying) {
    console.log("leading space in name-words  " + f_name);
  }
  console.log("lessons carrying a leading space: " + list_size(carrying));
  if (list_empty_not_is(carrying)) {
    throw new Error(
      "code lesson name-words gate: " +
        list_size(carrying) +
        text_combine_multiple([
          " lessons hand over a name-word starting with a space - take it off with ",
          fn_name("app_code_lessons_rights_space_strip"),
        ]),
    );
  }
  let r = {
    carrying: 0,
  };
  return r;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { bless_told_after_prayer_or_null } from "./bless_told_after_prayer_or_null.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_g_bless_notice } from "./app_g_bless_notice.mjs";
import { app_g_bless_finished } from "./app_g_bless_finished.mjs";
export async function app_g_bless_overlay_render_tap_prayed_celebrate(
  r,
  lit_now,
  people_now,
  rung_before,
  rung,
  ground_show,
  faces_show,
) {
  "Everything a prayer comes to once the street has been redrawn and what the prayer reached is known: the sentence that says what happened, and the celebration that shows it.";
  "WHAT JUST HAPPENED IS SAID OVER THE STREET rather than on the prayer panel, because by now the panel is gone and the player is looking at the street again - and the street is what the news is about: faces elsewhere on it just went bright, or every prayer from here on reaches a whole household.";
  "THE SENTENCE IS WORKED OUT FROM THE FACES THAT WERE COUNTED, not from the size of the rung. A line that says how many people a prayer reached has to be told how many it reached, and the only honest source of that is the same difference the celebration lights - so the sentence and the faces cannot disagree. Answered from the size of the rung it would be a fixed three or nine, and stay three or nine on the prayer that lights one new face because the other two were lit last week.";
  "WHERE THE SENTENCE IS SAID DEPENDS ON WHAT THE PRAYER DID. A prayer that finished a whole house off hands its line to the panel that celebrates the house; one that finished nothing puts the line up on its own.";
  "GROUND AND FACES ARE HANDED OVER AS TWO LISTS because they are lit two different ways: ground where it lies, faces on the light each person carries with them. That is also what lets a prayer over a single person be celebrated at all - nothing was finished and no house filled in, and the whole of what changed is one face.";
  "They are shown in turn rather than at once, faces first. A prayer reaches a face where that person happens to be standing and a house where the house is, and those are rarely the same place - so a camera aimed at both together sits between them and shows neither. Which order, and how each is held on the screen, is settled where they are celebrated rather than here.";
  "THE DRAW THAT PUTS THE FINISHED HOUSE UP IS HANDED OVER rather than done here, because only the celebration knows when the faces are done with. It also has to happen before the ground celebration and not after it: that flash is white light coming back off the street, and off a square with nothing underneath it what it reveals is an empty one.";
  arguments_assert(arguments, 7);
  let faces = list_size(people_now);
  let line = bless_told_after_prayer_or_null(rung_before, rung, faces);
  let anything = list_concat_multiple([lit_now, people_now]);
  let nothing = list_empty_is(anything);
  if (nothing) {
    app_g_bless_notice(line);
    return;
  }
  await app_g_bless_finished(
    r,
    lit_now,
    people_now,
    line,
    ground_show,
    faces_show,
  );
}

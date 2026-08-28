import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { app_g_bless_overlay_render_tap_prayed_person_id_is } from "./app_g_bless_overlay_render_tap_prayed_person_id_is.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { not } from "./not.mjs";
export function app_g_bless_overlay_render_tap_prayed_person_id_pray(
  id,
  view_everyone,
  person_pray,
) {
  "Prays for whoever carries this person number, wherever they are standing and whether or not the player is looking at them.";
  "IT EXISTS FOR THE DEV OPENINGS, which set a street up in a particular state and then want the one prayer that state was built for said straight away. A test that has to be walked to is a test that is run less often than it should be.";
  "IT IS ASKED BY NUMBER because that is what an opening can name. A person number is arithmetic - the third resident of the first household is a sum - while the person object itself only exists once the street has been built.";
  "SIGHT IS NOT CHARGED HERE, and that is the difference between this and a tap. A player may only pray for somebody they can see; this is not a player, it is the address bar, and it is behind the same dev gate as every other opening.";
  "A NUMBER NOBODY CARRIES IS ANSWERED WITH SILENCE rather than with a complaint, because an opening naming a person who is not on this street is asking for a prayer there is nobody to say.";
  arguments_assert(arguments, 3);
  let everyone = bless_view_people(view_everyone);
  function person_id_is(someone) {
    let r = app_g_bless_overlay_render_tap_prayed_person_id_is(someone, id);
    return r;
  }
  let person = list_find_or_null(everyone, person_id_is);
  if (not(person)) {
    return;
  }
  person_pray(person);
}

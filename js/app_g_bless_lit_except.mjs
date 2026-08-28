import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { list_difference } from "./list_difference.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function app_g_bless_lit_except(lit, held) {
  arguments_assert(arguments, 2);
  ("Everybody the record says has been prayed for, less the few who are being held back -");
  ("the answer the gold marks on the street are drawn from while a celebration is running.");
  ("Held back rather than not yet written down. The prayer is said and the record says so");
  ("the instant it is said, and that is what every other reading of the street depends on;");
  ("what is being delayed is only the moment the player is SHOWN it, which is a question");
  ("about the picture and belongs to the picture alone.");
  ("The people are taken out by WHO they are, never by where they stand. A person walks, so");
  ("two readings of the street a breath apart put them on two squares - and the whole reason");
  ("a light is held back is that a celebration is running over somebody who is moving.");
  let people = bless_view_people(lit);
  let shown = list_difference(people, held);
  let view = bless_view_of_people(shown);
  return view;
}

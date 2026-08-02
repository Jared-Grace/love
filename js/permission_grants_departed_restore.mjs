import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { permission_settings_allow_drift } from "./permission_settings_allow_drift.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { permission_grant_add_multiple } from "./permission_grant_add_multiple.mjs";
export async function permission_grants_departed_restore() {
  "puts back the granted names that stand in the settings file but have gone missing from the JS list that generates it, and proves afterwards that the drift is closed";
  "this cannot widen what Claude may run. Every name it puts back is one already standing in the settings file, which is to say one the human already approved by name; the loss is the list being overwritten, not a decision being taken. So the set is found rather than handed in, and a name nobody granted is not reachable from here at all.";
  "it refuses to act when anything ARRIVED alongside what departed. A name gone with another arrived is a rename - the list followed the function and the settings file did not - and putting the old name back would restore a grant on a word nothing answers to, which the reachability gate would then fail. That case wants the settings file written out again, so it is named rather than guessed at.";
  "the cause it exists for is a peer: several of us edit this one directory at once, and two grants landing together had one read the names list before the other wrote it, so the second write dropped the first one's names while leaving their rules on disk. That happened twice in one session and was repaired both times by hand, which is the shape of a missing command.";
  let before = await permission_settings_allow_drift();
  let departed = property_get(before, "departed");
  let arrived = property_get(before, "arrived");
  let nothing_gone = list_empty_is(departed);
  if (nothing_gone) {
    let r = {
      restored: [],
      drift: before,
    };
    return r;
  }
  list_empty_is_assert_json(arrived, {
    hint: text_combine_multiple([
      "a name arrived while another departed, which reads as a rename rather than a lost write - run ",
      fn_name("permission_settings_allow_write"),
      " to make the file follow the list, instead of putting the old name back",
    ]),
    arrived,
    departed,
  });
  let names_comma = list_join_comma(departed);
  await permission_grant_add_multiple(names_comma);
  let after = await permission_settings_allow_drift();
  let closed = {
    restored: departed,
    drift: after,
  };
  return closed;
}

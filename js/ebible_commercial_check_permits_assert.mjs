import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { throws_not_async } from "./throws_not_async.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function ebible_commercial_check_permits_assert(assert_folder) {
  arguments_assert(arguments, 1);
  ("Proves that the licence check still lets an ordinary translation through, and hands back the folder it was proved on.");
  ("The other half of what a refusing check is made of. A check that turns everything away refuses the right text every time it is asked and is still broken, and nothing about the refusing alone would ever say so.");
  ("Which check is asked comes from the caller, because the two gates over this hold the same question at different widths - one folder at a time, or a whole list of them - and the widths are the only thing that differs between them.");
  let permitted = ebible_folder_english();
  async function permits() {
    await assert_folder(permitted);
  }
  let walked = await throws_not_async(permits);
  true_is_assert_json(walked, {
    hint: "the check turned away a translation this repo is free to ship, so it is refusing everything rather than refusing the right thing",
    bible_folder: permitted,
  });
  return permitted;
}

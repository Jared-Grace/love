import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_get } from "./list_get.mjs";
import { throws_assert_json_async } from "./throws_assert_json_async.mjs";
export async function ebible_commercial_check_refuses_assert(
  refused,
  assert_folder,
  hint,
) {
  arguments_assert(arguments, 3);
  ("Proves that the licence check still turns away a translation this repo may not ship, and hands back the one it was proved on - or null when there was nothing on this disk to prove it with.");
  ("Null is the honest answer to a run where every English translation here happens to be shippable. Nothing was refused because nothing needed refusing, which is not the same as the check working, and a gate reading null knows to say its refusing half went untested rather than to say it passed.");
  ("Which check is asked and what to say when it lets one through both come from the caller: the two gates over this hold the same question at different widths, and each one blames a different thing when the answer is wrong.");
  let none = list_empty_is(refused);
  if (none) {
    return null;
  }
  let one = list_get(refused, 0);
  async function refuses() {
    await assert_folder(one);
  }
  await throws_assert_json_async(refuses, {
    hint,
    bible_folder: one,
  });
  return one;
}

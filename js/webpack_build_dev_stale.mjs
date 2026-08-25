import { arguments_assert } from "./arguments_assert.mjs";
import { webpack_dev_stale_names } from "./webpack_dev_stale_names.mjs";
import { webpack_build_dev } from "./webpack_build_dev.mjs";
import { property_get } from "./property_get.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { list_add } from "./list_add.mjs";
export async function webpack_build_dev_stale() {
  "Rebuild every dev bundle that is behind the code going into it, and then ask again to show that none is.";
  "IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE. A list typed by a caller is a list that was right when it was typed, and the whole point here is that what has fallen behind changes with every edit anybody makes - so the set is worked out at the moment of building and cannot disagree with what is actually behind.";
  "ASKING AGAIN AFTERWARDS IS THE PROOF, not a tidiness. A build that quietly did nothing looks exactly like a build that worked, and the file it was to write is already there either way; the second answer is the only thing that tells the two apart.";
  "Each app is committed as it is built rather than all of them at the end, because they are that many separate changes and the tree is shared - a sweep by somebody else lands in the middle of a long run and carries off whatever is finished, under their name instead of this one.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let before = await webpack_dev_stale_names();
  let stale = property_get(before, "stale");
  let built = [];
  for (let a_name of stale) {
    await function_call_commit(webpack_build_dev, [a_name]);
    list_add(built, a_name);
  }
  let after = await webpack_dev_stale_names();
  let r = {
    before,
    built,
    after,
  };
  return r;
}

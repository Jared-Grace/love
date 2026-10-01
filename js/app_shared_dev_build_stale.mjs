import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { app_shared_dev_stale_found } from "./app_shared_dev_stale_found.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_dev_build_stale() {
  arguments_assert(arguments, 0);
  ("Builds every app whose dev page is behind the sources it was made from, the whole way - bundle, page and record - and then asks again to show that none is.");
  ("IT GOES ROUND THE WHOLE ROAD AND NOT JUST THE BUNDLE, which is the only reason it is here beside the bundle-only sweep. Compiling leaves three things on disk and a reader needs all three: the bundle, the page that names which bundle to fetch, and the record of what the bundle was made out of. A sweep that writes the first and not the second hands a phone that has been here before the address it already has, so the old bundle is served and the change is invisible on the one device it was made for - and a sweep that writes neither record leaves this very question answering stale about an app that was just built.");
  ("ASKING AGAIN AFTERWARDS IS THE PROOF. A build that quietly did nothing looks exactly like one that worked, because the files it was to write are there either way, and the second answer is the only thing that tells them apart.");
  ("IT TAKES THE UNRECORDED ONES TOO. A bundle nothing was ever written down about cannot be compared against anything, so it is not known to be behind - and it is not known to be current either, which is the same position a reader is in either way. Building it settles the question instead of leaving it open.");
  ("Each app commits as it lands rather than all of them at the end, because they are that many separate changes and the tree is shared: somebody else's sweep arrives in the middle of a long run and carries off whatever is finished, under their name instead of this one.");
  await ai_git_noted();
  let before = await app_shared_dev_stale_found();
  let stale = property_get(before, "stale");
  let unrecorded = property_get(before, "unrecorded");
  let wanted = list_concat_unique(stale, unrecorded);
  let built = [];
  for (let a_name of wanted) {
    await function_call_commit(app_shared_dev_build, [a_name]);
    list_add(built, a_name);
  }
  let after = await app_shared_dev_stale_found();
  let r = {
    before,
    built,
    after,
  };
  return r;
}

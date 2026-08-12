import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { git_remote_origin_url_get } from "./git_remote_origin_url_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function git_remote_origin_is(folder) {
  arguments_assert(arguments, 1);
  ("Whether this folder has anywhere to push to - true when a remote named origin is set, and false when there is none at all.");
  ("It is asked before pushing, so a repository kept deliberately off the internet is passed over rather than failed at. Both endings leave the machine untouched, but only one of them is quiet: a push with nowhere to go complains every few minutes for as long as the machine is on, and a log that always carries the same complaint is a log nobody reads. Silence has to mean something for a complaint to be worth printing.");
  ("Git is asked rather than a list of which repositories are private being kept here. A typed list is right on the day it is written and goes on naming what it named afterwards, while the question git is asked is about the folder that is actually there.");
  ("Being asked is not the same as being allowed. This says only that somewhere to push exists, and a repository with no remote cannot be published by accident; adding one is a deliberate act, and that act is what this reads.");
  async function lambda() {
    let url = await git_remote_origin_url_get(folder);
    return url;
  }
  let found = await catch_null_async(lambda);
  let missing = null_is(found);
  let r = not(missing);
  return r;
}

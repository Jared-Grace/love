import { function_exists } from "./function_exists.mjs";
import { assert } from "./assert.mjs";
import { marker_first } from "./marker_first.mjs";
import { marker_current_set } from "./marker_current_set.mjs";
import { data_transform } from "./data_transform.mjs";
export async function data_watch_set() {
  function lambda(previous) {
    return true;
  }
  await data_transform("watch", null, lambda);
}

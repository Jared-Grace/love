import { data_boolean_set } from "./data_boolean_set.mjs";
import { function_exists } from "./function_exists.mjs";
import { assert } from "./assert.mjs";
import { marker_first } from "./marker_first.mjs";
import { marker_current_set } from "./marker_current_set.mjs";
import { data_transform } from "./data_transform.mjs";
export async function data_watch_set(v) {
  const property_name = "watch";
  await data_boolean_set(property_name, v);
}

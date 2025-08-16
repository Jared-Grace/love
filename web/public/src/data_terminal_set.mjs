import { marker } from "./marker.mjs";
import { data_boolean_set } from "./data_boolean_set.mjs";
import { function_exists } from "./function_exists.mjs";
import { assert } from "./assert.mjs";
import { marker_first } from "./marker_first.mjs";
import { marker_current_set } from "./marker_current_set.mjs";
import { data_transform } from "./data_transform.mjs";
export async function data_terminal_set(v) {
  marker("1");
  const property_name = "terminal";
  await data_boolean_set(property_name, v);
}

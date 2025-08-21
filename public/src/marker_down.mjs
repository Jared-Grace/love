import { marker } from "./marker.mjs";
import { marker_down_generic } from "./marker_down_generic.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { js_stack_list_block_is } from "./js_stack_list_block_is.mjs";
import { integer_to } from "./integer_to.mjs";
import { log } from "./log.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_is } from "./list_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { assert } from "./assert.mjs";
export async function marker_down(delta) {
  marker("1");
  let v = await marker_down_generic(delta_get);
  return v;
  function delta_get() {
    let i = integer_to(delta);
    return i;
  }
}

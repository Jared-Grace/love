import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_answer_field_shape } from "./g_arc_answer_field_shape.mjs";
import { app_g_arcs_field_pair } from "./app_g_arcs_field_pair.mjs";
export function app_g_arcs_turn_field({
  name,
  value,
  block,
  moved,
  held,
  voice_color,
  marks,
}) {
  arguments_assert(arguments, 1);
  let shape = g_arc_answer_field_shape("turn", name);
  app_g_arcs_field_pair({
    parent: block,
    moved_fields: moved,
    held_fields: held,
    name,
    value,
    shape,
    voice_color,
    marks,
  });
}

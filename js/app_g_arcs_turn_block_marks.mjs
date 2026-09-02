import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_arcs_depth_block } from "./app_g_arcs_depth_block.mjs";
import { properties_size } from "./properties_size.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_g_arcs_turn_block_turned } from "./app_g_arcs_turn_block_turned.mjs";
export function app_g_arcs_turn_block_marks(
  card,
  parent,
  number,
  bench,
  opener,
  voice_color,
  before,
) {
  arguments_assert(arguments, 7);
  let reference = property_get(card, "reference");
  let scripture = property_get(card, "scripture");
  let after = property_get(card, "after");
  let believes = property_get(card, "believes");
  let notes = property_get(card, "notes");
  let moved = property_get(card, "moved");
  let held = property_get(card, "held");
  let unechoed = property_get(card, "passage_unechoed");
  let block = app_g_arcs_depth_block(parent, 2);
  let v = String(number);
  let moved_count = properties_size(moved);
  let held_count = properties_size(held);
  let changed = not_equal(moved_count, 0);
  let r = app_g_arcs_turn_block_turned(
    held_count,
    v,
    changed,
    moved_count,
    unechoed,
    block,
    bench,
    opener,
    moved,
    held,
    voice_color,
    before,
    reference,
    scripture,
    after,
    believes,
  );
  let turned = property_get(r, "turned");
  let marks = property_get(r, "marks");
  let r2 = {
    believes,
    notes,
    moved,
    held,
    block,
    turned,
    marks,
  };
  return r2;
}

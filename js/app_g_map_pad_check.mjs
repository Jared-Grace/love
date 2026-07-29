import { assert_message } from "./assert_message.mjs";
import { app_g_map_pad } from "./app_g_map_pad.mjs";
import { app_g_map_buffer_pad } from "./app_g_map_buffer_pad.mjs";
import { app_a_water } from "./app_a_water.mjs";
import { equal } from "./equal.mjs";
export function app_g_map_pad_check() {
  "deterministic REGRESSION check of the map buffer padding: a 2x2 core becomes a (2 + 2*pad) square whose outer ring is all water and whose original content is preserved at offset [pad][pad]. run: node scripts/ai.mjs app_g_map_pad_check";
  const pad = app_g_map_buffer_pad();
  const water = app_a_water();
  const core = [
    ["a", "b"],
    ["c", "d"],
  ];
  const padded = app_g_map_pad(core);
  const size = 2 + 2 * pad;
  assert_message(equal(padded.length, size), "padded has inner + 2*pad rows");
  assert_message(
    equal(padded[0].length, size),
    "padded has inner + 2*pad cols",
  );
  assert_message(equal(padded[0][0], water), "top-left corner is water buffer");
  assert_message(
    equal(padded[size - 1][size - 1], water),
    "bottom-right corner is water buffer",
  );
  assert_message(
    equal(padded[pad][pad], "a"),
    "core top-left preserved at [pad][pad]",
  );
  assert_message(
    equal(padded[pad + 1][pad + 1], "d"),
    "core bottom-right preserved",
  );
  assert_message(
    equal(padded[pad - 1][pad], water),
    "the tile just above the core is water",
  );
  return {
    ok: true,
    size,
  };
}

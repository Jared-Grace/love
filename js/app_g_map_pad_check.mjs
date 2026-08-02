import { fn_name } from "./fn_name.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { assert_message } from "./assert_message.mjs";
import { app_g_map_pad } from "./app_g_map_pad.mjs";
import { app_g_map_buffer_pad } from "./app_g_map_buffer_pad.mjs";
import { g_water } from "./g_water.mjs";
import { equal } from "./equal.mjs";
export function app_g_map_pad_check() {
  ("deterministic REGRESSION check of the map buffer padding: a 2x2 core becomes a (2 + 2*pad) square whose outer ring is all water and whose original content is preserved at offset [pad][pad]. run: node scripts/ai.mjs ",
    fn_name("app_g_map_pad_check"));
  let pad = app_g_map_buffer_pad();
  let water = g_water();
  let core = [
    ["a", "b"],
    ["c", "d"],
  ];
  let padded = app_g_map_pad(core);
  let size = 2 + multiply(2, pad);
  let b = equal(padded.length, size);
  assert_message(b, "padded has inner + 2*pad rows");
  let b2 = equal(padded[0].length, size);
  assert_message(b2, "padded has inner + 2*pad cols");
  let b3 = equal(padded[0][0], water);
  assert_message(b3, "top-left corner is water buffer");
  let b4 = equal(padded[subtract(size, 1)][subtract(size, 1)], water);
  assert_message(b4, "bottom-right corner is water buffer");
  let b5 = equal(padded[pad][pad], "a");
  assert_message(b5, "core top-left preserved at [pad][pad]");
  let b6 = equal(padded[pad + 1][pad + 1], "d");
  assert_message(b6, "core bottom-right preserved");
  let b7 = equal(padded[subtract(pad, 1)][pad], water);
  assert_message(b7, "the tile just above the core is water");
  let r = {
    ok: true,
    size,
  };
  return r;
}

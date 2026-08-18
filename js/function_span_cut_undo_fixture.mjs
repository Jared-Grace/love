import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function function_span_cut_undo_fixture(row) {
  arguments_assert(arguments, 1);
  ("A stand-in used once to watch the guarded cut undo itself, and removed straight afterwards.");
  let opening = property_get(row, "opening");
  let closing = property_get(row, "closing");
  let banner = property_get(row, "banner");
  let footing = property_get(row, "footing");
  let r = {
    opening,
    closing,
    banner,
    footing,
  };
  return r;
}

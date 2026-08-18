import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_upper_case } from "./text_upper_case.mjs";
export function function_span_cut_undo_fixture(row) {
  arguments_assert(arguments, 1);
  ("A stand-in used once to watch the guarded cut undo itself, and removed straight afterwards.");
  let opening = property_get(row, "opening");
  let closing = property_get(row, "closing");
  let shouted = text_upper_case(opening);
  let banner = text_combine(shouted, closing);
  let footing = text_combine(banner, shouted);
  let r = {
    banner,
    footing,
  };
  return r;
}

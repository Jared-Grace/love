import { list_single } from "../../js/list_single.mjs";
import { list_size_1_assert } from "../../js/list_size_1_assert.mjs";
import { js_flo } from "../../js/js_flo.mjs";
export const example = {
  kind: "rejection",
  title: "A single-item helper refuses a two-item list",
  note: [
    "Exactly-one is an invariant, not a hope: ",
    { fn: list_single.name },
    " asserts its list has one item (via ",
    { fn: list_size_1_assert.name },
    ") before returning it, so a two-item list is refused at the boundary — the same guard ",
    { fn: js_flo.name },
    " leans on to require a single-export file.",
  ],
  // human-readable form
  call: `${list_single.name}([1, 2])`,
  expectText: `throws — a single list has exactly one item`,
  // machine-runnable form: pass the two-item list as a literal value, call, assert
  fn: list_single.name,
  args: [{ value: [1, 2], parse: "value" }],
  expect: "throw",
};

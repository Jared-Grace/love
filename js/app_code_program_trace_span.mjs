import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_slice } from "./text_slice.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_program_trace_span(side, code) {
  arguments_assert(arguments, 2);
  ("where a side of an operator stands in the line, with any ( ) written round it, since once it is solved they go with it: (3 + 5) / 2 reads 8 / 2. A ( just before a side and a ) just after it are a pair, since the side holds as many of each as it closes; and they group the side rather than belonging to a call or an if, whose ( ) hold the whole of what is in them, which here is the operator the side stands in");
  let from = property_get(side, "start");
  let to = property_get(side, "end");
  while (
    equal(text_slice(code, subtract(from, 1), from), "(") &&
    equal(text_slice(code, to, to + 1), ")")
  ) {
    from = subtract(from, 1);
    to = to + 1;
  }
  let r = {
    from,
    to,
  };
  return r;
}

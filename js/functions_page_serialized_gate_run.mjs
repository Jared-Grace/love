import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_page_serialized_report } from "./functions_page_serialized_report.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_page_serialized_gate_run() {
  "QA gate: no function sent to a browser reads a name imported at the top of its file.";
  "A function handed to a browser driver to run in the page is handed over as text. The import lines above it stay here, so a name they bound is simply absent where the function runs and the browser stops on it - a failure that surfaces as a browser test going wrong, pointing at nothing, days after whatever wrote the name.";
  "The thing that writes those names is the repo's own normalizing pass, which rewrites a comparison into a call and adds the import for it. That is right in every file but these, and in these it cannot be seen at all: no gate reads what runs in a browser, and reading the source shows a perfectly ordinary line. This gate is the reading that catches it.";
  "It stands at zero. Every one of these files was clean the day it was added, so there is nothing being lived with, and a file that fails is a file broken since whatever last touched it - not a standard being raised.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let exposed = await functions_page_serialized_report();
  function borrowing_is(o) {
    let some = property_list_empty_not_is(o, "borrowed");
    return some;
  }
  let broken = list_filter(exposed, borrowing_is);
  list_empty_is_assert_json(broken, {
    hint: "a function sent to a browser is reading a name imported at the top of its file - that name does not exist where the function runs, so write what it needs inside the function itself and leave nothing in there for a normalizing pass to reach for",
    broken,
  });
  let r = {
    exposed: list_size(exposed),
  };
  return r;
}

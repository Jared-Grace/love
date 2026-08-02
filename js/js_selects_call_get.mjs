import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_call_get } from "./js_node_call_get.mjs";
export function js_selects_call_get(selects) {
  arguments_assert(arguments, 1);
  ("The one call an address picked out.");
  ("Every verb that changes a single call starts here, and each of them wrote the");
  ("same two steps: insist the address found exactly one thing, then take the call");
  ("from it whether the address stopped at the call or at the line holding it.");
  ("Insisting on one is part of the answer rather than a check in front of it. A");
  ("verb that changes one call has no reading of two, so an address that matched");
  ("twice has to stop here - naming which of them was meant is the caller's to");
  ("say, and picking the first would quietly change a call nobody was looking at.");
  let node = list_single(selects);
  let call = js_node_call_get(node);
  return call;
}

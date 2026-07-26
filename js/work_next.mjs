import { work_items } from "./work_items.mjs";
import { work_item_print } from "./work_item_print.mjs";
import { list_first } from "./list_first.mjs";
export async function work_next() {
  "The one thing to start now, printed with the rest under it as context. Call this instead of ending your turn to ask what to do: an answer always exists, so the asking costs the human a reply and buys nothing.";
  "Everything it returns is safe to start unasked, meaning it preserves behaviour or only adds a unit nothing calls yet. That is the whole admission test, and it is also the stopping rule: the moment the next step needs a judgement the repo cannot make, stop and report instead of picking something to stay busy.";
  let items = await work_items();
  for (let item of items) {
    work_item_print(item);
  }
  let first = list_first(items);
  return first;
}

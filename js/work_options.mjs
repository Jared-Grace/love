import { work_items } from "./work_items.mjs";
import { work_item_print } from "./work_item_print.mjs";
import { list_first } from "./list_first.mjs";
export async function work_options() {
  "Everything a Claude is allowed to start unasked, printed together. Call this instead of ending your turn to ask what to do: a permitted answer always exists, so the asking costs the human a reply and buys nothing.";
  "A permission set, not a queue. It hands back every option rather than a winner because ranking them here would freeze one guess, made far from the work and long before it, into a constant. The Claude reading this list just touched the code and knows which duplication is hot and which shape of edit it kept repeating by hand, and that knowledge cannot reach a sort written months earlier. So the list carries the criterion and the caller carries the choice.";
  "Choose by how much future usage the work removes, because the budget is finite and idle work only earns its cost by repaying in the currency it spends. Idling is free and low-value work is not, so picking nothing is a real option and the right one whenever nothing on the list clears that bar.";
  "Freedom over which, never over whether it is safe. Every option here preserves behaviour or only adds a unit nothing calls yet, and that admission test is also the stopping rule: the moment the next step needs a judgement the repo cannot make, stop and report rather than picking something to stay busy.";
  let items = await work_items();
  for (let item of items) {
    work_item_print(item);
  }
  return items;
}

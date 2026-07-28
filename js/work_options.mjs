import { work_items } from "./work_items.mjs";
import { work_item_print } from "./work_item_print.mjs";
export async function work_options() {
  "What a read-only check has proved is outstanding right now, printed. Not everything a Claude may start - the directions that are always open live in the instructions that load with every session, and are deliberately not repeated here.";
  "It used to carry those directions too and promise that an answer always exists. Both are gone on purpose. A copy of the instructions kept beside the instructions can only drift from them, and it did; and a list built never to run out cannot say the one thing worth hearing, which is that nothing measurable is outstanding. An empty answer is now a real answer rather than a gap somebody padded.";
  "A permission set, not a queue. It hands back every item rather than a winner because ranking them here would freeze one guess, made far from the work and long before it, into a constant. The Claude reading this just touched the code and knows which duplication is hot and which shape of edit it kept repeating by hand, and that knowledge cannot reach a sort written months earlier. So the list carries the criterion and the caller carries the choice.";
  "A count is evidence, not a claim to go first. Choose by how much future usage the work removes, because the budget is finite and idle work only earns its cost by repaying in the currency it spends. Idling is free and low-value work is not, so picking nothing is a real option and the right one whenever nothing here clears that bar.";
  "Read the top entries before acting on any of them. Every item is the verdict of a filter written earlier and far from today's code, and such a filter has been wrong here more often than right - the check computes fresh facts every time, but its opinion about what those facts are worth was written once.";
  let items = await work_items();
  for (let item of items) {
    work_item_print(item);
  }
  return items;
}

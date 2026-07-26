import { work_items_measured } from "./work_items_measured.mjs";
import { work_items_standing } from "./work_items_standing.mjs";
import { list_concat } from "./list_concat.mjs";
export async function work_items() {
  "Everything a Claude could safely start right now: items a check proved are there, then directions that are always open. Grouped that way rather than ranked, because the two kinds carry different evidence and the caller weighs them. The list is never empty, which is what lets a Claude keep working instead of spending the human's attention on a question the repo can answer itself.";
  let measured = await work_items_measured();
  let standing = work_items_standing();
  let items = list_concat(measured, standing);
  return items;
}

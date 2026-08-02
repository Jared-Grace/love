import { catch_null_async } from "./catch_null_async.mjs";
import { property_set } from "./property_set.mjs";
export async function list_map_async_record_try(list, lambda$item) {
  "One answer per item, under the item it belongs to, and nothing under an item whose answer could not be worked out";
  "This is the whole body of a sweep - the shape every command that asks the same question of several names ends up written as - and it was hand-written the same way in three of them before it had a name";
  "An item whose answer throws is answered as nothing rather than ending the run, which is the one difference between a sweep and a loop: a single misspelt name would otherwise throw away every answer already paid for";
  "One at a time rather than all at once, so a lambda carrying something it remembers between items still hands each answer what the ones before it learned";
  let found = {};
  for (let item of list) {
    async function answer_one() {
      let answer_found = await lambda$item(item);
      return answer_found;
    }
    let answer = await catch_null_async(answer_one);
    property_set(found, item, answer);
  }
  return found;
}

import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_unordered_at_once } from "./list_map_unordered_at_once.mjs";
export async function list_map_unordered_async(list, lambda$item) {
  "Asks the same question of every item without waiting for one before starting the next, and answers in the order the items were given.";
  "Unordered names the asking, not the answering. The questions overlap in whatever way they finish; the answers come back beside the items they belong to.";
  "A ceiling stands on how many overlap, because a list here is often every function file in the repo and the machine has a limit on how much it will lend at one time. Past that limit it stops answering with files and starts answering with the word for out of handles, and a reading that ran out of handles still looks like a reading.";
  "Same items, same answers, same order. Only when each question starts is different.";
  let at_once = list_map_unordered_at_once();
  let groups = list_chunk(list, at_once);
  let answers = [];
  for (let group of groups) {
    let mapped = list_map(group, lambda$item);
    let waited = await list_wait(mapped);
    list_add_multiple(answers, waited);
  }
  return answers;
}

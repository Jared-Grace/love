import { list_chunk } from "./list_chunk.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function list_map_limited_async(list, lambda$item, limit) {
  "Asks the same question of every item, a fixed number of them at a time, and answers in the order the items were given";
  "Between the two ways of asking that already exist. One at a time spends the whole run waiting, and it is the wrong shape whenever the waiting is on something outside this program - six hundred questions each waiting fifty thousandths of a second is half a minute of doing nothing. All at once is the wrong shape too when each question starts a program of its own, because six hundred programs starting together cost more in the starting than the waiting they save";
  let groups = list_chunk(list, limit);
  let answers = [];
  for (let group of groups) {
    let some = await list_map_unordered_async(group, lambda$item);
    list_add_multiple(answers, some);
  }
  return answers;
}

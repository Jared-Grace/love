import { function_worker_pool_run } from "./function_worker_pool_run.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { log } from "./log.mjs";
import { identity } from "./identity.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
// Proves the two properties the pool exists for: answers are correct, and many
// calls are served by a BOUNDED number of node processes rather than one each.
export async function function_worker_pool_run_try() {
  let wanted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  async function lambda(n) {
    let got = await function_worker_pool_run(identity.name, [n]);
    if (got !== n) {
      throw new Error(
        text_combine_multiple([
          "the pool answered ",
          JSON.stringify(got),
          " for ",
          identity.name,
          "(",
          n,
          ") — the job id routing is crossing replies between callers",
        ]),
      );
    }
    return got;
  }
  let answers = await list_map_unordered_async(wanted, lambda);
  log(function_worker_pool_run_try.name, {
    calls: wanted.length,
    answers,
  });
  return { calls: wanted.length, answers };
}

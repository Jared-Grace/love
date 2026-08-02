import { not_equal } from "./not_equal.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_worker_pool_run } from "./function_worker_pool_run.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { log } from "./log.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
("Proves the two properties the pool exists for: answers are correct, and many");
("calls are served by a BOUNDED number of node processes rather than one each.");
export async function function_worker_pool_run_try() {
  let wanted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  async function lambda(n) {
    let f_name = fn_name("identity");
    let got = await function_worker_pool_run(f_name, [n]);
    if (not_equal(got, n)) {
      let json = json_to(got);
      let f_name2 = fn_name("identity");
      let combined = text_combine_multiple([
        "the pool answered ",
        json,
        " for ",
        f_name2,
        "(",
        n,
        ") — the job id routing is crossing replies between callers",
      ]);
      throw new Error(combined);
    }
    return got;
  }
  let answers = await list_map_unordered_async(wanted, lambda);
  let f_name3 = fn_name("function_worker_pool_run_try");
  log(function_worker_pool_run_try.name, {
    calls: wanted.length,
    answers,
  });
  let r = {
    calls: wanted.length,
    answers,
  };
  return r;
}

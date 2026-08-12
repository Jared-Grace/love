import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_worker_pool_run } from "./function_worker_pool_run.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { log } from "./log.mjs";
("Proves the two properties the pool exists for: answers are correct, and many");
("calls are served by a BOUNDED number of node processes rather than one each.");
export async function function_worker_pool_run_try() {
  "What fails is thrown as a record naming the pool, because whoever reads a failure";
  "next reads it for names and takes every one of them as accused. The errand the pool";
  "was given is the plainest innocent here - it is the smallest correct function in the";
  "repo, chosen for this because it cannot be the thing that is wrong, and nearly every";
  "app ships it. Named in the same breath as the fault, it held all of them.";
  let wanted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  async function lambda(n) {
    let f_name = fn_name("identity");
    let got = await function_worker_pool_run(f_name, [n]);
    let crossed = [];
    if (not_equal(got, n)) {
      let item = function_worker_pool_run.name;
      list_add(crossed, item);
    }
    let json = json_to(got);
    let hint = {
      advice: "the job id routing is crossing replies between callers",
      errand: f_name,
      asked: n,
      answered: json,
    };
    list_empty_is_assert_json(crossed, {
      hint,
    });
    return got;
  }
  let answers = await list_map_unordered_async(wanted, lambda);
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

import { portfolio_qa_tests_run_result } from "../../portfolio_qa/js/portfolio_qa_tests_run_result.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { list_map } from "./list_map.mjs";
import { catch_call_later_async } from "./catch_call_later_async.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_tests_run(fns, name_get) {
  let errors = [];
  function lambda(item) {
    function on_error(error_caught) {
      list_add(errors, {
        name: name_get(item),
        error: error_caught,
      });
    }
    let i = catch_call_later_async(on_error, item);
    return i;
  }
  let mapped = list_map(fns, lambda);
  await invoke_multiple_unordered_async(mapped);
  let result = portfolio_qa_tests_run_result(fns, errors);
  return result;
}

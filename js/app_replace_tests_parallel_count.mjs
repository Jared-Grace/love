import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { server_url_own_is } from "./server_url_own_is.mjs";
export function app_replace_tests_parallel_count(url_prefix) {
  function_duplicate_kind_parallel();
  "$plain url_prefix";
  ("how many headless browsers pull goals from the shared queue at once; measured speedup saturates around here (1->4 workers is ~3.6x, but 4->12 buys almost nothing because each headless chromium is itself multi-process and soaks several cores), so 8 sits at the knee and leaves the 14-core box headroom");
  ("a page served from somewhere out on the internet gets fewer, because the limit there is the host rather than this box: eight browsers reloading a deployed page dropped the connection twice, after 107 and after 276 goals, while the same eight against this repo's own server walk all 980 without a stumble. Four costs almost nothing by the measurement above and asks the host for half as much at once");
  if (server_url_own_is(url_prefix)) {
    let own = 8;
    return own;
  }
  let count = 4;
  return count;
}

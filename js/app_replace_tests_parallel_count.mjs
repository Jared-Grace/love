export function app_replace_tests_parallel_count() {
  "how many headless browsers pull goals from the shared queue at once; measured speedup saturates around here (1->4 workers is ~3.6x, but 4->12 buys almost nothing because each headless chromium is itself multi-process and soaks several cores), so 8 sits at the knee and leaves the 14-core box headroom";
  let count = 8;
  return count;
}

export function app_replace_tests_parallel_count() {
  "how many headless browsers pull goals from the shared queue at once; this box has 14 cores, so 12 leaves two for the OS, the node runner, and the dev server while draining the queue fast";
  let count = 12;
  return count;
}

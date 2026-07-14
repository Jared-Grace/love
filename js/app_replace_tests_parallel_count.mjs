export function app_replace_tests_parallel_count() {
  "how many browsers pull goals from the shared queue at once; headless makes parallel browsers safe and cheap on Debian, so raise this to trade memory for speed";
  let count = 4;
  return count;
}

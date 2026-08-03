export function processes_sleep_loop_stopped_seconds() {
  "How long a loop that waits by sleeping has to have been going round before it counts as stopped rather than still waiting.";
  "Four hours. There is an enormous gap to draw the line in, so nothing here is a close call. Measured on 2026-08-03, every waiter that was genuinely waiting had been alive twenty-four minutes or less - the longest was a gate run somebody had started that morning - and every waiter that could never finish had been going for at least eighteen hours and fifty minutes. Nothing at all lay between the two.";
  "The line is drawn far above the honest waiting rather than in the middle of the gap, because the two mistakes cost differently. Calling a working session stopped sends somebody to end a shell that was about to return; calling a stopped session healthy costs only that it is noticed later, and it will still be noticed, because a loop that cannot finish never stops being caught.";
  let r = 14400;
  return r;
}

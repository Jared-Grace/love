import { arguments_assert } from "./arguments_assert.mjs";
export function promise_start_unawait(start) {
  arguments_assert(arguments, 1);
  ("Starts the given job at once and hands its promise straight back, without waiting for it.");
  ("IT EXISTS SO THAT A PROMISE CAN BE HELD RATHER THAN OPENED. The once-init shape stores the promise of a job so that everybody who asks for the thing while it is still starting shares that one job; storing the answer instead would let each of them start a job of their own, which is the exact race the shape was written to close. Holding a promise means writing a call that nothing waits for, and there is no way to say that in a line of code that reads any differently from having forgotten to.");
  ("AND THE AUTO PASS CANNOT TELL THOSE TWO APART, so left alone it writes the wait in - and then makes the function holding the call wait as well, and walks out to that function's callers and makes them wait too. What was one shared spawn becomes one spawn per asker, and nothing throws, because every step of that rewrite is correct for the mistake it is written to fix.");
  ("THE JOB ARRIVES AS A PARAMETER AND THAT IS THE WHOLE MECHANISM. The pass leaves a call alone when a scope around it binds the name, because a bound name is a local and says nothing about the repo function spelled the same way - so a job called through a parameter is a job the pass has no opinion about. A name written in this file would not survive, because the pass lifts an inner function out to the top of the repo and a lifted name is a repo name again.");
  ("IT IS NOT A DELAY AND MUST NOT BE READ AS ONE. The job is running by the time this hands back; what is skipped is only the waiting. A caller that wants the answer waits for what it gets back, and a caller that wants the sharing stores it.");
  let r = start();
  return r;
}

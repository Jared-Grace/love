import { log_keep } from "./log_keep.mjs";
import { text_combine } from "./text_combine.mjs";
export function lock_options() {
  "How a lock should behave while it is held: how long a silent holder is given before the lock is treated as abandoned, how often a holder says it is still there, and what to do if it is told it stopped saying so";
  "The library holding the lock keeps saying the holder is alive by touching a file on a timer, and it decides the lock was lost if that touch has not happened for a while. Both numbers are its own, and both are small - about ten seconds of silence before the lock is considered gone. That is the right size for something held for a moment and the wrong size by two orders for a job that holds it for twenty minutes";
  "Measured 2026-08-11, and it is the exact case this is for: a whole-repo run held the lock, the processors were the twelve-times oversubscribed thing the lock exists to prevent, the timer that says `still here` did not get a turn inside ten seconds, and the run was killed after twenty-one minutes of work with everything finished and nothing printed. The lock was doing its job and the job is what killed it";
  "So the silence allowed is two minutes and the saying-so is every thirty seconds - four missed turns before anything is concluded, where before one was enough. Two minutes is also all a crashed holder can keep the next one out for, which is why it is not simply made enormous";
  "And being told the lock was lost no longer ends anything. It is worth saying plainly why, because throwing is the library's default and defaults usually deserve respect: nothing here locks for correctness. Every lock in this repo is two runs agreeing to take turns, so losing one costs exactly what not having it cost - the other run starts early. Ending the work instead throws away everything already done to avoid a slowdown, which is a worse outcome than the one being avoided";
  function lambda(compromised) {
    let message2 = text_combine(
      "lock refresh fell behind, carrying on without it: ",
      compromised.message,
    );
    log_keep(lock_options.name, message2);
  }
  let r = {
    stale: 120000,
    update: 30000,
    onCompromised: lambda,
  };
  return r;
}

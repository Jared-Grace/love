import { lock_wait } from "./lock_wait.mjs";
import { qa_gate_run_unlocked } from "./qa_gate_run_unlocked.mjs";
import { qa_snapshot_owner } from "./qa_snapshot_owner.mjs";
export async function qa_gate_run() {
  "The repo-wide correctness gate (alias `q`), asking every gate there is - one run at a time on this machine, so a second waits for the first rather than competing with it";
  "Waiting for a neighbour is the one thing we are told not to do, and this is the exception, because here the neighbour is not a person deciding something. It is a run of the same questions, it is going to finish on its own, and until it does there is nothing to add by starting a second one";
  "Measured, on twelve processors: three of these at once, each taking nineteen minutes, so everybody waited nineteen minutes. Taken one at a time on a quiet machine they are about six minutes each, so the three finish at six, twelve and eighteen - the same moment for the last one, and the first is free three times sooner. Nobody loses and somebody gains, which is what makes waiting the kind thing rather than the patient thing";
  "The reason it is not merely no worse is that these runs make each other slow. How many shares to divide into is worked out from what the machine is already doing, so a second run finds the processors full and divides into one share, and then stays busy long enough for a third to find the same. Two of the three measured were running whole and undivided for exactly that reason. Waiting takes the machine out of that circle";
  "Who is holding it is printed once by the waiting itself, so a wait never reads as a hang. Nothing else here prints, since everything the run says it says under the lock";
  "A run that dies without giving the lock back does not keep the next one out forever - the lock is watched for its owner going quiet and is taken from a process that is no longer there";
  let who = qa_snapshot_owner();
  async function lambda() {
    let asked = await qa_gate_run_unlocked();
    return asked;
  }
  let r = await lock_wait(qa_gate_run_unlocked.name, lambda, who);
  return r;
}

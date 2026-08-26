import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timings_worth_measuring_is } from "./qa_gate_timings_worth_measuring_is.mjs";
import { qa_gate_timings_quiet_load } from "./qa_gate_timings_quiet_load.mjs";
import { qa_gate_timings_write_when_quiet } from "./qa_gate_timings_write_when_quiet.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function qa_gate_timings_write_when_quiet_auto() {
  arguments_assert(arguments, 0);
  ("Looks once an hour, for as long as this machine is up, and measures the gates again when the record has stopped being worth trusting and the machine has gone quiet at the same time.");
  ("Both conditions are needed and neither is the clock. A record not worth trusting, alone, would measure on a busy afternoon and write down gates queueing for processors; quiet alone would spend the heaviest run this machine does, every quiet hour, to learn what it already knew.");
  ("Whether the record is worth trusting is two questions and not one, and it is asked next door rather than here. Age was the only one asked for a long time, and a record can be young and about half the gates at once - which is what it was, at forty-nine percent coverage and nine days old against a fortnight, with nothing firing.");
  ("It is here because the record was fed by hand and by nothing else, so it was only ever as fresh as the last person who remembered. That is a cost paid again every fortnight forever, by whoever notices, and noticing is the part nobody does.");
  ("One look an hour rather than a wait for quiet, because the machine going quiet is not an event anybody sends and an hour is far finer than a fortnight. It asks the same question the hand seam asks, once, and lets the loop be the waiting.");
  ("A round that throws is written down and the loop goes on. A daemon dying is the failure that has bitten this repo before, and the reasons this one could throw - a locked repo, a run cut short - are all reasons to try again in an hour rather than reasons to stop for good.");
  let hour_seconds = 3600;
  while (true) {
    async function round_take() {
      let worth = await qa_gate_timings_worth_measuring_is();
      if (worth) {
        let load_most = qa_gate_timings_quiet_load();
        await qa_gate_timings_write_when_quiet(load_most, 1);
      }
    }
    await catch_log_async(round_take);
    await sleep_seconds(hour_seconds);
  }
}

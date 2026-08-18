import { arguments_assert } from "./arguments_assert.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { permission_replay_path } from "./permission_replay_path.mjs";
import { permission_replay_write } from "./permission_replay_write.mjs";
import { file_days_since_written } from "./file_days_since_written.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function permission_replay_write_auto() {
  arguments_assert(arguments, 0);
  ("Keeps the ranking of what still prompts the human no more than a day old, without anybody remembering to run it.");
  ("The request behind it is a daily one - what prompts can safely be removed today - and a reading somebody has to remember to take is a reading taken on the days somebody remembered. The waiting was the whole of the job.");
  ("It looks every hour and writes when the record has gone a day old, rather than sleeping a day at a time. A day-long sleep is a bet that the machine stays up for a day, and a machine that reboots each evening would then never write at all; an hourly look catches up within the hour of coming back.");
  ("A record that cannot be found answers stale, so a repo that has never taken the reading takes it on the first hour rather than never.");
  ("A round that throws is written down and the loop goes on. The reasons this one can throw - a transcript being written as it is read, a full disk - are all reasons to try again in an hour rather than reasons to stop for good.");
  let hour_seconds = 3600;
  let stale_days = 1;
  while (true) {
    async function round_take() {
      let path = permission_replay_path();
      let days = await file_days_since_written(path);
      let known = null_not_is(days);
      let stale = true;
      if (known) {
        stale = greater_than(days, stale_days);
      }
      if (stale) {
        await permission_replay_write();
      }
    }
    await catch_log_async(round_take);
    await sleep_seconds(hour_seconds);
  }
}

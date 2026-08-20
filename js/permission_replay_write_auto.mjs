import { arguments_assert } from "./arguments_assert.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { permission_replay_path } from "./permission_replay_path.mjs";
import { permission_replay_write } from "./permission_replay_write.mjs";
import { file_hours_since_written } from "./file_hours_since_written.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function permission_replay_write_auto() {
  arguments_assert(arguments, 0);
  ("Keeps the ranking of what still prompts the human no more than a few hours old, without anybody remembering to run it.");
  ("The request behind it is a daily one - what prompts can safely be removed today - and a reading somebody has to remember to take is a reading taken on the days somebody remembered. The waiting was the whole of the job.");
  ("Four hours rather than a day, because a day-old reading answers about yesterday's friction and the whole use of it is approving a list that stops today's. The record it reads is wiped by a reboot as well, so a reading taken only once a day can lose a whole morning's interruptions before anybody has seen them. A round costs about two minutes, which is small enough that taking six of them a day buys the freshness for nothing anybody notices.");
  ("It looks every hour and writes when the record has gone stale, rather than sleeping the whole interval at a time. A long sleep is a bet that the machine stays up that long, and a machine that reboots each evening would then never write at all; an hourly look catches up within the hour of coming back.");
  ("A record that cannot be found answers stale, so a repo that has never taken the reading takes it on the first hour rather than never.");
  ("A round that throws is written down and the loop goes on. The reasons this one can throw - a transcript being written as it is read, a full disk - are all reasons to try again in an hour rather than reasons to stop for good.");
  let hour_seconds = 3600;
  let stale_hours = 4;
  while (true) {
    async function round_take() {
      let path = permission_replay_path();
      let hours = await file_hours_since_written(path);
      let known = null_not_is(hours);
      let stale = true;
      if (known) {
        stale = greater_than(hours, stale_hours);
      }
      if (stale) {
        await permission_replay_write();
      }
    }
    await catch_log_async(round_take);
    await sleep_seconds(hour_seconds);
  }
}

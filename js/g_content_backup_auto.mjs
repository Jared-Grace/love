import { g_content_backup } from "./g_content_backup.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { g_content_backup_auto_seconds } from "./g_content_backup_auto_seconds.mjs";
export async function g_content_backup_auto() {
  "Keeps the backup up to date without anybody asking it to.";
  "A backup somebody has to remember to run is a backup taken on the days nothing went wrong. The failure is caught and written down rather than allowed to end the loop, because a bucket that cannot be reached this hour is no reason to stop trying next hour.";
  let seconds = g_content_backup_auto_seconds();
  while (true) {
    await catch_log_async(g_content_backup);
    await sleep_seconds(seconds);
  }
}

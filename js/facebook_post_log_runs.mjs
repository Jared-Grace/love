import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { facebook_post_log_path } from "./facebook_post_log_path.mjs";
export async function facebook_post_log_runs() {
  arguments_assert(arguments, 0);
  ("Reads the scheduled facebook runs' log back as a list of the runs that posted something: when the run started, what it says it posted, and the facebook link it printed, or null when it printed none.");
  ("★ THE ZONE THE LOG PRINTS AS PST IS PHILIPPINE STANDARD TIME, UTC+8, because that is the zone this machine's clock is set to. Read as the Pacific zone of the same name, every time comes out sixteen hours late - measured 2026-11-10, the MAT07 run then landed the day after the record's own time for it.");
  ("★ THE TIME IS WHEN THE RUN STARTED, NOT WHEN THE POST WENT UP. The timer writes the date line after its random wait and before the run, so the post itself is a few minutes later.");
  ("The link is the reel's for a video and the post's for a text post; the first one printed in a run is taken, and the reel link is preferred because a text post prints its own link under the same reel name too.");
  let file_path = facebook_post_log_path();
  let text = await file_read(file_path);
  let blocks = text.split(/^(?=(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) \w{3} +\d+ )/m);
  let runs = [];
  for (let block of blocks) {
    let first = block.split("\n")[0];
    let m = first.match(/^\w{3} (\w{3}) +(\d+) (\S+ [AP]M) (\w+) (\d{4})/);
    if (equal(m, null)) {
      continue;
    }
    let zone = equal(m[4], "PST") ? "+0800" : m[4];
    let started = Date.parse(
      m[1] + " " + m[2] + " " + m[5] + " " + m[3] + " " + zone,
    );
    let posted = block.match(/posted"?: ['"]([^'"]+)['"]/);
    if (equal(posted, null)) {
      continue;
    }
    let reel = block.match(/reel_url"?: ['"]([^'"]+)['"]/);
    let post = block.match(/post_url"?: ['"]([^'"]+)['"]/);
    let url = not_equal(reel, null)
      ? reel[1]
      : not_equal(post, null)
        ? post[1]
        : null;
    runs.push({
      run_started_at: new Date(started).toISOString(),
      posted: posted[1],
      url,
    });
  }
  return runs;
}

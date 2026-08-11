import { qa_commit_named_head } from "./qa_commit_named_head.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { qa_commit_named_auto_seconds } from "./qa_commit_named_auto_seconds.mjs";
export async function qa_commit_named_auto() {
  "Keeps the judging record caught up with where the repo is, without anybody asking it to.";
  "Judging costs about a quarter of an hour and a deploy can only ship a commit that has been judged, so somebody had to sit and spend that quarter of an hour before every ship. Nobody is faster at waiting than a machine is, and the waiting was the whole of the job.";
  "It judges wherever we are standing rather than working through the commits nobody has judged yet. With this many of us committing there is no catching up to be done - what a deploy wants is a judged commit that is recent, and the newest one is always the most recent it could possibly get.";
  "The failure is caught and written down rather than allowed to end the loop, because a gate that could not be run this minute is no reason to stop trying next minute.";
  let seconds = qa_commit_named_auto_seconds();
  while (true) {
    await catch_log_async(qa_commit_named_head);
    await sleep_seconds(seconds);
  }
}

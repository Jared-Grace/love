import { file_stamp } from "./file_stamp.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { qa_commit_named_stale_minutes } from "./qa_commit_named_stale_minutes.mjs";
export async function qa_commit_named_stale_is() {
  "Whether nothing has been judged for long enough that a deploy asking now would find nothing recent enough to ship.";
  "Asked of the record's own file rather than of anything written inside it. The record is rewritten every time a commit is judged and at no other time, so when it was last written IS when we last judged, and that answer needs no field added to a file that other things already read.";
  "A record that cannot be asked about at all counts as stale. The two ways to get nothing back are that it has never been written and that it cannot be reached, and both of those are worse than old rather than better - reading them as fresh would be the one mistake that silences the escape exactly when it is most needed.";
  let path = qa_commit_named_path();
  let stamp = await file_stamp(path);
  let unknown = null_is(stamp);
  if (unknown) {
    return true;
  }
  let written = property_get(stamp, "written");
  let since = date_milliseconds_since(written);
  let minutes = qa_commit_named_stale_minutes();
  let seconds = multiply(minutes, 60);
  let allowed = multiply(seconds, 1000);
  let stale = greater_than(since, allowed);
  return stale;
}

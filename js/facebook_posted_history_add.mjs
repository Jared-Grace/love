import { json_to } from "./json_to.mjs";
import { facebook_posted_history_path } from "./facebook_posted_history_path.mjs";
import { file_append } from "./file_append.mjs";
export async function facebook_posted_history_add(entry) {
  "$plain entry";
  "Adds one line to the history of facebook posts: the entry, with the moment it was written, as one line of JSON. Lines are only ever added, so every post stays findable by date, kind, passage or file, and link.";
  "★ IT NEVER THROWS, because it runs after the post is already up: a failed write here must not make a posted run look like a failed one and be retried into a second post. A failure comes back as {error} instead.";
  let path = facebook_posted_history_path();
  let line = {
    written_at: new Date().toISOString(),
    ...entry,
  };
  try {
    await file_append(path, json_to(line) + "\n");
    let r = {
      path,
      line,
    };
    return r;
  } catch (e) {
    let r2 = {
      path,
      error: String(e),
    };
    return r2;
  }
}

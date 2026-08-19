import { permission_replay_sentence } from "./permission_replay_sentence.mjs";
import { permission_replay_spoken_path } from "./permission_replay_spoken_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { equal } from "./equal.mjs";
export async function permission_replay_sentence_once() {
  "The same line, said only when it is not the line that was said last. Ten sessions can start in a day and the reading only moves when a name becomes grantable or the count changes, so said every time it would arrive nine times as something already read and once as news, which is how a signal turns into noise.";
  "The whole line is what is compared, rather than the count or the names separately. It is built from exactly the things a person would act on, so two identical lines are the same news by construction, and there is no second rule to keep in step with the first.";
  "An empty line is not recorded. It means the daemon has not written on this machine yet, which is a state to say nothing about and not a thing that was said.";
  "Speaking is what marks it as said, not reading it. A session that says the line writes it down before handing it over, so the nine sessions starting behind it find their own words already spoken.";
  let line = await permission_replay_sentence();
  let nothing = text_empty_is(line);
  if (nothing) {
    return line;
  }
  let path = permission_replay_spoken_path();
  let last = await file_read_try(path);
  let already = equal(last, line);
  if (already) {
    let r = "";
    return r;
  }
  await file_overwrite_uncached(path, line);
  return line;
}

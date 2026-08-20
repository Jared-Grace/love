import { ebible_readaloud_lines_differ_to_fix_names } from "./ebible_readaloud_lines_differ_to_fix_names.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { ebible_readaloud_lines_baseline_path } from "./ebible_readaloud_lines_baseline_path.mjs";
export async function ebible_readaloud_lines_baseline_write() {
  "Rewrite the record of chapters known to be read aloud in a different number of lines from the number of verses their pages mark, from what the measurement says right now.";
  "For seeding it once, and for shrinking it after a chapter has been put right. Never for blessing a new one: a chapter in here is a chapter no reader is shown, so the list growing means the app quietly offering less of the Bible than it did.";
  "Chapters already proved to have been published that way are not in this list and never enter it. They are a verdict rather than a job, they are recorded next door by the command that proves them, and the reason they are apart is that this list exists to be worked through - a list mostly made of things nobody can do anything about is a list nobody works through.";
  "The measuring itself is a separate command and takes the better part of an hour. Run that first, or this records what was true whenever it was last run.";
  let known = await ebible_readaloud_lines_differ_to_fix_names();
  let path = ebible_readaloud_lines_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this chapter is read aloud in a different number of lines from the number of verses its page marks and was not before, so it has stopped being shown to anybody - look at the chapter itself rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}

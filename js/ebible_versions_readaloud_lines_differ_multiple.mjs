import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { ebible_readaloud_lines_differ } from "./ebible_readaloud_lines_differ.mjs";
export async function ebible_versions_readaloud_lines_differ_multiple(
  bible_folders_comma,
) {
  "The lines-against-marks measuring made of several bibles at once, one answer per bible named.";
  "Measuring the whole English set answers in counts, because fifty-three bibles' worth of chapter names is not something anybody reads. What follows is always the same question about the handful that lost anything: which chapters. Asking that one bible at a time is a second command per name, and the naming is the only part that differs.";
  "Which bibles is handed in rather than worked out, because by this point the caller has already been told which ones lost something and is choosing among them. The measuring that finds its own set is the one before this, not this one.";
  let r = await text_split_comma_map_async(
    bible_folders_comma,
    ebible_readaloud_lines_differ,
  );
  return r;
}

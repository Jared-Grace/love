import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_lines_differ_as_published_path } from "./ebible_readaloud_lines_differ_as_published_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
export async function ebible_readaloud_lines_differ_as_published_names() {
  arguments_assert(arguments, 0);
  ("Every chapter already proved to be read aloud in a different number of lines from the number of verses its page marks because that is how it was published, each named by its bible and its chapter together.");
  ("A verdict rather than a measurement, which is what makes this one different from every other list here. Whether a chapter's counts disagree can be read off the record in a moment; why they disagree cannot be read off anything, because a file short of what its page marks looks the same whether nobody published the rest or the download stopped early. The only thing that tells those apart is fetching it again and seeing what comes back, and what comes back is not a fact a gate can re-derive on every run.");
  ("So a name arrives here by being proved once, and the command that records it is the command that does the proving. Nothing else may write to it - a name put here by hand is a chapter excused without anybody having looked.");
  let path = ebible_readaloud_lines_differ_as_published_path();
  let names = await baseline_known_read(path);
  return names;
}

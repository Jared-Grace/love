import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_lines_differ_as_published_path } from "./ebible_readaloud_lines_differ_as_published_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
export async function ebible_readaloud_lines_differ_as_published_names() {
  arguments_assert(arguments, 0);
  ("Every chapter already proved to be read aloud in a different number of lines from the number of verses its page marks because that is how it was published, each named by its bible and its chapter together.");
  ("A verdict rather than a measurement, which is what makes this one different from every other list here. Whether a chapter's counts disagree can be read off the record in a moment; whether anybody here could do anything about it cannot be read off anything, because a file that does not match its page looks the same whether the disagreement was published or the download stopped early. The only thing that tells those apart is fetching it again and seeing what comes back, and what comes back is not a fact a gate can re-derive on every run.");
  ("Published that way covers more than a chapter cut short. Chongthu's Genesis 44 is read aloud in thirty-four lines and its page marks thirty-three, because the page gives the words of verses twenty-five and twenty-six together under the one number while the reading aloud says them as two - every word present on both sides, and the two editions of the one translation dividing them differently. Its Luke 6 is the other kind: the reading aloud goes straight from verse eleven to verse twenty and the eight verses that choose the Twelve were never said aloud at all. Both are the publisher's doing and neither is anybody's to mend from here, which is the only thing this list claims about a name in it.");
  ("So a name arrives here by being proved once, and the command that records it is the command that does the proving. Nothing else may write to it - a name put here by hand is a chapter excused without anybody having looked.");
  let path = ebible_readaloud_lines_differ_as_published_path();
  let names = await baseline_known_read(path);
  return names;
}

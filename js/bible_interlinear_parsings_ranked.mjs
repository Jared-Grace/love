import { bible_interlinear_parsings_list } from "./bible_interlinear_parsings_list.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
export async function bible_interlinear_parsings_ranked(testament_name) {
  "Every spelled-out parsing the interlinear uses inside one testament, commonest first, each beside the number of words carrying it.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to count and nothing that runs.";
  "Anything written to turn a parsing into a sentence has to answer for every parsing there is, and the only honest way to know what those are is to count them. A table written from what a person remembers meeting covers what they have read and goes quiet on the rest, and going quiet is the failure that reads as success: the word simply gets no sentence and nobody is told why.";
  "The counts come with the vocabulary because the two answer different questions. The list says what must be handled; the counts say what handling it is worth, so a parsing standing on four words can be left for a person to write and a parsing standing on eleven thousand cannot. Commonest first is the order the work wants to be done in.";
  let parsings = await bible_interlinear_parsings_list(testament_name);
  let ranked = list_tally_ranked(parsings);
  return ranked;
}

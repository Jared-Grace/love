import { arguments_assert } from "./arguments_assert.mjs";
import { purge_words_live_offenders } from "./purge_words_live_offenders.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function purge_words_live_gate_run() {
  "Gate: nothing a purge took out of this repository's past may come back into its present.";
  "★ A PURGE IS A MOMENT AND THE THING IT GUARDS AGAINST IS A HABIT. Rewriting a history takes hours, has to be coordinated with everybody working in the folder, and can only ever be done once for a given set of words - and then the next ordinary commit can put one of them straight back, in a file nobody thought to look at, and the whole afternoon is undone without a single error. This is the cheap half of that job: it runs on every gate run, it costs one search per word, and it fails the moment the present grows one of them again.";
  "It does not look at the past at all. Asking the whole history about a word takes about twenty minutes, which is not a thing to put in front of every commit, and the past is also the half that is already settled - what changes from hour to hour is what is being written now.";
  "Ratcheted against nothing rather than against a record of what was already wrong. The present was clean when this was written, and a record seeded at nothing is a file whose only content is that it is empty.";
  "What it looked at comes back with the verdict, because nothing found is also what a sweep that stopped reaching anything would say.";
  arguments_assert(arguments, 0);
  let told = await purge_words_live_offenders();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let r = list_empty_is_assert_walked_generic(
    walked,
    offenders,
    "this repository is carrying again, in the present, something a purge went to the trouble of taking out of its past - each row below names the file and which entry of the list outside every repo it answers to, and the word itself is deliberately not printed here because a gate's complaint is the most travelled text there is. Open the list, read the entry, and either take the word out of the file or add that path to the places it is allowed to stay",
  );
  return r;
}

import { literals_marked_both_ways_word } from "./literals_marked_both_ways_word.mjs";
import { literals_marked_both_ways_conflicts } from "./literals_marked_both_ways_conflicts.mjs";
import { literals_marked_both_ways_words_frozen } from "./literals_marked_both_ways_words_frozen.mjs";
import { literals_marked_both_ways_entries } from "./literals_marked_both_ways_entries.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { property_get } from "./property_get.mjs";
export async function literals_marked_both_ways() {
  "Every word this repo marks both ways at once - frozen in one place and spelled as a reference in another - as {word, frozen_in, referenced_in}. Read-only.";
  "The two markers mean opposite things about the same word. Frozen says the word only looks like a name, so a rename must walk straight past it; a reference says the word is a name, so a rename must carry it along. A word wearing both is a flat contradiction, and one of the two sites is wrong.";
  "Which one is wrong is not decidable here, and that is the point of reporting rather than repairing. It turns on something outside the code: whether anything in this repo can still move what the word addresses. A folder on this machine can be moved by a rename, so there the reference is right and the freeze breaks it; a folder on a shared bucket cannot, so there the freeze is right and the reference would send every future reading to an address holding nothing.";
  "This was found by hand after four such words were sitting in one file, each naming a bucket folder holding every sermon the game had written. A rename of any of the four uploaders would have moved the list saying what a backup may take, and left the files themselves unbacked with nothing saying so.";
  "The same spelling in two files is not always a contradiction. A lesson may teach a word as its subject while a gate names a function that happens to share it, and neither is wrong. So this only reports; what refuses is the ratchet beside it, which lets the ones already here stand one at a time and stops a new one appearing.";
  "The frozen words are gathered first and each is then looked for by its own exact spelling, rather than reading every tree in the repo. Nearly every file in the repo names a function somewhere, so a sweep keyed on the reference marker would open all of them - which is the reading measured at thirteen minutes on the check beside this one.";
  let repo_name = repo_love_name();
  let r = await literals_marked_both_ways_entries(repo_name);
  let r2 = await literals_marked_both_ways_words_frozen(r);
  let r3 = literals_marked_both_ways_conflicts(r2);
  let conflicts = property_get(r3, "conflicts");
  await literals_marked_both_ways_word(r3, conflicts);
  return conflicts;
}

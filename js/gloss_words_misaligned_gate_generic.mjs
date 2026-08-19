import { property_get } from "./property_get.mjs";
import { gloss_chapters_words_misaligned } from "./gloss_chapters_words_misaligned.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function gloss_words_misaligned_gate_generic(
  fn,
  a_name,
  words_read,
) {
  "$plain a_name";
  "Gate over one gloss store: no authored chapter may carry a passage whose word explanations have stopped lining up with the passage itself. Throws so the dispatcher seam exits nonzero.";
  "The page paints the explanations under the passage in order and nothing on it repeats which word each one is about, so the reader takes the third explanation to be about the third word. One word skipped therefore does not read as a gap - it reads as every later word being explained wrongly, and it reads that way to somebody studying scripture, which is the whole reason this is worth a gate rather than a note.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down. A store that is not clean today therefore stays out of the whole-repo list until it is, named in the exempt list with what is wrong, rather than having its faults written down as expected.";
  "How many chapters were read travels out with the verdict, because finding nothing wrong and reading nothing at all are the same word otherwise - and these stores sit on a drive that is not always mounted, which is the ordinary way a sweep here stops reaching anything.";
  "The app whose store this is gets named in the complaint rather than only described in it. A gate is read afterwards for WHO it is about, and one about a store belongs to the single app that ships it - so an app that ships no gloss store at all can be shown this is not its business and go on deploying. Read for words alone, this named nobody, and a gate naming nobody holds every app in the repo back.";
  let found = await gloss_chapters_words_misaligned(fn, words_read);
  let offenders = property_get(found, "offenders");
  let chapters = property_get(found, "chapters");
  let count = list_size(offenders);
  let any = greater_than(count, 0);
  let listed = [];
  if (any) {
    list_add(listed, a_name);
  }
  let none = not(any);
  let shown = json_format_to(offenders);
  assert_json(none, {
    list: listed,
    json: {
      hint: text_combine_multiple([
        a_name,
        " gloss: ",
        count,
        " chapters explain words the passage does not carry, in the order the page paints them - ",
        shown,
      ]),
    },
  });
  let r = {
    chapters,
    offenders: 0,
  };
  return r;
}

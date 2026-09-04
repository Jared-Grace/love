import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_argument_at_try } from "./js_call_argument_at_try.mjs";
import { equal } from "./equal.mjs";
import { js_node_word_frozen_try } from "./js_node_word_frozen_try.mjs";
import { not_equal } from "./not_equal.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { not } from "./not.mjs";
import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { list_add } from "./list_add.mjs";
import { js_storage_local_key_scan } from "./js_storage_local_key_scan.mjs";
export function js_storage_local_key_words(ast, seams) {
  "Every word this file writes into a key in somebody's browser storage, read off the calls that do the writing. Read-only, pure.";
  "A stored key here is the owning function's name with a word after it. The name half is watched already, because a rename moves it and a rename is a command anybody may run. This is the other half, and it moves for a different reason: somebody reads the line, thinks of a better word for the setting, and types it. The line still compiles, every gate over code stays green, and every reader from then on looks under a key nothing was ever written to.";
  "Only a word written out is collected. A word spelled as a reference to a function is that function's name, which the record of published names already holds, and counting it twice would make a rename fail two gates saying the same thing.";
  "Which calls to read is handed in, the same list the name reading is given, so a word written at a front door is reached where it is actually written rather than where it is finally stored.";
  "The word is looked for one step back as well as at the call itself. It is often set on the line above and handed over as a variable, and a reading that stopped at the argument saw a variable, said nothing, and left the word watched by nobody - which is what had happened to the id every message a person sends is filed under. The same reading of bucket folders had already learned this; this one had not.";
  "★ AND THE WORD IS SEEN THROUGH THE MARKER THAT SAYS IT IS FROZEN, WHICH IS THE SAME MISS ONE LAYER IN (2026-09-04). A word that has already left this repo is written inside that marker on purpose, and the marker hands its own first argument straight back - so the word is really there, one call further in. Reading only a plainly written word meant a line that spelled the word AND said out loud that it could never be renamed was read as spelling no word at all: the most carefully published words in the repo were the ones this could not see. The device id was written that way and this reading called it gone.";
  "★ AND THE READER IT ASKS NAMES THE MARKER, RATHER THAN SEEING THROUGH ANY WRAPPING AT ALL. That was tried first and was measurably too wide: a name handed over as a reference to a function is spelled as a call too, so unwrapping everything turned three function names and one empty word into words this claimed browsers were holding. The paragraph above about references is not a taste; a reading that breaks it invents data loss in one direction and invents stored words in the other.";
  "An empty word is not a word and is dropped. One caller joins nothing to an owner on purpose, to make the front of every key that owner has ever written, so that all of them can be walked; the word there is absent by design rather than typed. Recording absence as a published word would put a row in the record that no browser can ever hold and that nothing could ever be said to have lost.";
  arguments_assert(arguments, 2);
  let found = [];
  function collect(node) {
    let word_node = js_call_argument_at_try(node, "2");
    let absent = equal(word_node, null);
    if (absent) {
      return;
    }
    let written = js_node_word_frozen_try(word_node);
    let here = not_equal(written, null);
    if (here) {
      add(written);
      return;
    }
    let variable = js_identifier_name_try(word_node);
    let plain = not_equal(variable, null);
    if (not(plain)) {
      return;
    }
    let source = js_name_set_from_node_try(ast, variable);
    let word_above = js_node_word_frozen_try(source);
    let set_here = not_equal(word_above, null);
    if (set_here) {
      add(word_above);
    }
  }
  function add(word) {
    let nothing = equal(word, "");
    if (nothing) {
      return;
    }
    list_add(found, word);
  }
  let unique = js_storage_local_key_scan(ast, seams, collect, found);
  return unique;
}

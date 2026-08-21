import { words_game_taught_glosses_defects } from "./words_game_taught_glosses_defects.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function words_game_taught_glosses_gate_run() {
  "Gate: every word the game means to teach has an answer written for it, and no answer reaches for a word the reader would have to tap in turn. Throws so the dispatcher seam exits nonzero.";
  "IT HOLDS THE TWO ENDS OF THE PROMISE THE TAUGHT LIST MAKES. Marking a word as taught is a decision not to rewrite the line that says it, on the grounds that the player will be told what it means - so a taught word with nothing behind it has spent the excuse without paying for it, and an explanation the player cannot read has paid in a currency they do not hold.";
  "IT RATCHETS AGAINST ZERO rather than against a baseline, because the list it guards is short and a person adds to it deliberately. A baseline is for a debt somebody inherited; this one has no debt to inherit.";
  let defects = await words_game_taught_glosses_defects();
  for (let one of defects) {
    let word = property_get(one, "word");
    let fault = property_get(one, "fault");
    console.log(word + "  " + fault);
  }
  console.log("gloss defects: " + defects.length);
  if (list_empty_not_is(defects)) {
    throw new Error(
      "taught word gloss gate: " +
        defects.length +
        " taught words are missing an answer or answered in words the reader does not have",
    );
  }
  let r = {
    defects: 0,
  };
  return r;
}

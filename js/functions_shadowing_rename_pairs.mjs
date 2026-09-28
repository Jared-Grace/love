import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { list_first_second } from "./list_first_second.mjs";
import { property_get } from "./property_get.mjs";
import { functions_shadowing_rename_all } from "./functions_shadowing_rename_all.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_shadowing_rename_pairs(names_comma) {
  "$plain names_comma";
  "Ends the hiding of several names in one go, each name given with what it should be called instead, and hands back what the sweep for each one did.";
  "★ THIS IS THE COMMAND A REPEATED INVOCATION WAS ASKING FOR. Clearing a red shadowing gate means running the one-name sweep once per hidden name, and a run of twenty-eight invocations leaves nothing behind that a later red gate can reuse. What made it look unavoidable is that the one-name sweep already finds its own set, so there seemed to be nothing left to gather - but the thing being repeated was never the set of functions, it was the set of NAME PAIRS, and that is a set like any other.";
  "★ THE PAIRS ARE GIVEN AND CANNOT BE WORKED OUT, WHICH IS WHY THIS TAKES A LIST AT ALL. Which names hide is derivable and is derived, by the sweep underneath. What a hidden local should be called instead is a judgment: the same word does not want the same replacement in every file, and nothing in the code says what a person reading it would call it. So the choices come in and the finding stays where it is.";
  "★ NOTHING IS DECIDED HERE ABOUT HOW A RENAME IS DONE. Which of the two renames a name needs, whether a replacement is safe, which sites must be skipped and why, and the commit each rename is filed under all stay in the one-name sweep. This only hands it pairs, so a guard cannot be weakened by being reached through a different door.";
  "The words arrive as one comma-joined run because a command line hands each word over separately, and a function of two parameters given twenty-eight words keeps the first two. Cut into twos, an odd word left over at the end is refused rather than guessed at - a pair with nothing to become is far more likely to be a miscount in the list than a name somebody meant to leave alone.";
  "★ EVERY PAIR IS CHECKED BEFORE ANY RENAME IS MADE, and the two loops are not one loop for that reason alone. A miscounted list is wrong at its END, so checking as it goes would rename twenty-seven names, refuse the last, and leave the caller holding a half-done sweep and a list they must now edit to resume. Refusing before the first commit costs one extra walk of a list of words.";
  arguments_assert(arguments, 1);
  let words = text_split_comma(names_comma);
  let pairs = list_chunk(words, 2);
  for (let pair of pairs) {
    let paired = list_size_equal(pair, 2);
    true_is_assert_json(paired, {
      hint: "the names should come in twos, each name followed by what it should be called instead, and this one has nothing to become - has a name been left out?",
      pair,
      words,
    });
  }
  let done = [];
  for (let pair2 of pairs) {
    let halves = list_first_second(pair2);
    let name = property_get(halves, "first");
    let name_after = property_get(halves, "second");
    let one = await functions_shadowing_rename_all(name, name_after);
    list_add(done, one);
  }
  let swept = list_size(pairs);
  let r = {
    swept,
    done,
  };
  return r;
}

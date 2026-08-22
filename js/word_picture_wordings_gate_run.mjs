import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { word_picture_wordings } from "./word_picture_wordings.mjs";
import { words_game_taught_glosses } from "./words_game_taught_glosses.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function word_picture_wordings_gate_run() {
  "Fail if any drawing wording is written for a word the game does not teach, or for one of the words a drawn picture must never claim to show.";
  "THE FORBIDDEN FOUR ARE HELD AGAINST NOUGHT AND NOT AGAINST A BASELINE. A drawn face of God is a claim about what God is like, made by a machine and shown to a child as though somebody had checked it, and RAISE and ROSE name no scene but His. There is no number of those that is acceptable, so there is nothing to ratchet - one is the failure.";
  "IT ALSO CATCHES A WORD THAT IS NOT TAUGHT AT ALL, which is the ordinary way this list goes wrong: a wording written for a word somebody meant to add to the gloss list and did not, so nothing ever taps it and the picture is bought for nobody.";
  let wordings = word_picture_wordings();
  let words = object_property_names(wordings);
  let glosses = words_game_taught_glosses();
  let taught = object_property_names(glosses);
  let forbidden = ["god", "jesus", "raise", "rose"];
  let untaught = list_difference(words, taught);
  let claimed = list_intersection(words, forbidden);
  list_empty_is_assert_json(untaught, {
    hint: text_combine_multiple([
      "a drawing wording is written for a word the game does not teach, so nothing will ever tap it; add it to ",
      fn_name("words_game_taught_glosses"),
      " or drop the wording",
    ]),
  });
  list_empty_is_assert_json(claimed, {
    hint: text_combine_multiple([
      "a drawing wording is written for a word whose only picture would be a claim about God; ",
      fn_name("word_picture_wordings"),
      " says why these four are never drawn",
    ]),
  });
  let r = {
    words: list_size(words),
  };
  return r;
}

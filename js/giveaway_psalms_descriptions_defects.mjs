import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_file_kinds } from "./giveaway_file_kinds.mjs";
import { giveaway_psalms_item_description } from "./giveaway_psalms_item_description.mjs";
import { catch_null } from "./catch_null.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
export function giveaway_psalms_descriptions_defects(items) {
  arguments_assert(arguments, 1);
  ("$plain items");
  ("Every box of the psalms giveaway that cannot say what is in it: one holding a kind of file the description has never heard of, and one the description refuses outright.");
  ("★ A BOX THAT CANNOT DESCRIBE ITSELF IS A BOX THAT CANNOT BE PUT UP, SO THIS IS THE LAST THING BETWEEN A BUILT SHELF AND A SHELF NOBODY CAN PUBLISH. The paragraph under a box is not decoration - it is written at the moment of uploading, so a box whose paragraph throws is a box the upload stops on, halfway along a shelf, with some psalms up and some not. Asked here instead, the whole shelf answers at once and before anything has left this machine.");
  ("★ THE TWO FAULTS FAIL IN OPPOSITE DIRECTIONS, WHICH IS WHY NEITHER WOULD DO ON ITS OWN. A description that refuses is loud: nothing gets published and somebody reads the error. A kind nothing has heard of is silent: the description is built by walking the fixed list of kinds and counting the files of each, so a file of some other kind is counted by nobody and the paragraph comes out a clause short, reading perfectly. A reader is then told a box holds singing and words, downloads it, and finds something else in there as well.");
  ("★ THE FAULT THIS WAS WRITTEN FOR IS A THIRD ONE, AND NO WRITTEN CASE CAN SHOW IT - WHICH IS THE WHOLE REASON IT IS ASKED OF THE REAL SHELF. A kind can be on the fixed list, so nothing calls it unknown, and still have no words anywhere saying how to say it. On 2026-10-14 that was true of the pictures: the kind word was settled as picture, the words were still filed under the rejected word painting, and 82 of the 83 boxes threw the moment the paintings joined the record. Nothing was red, because nothing had ever asked a box to describe itself. A case cannot reproduce it, since a case cannot take a word out of the table it is checked against - only a box that really holds that kind can.");
  ("One fault is reported per kind in a box rather than per file of that kind, because a box with a hundred and thirty-six pictures in it has one thing wrong with it and not a hundred and thirty-six. The box is named by its identifier, which is the word the shelf itself is addressed by, so a report reads as a list of places to go and look.");
  ("It is handed the boxes rather than reading them, so that a box holding an impossible kind can be made up and the silent fault shown to fire. The half that reads the shelf is next door.");
  let kinds = giveaway_file_kinds();
  function description_or_null(item) {
    function description_get() {
      let paragraph = giveaway_psalms_item_description(item);
      return paragraph;
    }
    let said = catch_null(description_get);
    return said;
  }
  let defects = [];
  for (let item of items) {
    let list = list_map_property(item.files, "kind");
    let kinds_held = list_unique(list);
    for (let kind of kinds_held) {
      let listed = list_includes(kinds, kind);
      if (not(listed)) {
        let unlisted = {
          fault: "file_kind_unlisted",
          identifier: item.identifier,
          kind: kind,
        };
        list_add(defects, unlisted);
      }
    }
    let said = description_or_null(item);
    if (null_is(said)) {
      let refused = {
        fault: "description_refused",
        identifier: item.identifier,
        kind: "",
      };
      list_add(defects, refused);
    }
  }
  return defects;
}

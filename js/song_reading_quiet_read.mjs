import { list_first_property } from "./list_first_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_wording_echo_floor } from "./song_wording_echo_floor.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { property_list_includes } from "./property_list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function song_reading_quiet_read(echoed, bible_folder_usual) {
  "$plain echoed";
  "$plain bible_folder_usual";
  "Every passage of a song the counting heard nothing at, each with the lines that rest on it and the words the usual bible says there, so that a person can read the ones the count handed back.";
  "THE QUIET HEAP IS DELIBERATELY UNREADABLE AND THIS IS WHY THAT COSTS SOMETHING. What is filed for a quiet passage is its reference and how loud its loudest wording was - no lines and no words - because nothing was decided there and an entry naming a winner would be a lie. But quiet is the biggest heap by far, better than half of every song read so far, and the only way a passage leaves it is a person reading the line beside the verse. Filing the counts and nothing else means that reading starts by fetching the whole song again.";
  "IT SHOWS ONE TRANSLATION AND NOT ALL OF THEM, AND THAT IS THE POINT OF IT. Twenty two wordings at sixty seven passages is a wall nobody reads to the end; the usual bible at those same passages is one column, and what a reader is actually asking is whether the line and the verse it rests on say the same thing in the same words. Where they do, the passage is settled and the usual bible keeps it. Where they do not, that passage - and only that passage - is worth opening the other twenty one for.";
  "MEASURED 2026-09-02 ON THE FATHER'S SON: reading the sixty seven quiet passages this way found four the count could never have found - falsely accused against false witness, reviled against heaped abuse, agony against anguish, was raised against has risen - and the song went from four choices to eight. The other song had been read this way by hand already and had twenty six; sixteen of those sat in the quiet heap, which is what said the reading was worth doing twice.";
  "A PASSAGE WHOSE TEXT COMES BACK EMPTY IS A FINDING RATHER THAN A GAP. It means the usual bible hands over no words there, so the page would draw that passage blank - and a song whose usual bible cannot answer one of its own passages wants a different usual bible, not a note against that passage.";
  arguments_assert(arguments, 2);
  let minimum = song_wording_echo_floor();
  let read = [];
  for (let passage of echoed) {
    let wordings = property_get(passage, "wordings");
    let folded_run = list_first_property(wordings, "folded_run");
    let heard = greater_than_equal(folded_run, minimum);
    let quiet = not(heard);
    if (quiet) {
      let reference = property_get(passage, "reference");
      let lines = property_get(passage, "lines");
      let text = null;
      for (let wording of wordings) {
        let holds = property_list_includes(
          wording,
          "bible_folders",
          bible_folder_usual,
        );
        if (holds) {
          text = property_get(wording, "text");
        }
      }
      let entry = {
        reference,
        lines,
        text,
      };
      list_add(read, entry);
    }
  }
  return read;
}

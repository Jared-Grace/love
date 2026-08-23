import { arguments_assert } from "./arguments_assert.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { ebible_folder_reference_text } from "./ebible_folder_reference_text.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { song_god_our_savior_references } from "./song_god_our_savior_references.mjs";
export async function song_god_our_savior_folder_faults(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("Every passage this song rests on, read out of one named translation on its own, against the passages that would not read at all and what went wrong on each.");
  ("A TRANSLATION THAT THROWS ON ONE PASSAGE LOSES ALL OF THEM, AND SAYS NOTHING. The comparison reads a whole list of passages out of a translation in one go and catches around the whole go, so one passage that raises rather than returning nothing takes the other hundred down with it - and the translation then reads as carrying nothing anywhere, which is indistinguishable from a translation nobody uploaded. Four of the twenty-three looked exactly like that.");
  ("EACH PASSAGE IS CAUGHT ON ITS OWN HERE, WHICH IS THE WHOLE POINT. This is the reading that survives long enough to name the passage that broke, so the fault has an address instead of being a translation that went quiet.");
  ("It reads one translation rather than all of them, because the question it answers is about one - and reading twenty-three to find out which passage upset the fourth is most of an hour to learn one line.");
  let references = song_god_our_savior_references();
  let faults = [];
  for (let reference of references) {
    async function read() {
      await ebible_folder_reference_text(bible_folder, reference);
    }
    let message = await catch_error_text_or_null_async(read);
    let broke = null_not_is(message);
    if (broke) {
      list_add(faults, {
        reference,
        message,
      });
    }
  }
  let r = {
    bible_folder,
    references: list_size(references),
    faults,
  };
  return r;
}

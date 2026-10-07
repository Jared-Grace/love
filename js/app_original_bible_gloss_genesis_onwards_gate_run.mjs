import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_chapter_codes } from "./local_function_chapter_codes.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { ebible_book_codes_old_testament } from "./ebible_book_codes_old_testament.mjs";
import { gloss_chapters_run_offenders } from "./gloss_chapters_run_offenders.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_original_bible_gloss_genesis_onwards_gate_run() {
  "Gate: the Old Testament chapters of the original-language gloss are one unbroken run from the first chapter of Genesis - no book begun while an earlier one is untouched, and no hole inside a book. Throws so the dispatcher seam exits nonzero.";
  "THIS GUARDS A SENTENCE A STRANGER READS BEFORE OPENING ANYTHING. The card for this app says the Old Testament in Hebrew from Genesis onwards, and those last two words are the whole of what is checked here: the run has to start at the start and it has to be unbroken. Where the run has got to is deliberately not checked, because the card promises a direction rather than a number.";
  "The sentence it guards used to name a count - the Old Testament's first seven books - and that was false the whole time it stood, because Judges was two chapters short of its twenty one. A count is wrong on the day the work falls short of it and wrong again on the day the work passes it, so the wording was changed to a floor and this gate asks only what a floor can promise. The rejected alternative was to keep the count honest instead: a canonical chapter count per book, derivable from a whole bible already downloaded on this machine, would let every earlier book be proved complete. It was rejected because the reword deliberately gave up the completeness promise, and a completeness gate would quietly hand it back.";
  ("WHAT IS ASKED IS THE AUTHORED STORE, NOT WHAT HAS BEEN PUBLISHED, AND THOSE ARE NOT THE SAME LIST. The chapters a reader can actually reach are the ones ",
    fn_name("app_original_bible_gloss_chapters_uploaded"),
    " names, and that is a question put over the network at the moment of asking, which is no way to run a gate. The store on this machine is asked instead for two reasons: an out-of-order run is born when a chapter is authored rather than when it is sent, so this catches it earlier and cheaper; and whatever sits written here and unsent is already measured next door by ",
    fn_name("app_original_bible_gloss_chapters_republish_wanted"),
    ". The hole this leaves is a publish that skips a chapter already authored in its place, which neither list would call out on its own.");
  ("IT NAMES THE APP ON THE WAY OUT AND KEEPS THAT NAME OUT OF THE HINT, which the shared assert does for it. A red gate that names no function belongs to nobody and holds back every app in the folder; named, it stops this one.");
  ("THE WALK ITSELF IS NEXT DOOR AND THIS ONLY NAMES THE TWO LISTS TO HAND IT. A gate reads its store off the disk, so the only way to see it go red is to break the store, and a check that cannot be made to disagree is worth nothing. Handing the walk a made-up list of chapter codes is how both faults were seen failing, and it is the same walk any other app promising a run through a testament would hand its own books to.");
  ("Green on the day it landed: Genesis fifty, Exodus forty, Leviticus twenty seven, Numbers thirty six, Deuteronomy thirty four, Joshua twenty four, Judges twenty - the first seven books of the canon in order, with the run stopping inside the seventh and no hole behind it.");
  arguments_assert(arguments, 0);
  let chapter_codes = await local_function_chapter_codes(
    app_original_bible_gloss_generate,
  );
  let book_codes = ebible_book_codes_old_testament();
  let walked = gloss_chapters_run_offenders(chapter_codes, book_codes);
  let fault =
    "stand outside the unbroken run from the first chapter of Genesis that this app's card promises - either a book of the Old Testament has been begun while an earlier one is untouched, or a book's own chapters have a hole in them or do not start at its first chapter. A book code on its own is the first kind; a book code with a number beside it is the chapter the run was expecting there and did not find";
  let r = gloss_chapters_offenders_assert(walked, "original_bible", fault);
  return r;
}

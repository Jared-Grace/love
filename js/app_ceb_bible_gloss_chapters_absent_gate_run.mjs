import { app_ceb_bible_gloss_stored_not_is } from "./app_ceb_bible_gloss_stored_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_chapters_absent } from "./app_ceb_bible_gloss_chapters_absent.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { log_console } from "./log_console.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_ceb_bible_gloss_chapters_absent_gate_run() {
  "Gate: every chapter of the Cebuano New Testament still has a gloss chapter in the store. Throws so the dispatcher seam exits nonzero.";
  "★ THE STORE IS NOT IN THE REPOSITORY, SO A CHAPTER LOST FROM IT IS LOST SILENTLY. Everything else the gates watch is a file git is holding, and a file git is holding cannot go missing without somebody being told. These chapters live on a drive that is mounted when it is mounted, and a half-finished write, a script pointed at the wrong folder or a bad sector takes one away with nothing anywhere going red. Months of authoring stand behind each one.";
  "It holds at nought rather than against a record, because nought is what the store holds today: all two hundred and sixty chapters of the New Testament are authored. There is no tail to bank and nothing to decide, so a record file would be an empty file and a name to keep in step for no gain.";
  "The check reaches only the New Testament, which is what the reading underneath it is about. The Psalms and Proverbs in this store are being authored a chapter at a time and have no finished set to be measured against, so their absences are work in hand rather than loss.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. Every Claude in the repo runs this gate, and a folder that is not there would answer that every chapter is missing - which would turn one unmounted drive into a red gate for everybody.";
  "★ THE APP IS NAMED ON THE WAY OUT AND KEPT OUT OF THE HINT, WHICH IS WHAT DECIDES HOW MUCH A RED ANSWER COSTS. What a failed gate said is read back afterwards for the function names in it, and an app whose bundle carries one of those is held out of its deployment; the hint is dropped before that reading happens. Named, this stops one app. Unnamed, a red gate belongs to nobody and holds back every app in the folder for a fault none of them has a part in.";
  "The assert every other one of these gates shares was not used, because its complaint counts offenders among the chapters it walked and these chapters are the ones it never reached. Spelled through it the sentence would read so many of so many authored chapters, of a number that is neither how many are authored nor how many are missing. A shared wording that has to be read past is worse than a sentence of one's own.";
  arguments_assert(arguments, 0);
  let unread = await app_ceb_bible_gloss_stored_not_is();
  if (unread) {
    let skipped = {
      skipped: 1,
    };
    return skipped;
  }
  let walked = await app_ceb_bible_gloss_chapters_absent();
  let chapters = property_get(walked, "chapters");
  let absent = property_get(walked, "absent");
  let chapter_codes = property_get(walked, "chapter_codes");
  let any = list_empty_not_is(chapter_codes);
  if (any) {
    let f_name = app_shared_name_prefixed("ceb_bible");
    log_console(f_name);
  }
  let hint = text_combine_multiple([
    "ceb_bible: ",
    absent,
    " of the ",
    chapters,
    " chapters of the Cebuano New Testament have no gloss chapter in the store - this store is not in the repository, so a chapter named here has been lost rather than never written, and the copy on the drive is the only one there was",
  ]);
  list_empty_is_assert_json(chapter_codes, {
    hint,
  });
  let r = {
    chapters,
    absent,
  };
  return r;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_bible_folder } from "./giveaway_bible_folder.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { giveaway_passage_text_file_names } from "./giveaway_passage_text_file_names.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { false_is_assert } from "./false_is_assert.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { giveaway_bible_verses_rendered } from "./giveaway_bible_verses_rendered.mjs";
import { list_add } from "./list_add.mjs";
export async function giveaway_psalms_chapter_text_files(chapter) {
  arguments_assert(arguments, 1);
  ("$plain chapter");
  ("The three files holding one psalm's words, each with the name it goes in its box under and the words it holds, ready to be given away.");
  ("★ THE FILES ARE MADE WHEN THEY ARE ASKED FOR AND KEPT NOWHERE, BECAUSE A COPY ON DISK IS A SECOND VERSION OF THE PSALM THAT CAN FALL BEHIND THE FIRST. Two hundred and forty-six files written out would have to be rewritten the day a renderer is improved or the translation is corrected, and nothing would say which of them were stale - a kept file opens perfectly well. The psalm itself is already kept, once, where the apps read it.");
  ("★ BEING ABSENT AND BEING UNREACHABLE ARE BOTH CHECKED, BECAUSE BOTH ARRIVE AS NO VERSES AND ONLY ONE OF THEM MEANS ANYTHING IS WRONG WITH THE PSALM. Unreachable is the common one and it is temporary: a hundred bibles were once recorded as holding no readable verse of Luke 1 and twenty eight of them read in full when asked again the same morning. Handed nothing, the renderers write empty files and say nothing is wrong, and an empty file uploaded under a name that cannot be changed is the one mistake this whole arrangement exists to avoid.");
  ("The names are asked for rather than spelled here, and they are asked for first, so that a psalm whose words cannot be read never gets as far as having files named for it.");
  ("The translation is the one every psalm in this giveaway is sung from. It is asked for rather than handed in because a box of a psalm is a box of that psalm in that translation, and a second translation would be a second giveaway with its own boxes; it is asked for rather than spelled here because the function assembling the boxes has to spell the same word, and the word is on its way into published file names that can never be changed.");
  let bible_folder = giveaway_bible_folder();
  let chapter_code = ebible_chapter_code_pad("PSA", chapter);
  let named = giveaway_passage_text_file_names(chapter_code, bible_folder);
  let outcome = await ebible_chapter_verses_storage_outcome(
    bible_folder,
    chapter_code,
  );
  false_is_assert(outcome.absent);
  false_is_assert(outcome.unreachable);
  let verses = outcome.verses;
  list_empty_not_is_assert(verses);
  let files = [];
  for (let one of named) {
    let text = giveaway_bible_verses_rendered(verses, one.mark, one.ending);
    let file = {
      kind: one.kind,
      mark: one.mark,
      ending: one.ending,
      file_name: one.file_name,
      text,
    };
    list_add(files, file);
  }
  return files;
}

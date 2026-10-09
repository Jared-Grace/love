import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { equal } from "./equal.mjs";
import { giveaway_passage_code } from "./giveaway_passage_code.mjs";
export function psalms_song_read_passage_code(read) {
  arguments_assert(arguments, 1);
  ("$plain read");
  ("The one word that names the passage a sung psalm sings, from what its file name was read as.");
  ("★ IT IS ONE FUNCTION BECAUSE A WHOLE CHAPTER AND A PART OF ONE ARE TWO SPELLINGS OF ONE ADDRESS, AND EVERY CALLER NEEDS BOTH. The reading hands back no first verse when the name named no verses, and the code is then the padded chapter and nothing more; where verses were named the code carries them. Both the walk that builds the giveaway and the check that re-asks the giveaway's rows want exactly this, and before this existed each wrote the branch out for itself. Two statements of one address rule is the shape where a published name and the name the rule now produces come apart silently, because only one of the two copies gets corrected.");
  ("The chapter code is padded to three digits here rather than by the caller, because the padding is what makes the plain alphabetical order of these codes the right order - unpadded, chapter 2 would sort after chapter 119.");
  ("Nothing is asked of the text of the psalm. A reading that named verses one to the chapter's last verse spells a different code here than the same psalm named with no verses at all, and that is two addresses for one passage - deliberately left to be reported by whoever holds the chapter lengths, rather than folded away here where it would be hidden instead.");
  let chapter_code = ebible_chapter_code_pad("PSA", read.chapter);
  let whole_is = equal(read.verse_first, null);
  if (whole_is) {
    return chapter_code;
  }
  let code = giveaway_passage_code(
    chapter_code,
    read.verse_first,
    read.verse_last,
  );
  return code;
}

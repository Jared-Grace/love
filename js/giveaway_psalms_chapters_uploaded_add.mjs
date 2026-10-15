import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_padded_assert } from "./ebible_chapter_code_padded_assert.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_passage_code_chapter_code } from "./giveaway_passage_code_chapter_code.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_greater_than_assert_json } from "./list_size_greater_than_assert_json.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { giveaway_psalms_chapters_uploaded_path } from "./giveaway_psalms_chapters_uploaded_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function giveaway_psalms_chapters_uploaded_add(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("Writes down that one psalm's box has been given away, which is what freezes every name already inside it.");
  ("★ THIS IS THE ONE STEP THAT CANNOT BE WORKED OUT AFTERWARDS, WHICH IS WHY IT IS A COMMAND SOMEBODY RUNS RATHER THAN A MEASUREMENT. Handing a box to archive.org leaves no trace at all on this disk. Nothing in the repo changes, no file is written, and the names that went out are indistinguishable from the names that did not - so the moment of the upload is the only moment at which this fact is cheap to record, and every later moment it is unrecoverable. Run it the same minute the box goes out. When there is a command that does the uploading, this is the call it makes, so the human never has to remember.");
  ("★ IT REFUSES A CHAPTER THE RECORD HOLDS NOTHING FOR, BECAUSE A FREEZE OVER NOTHING LOOKS EXACTLY LIKE A FREEZE THAT WORKS. A mistyped chapter would be written down, the list would grow, the command would answer cheerfully, and not one name would be held - and the next refresh would move the real box's names with every light green. So the record is read and the rows for this chapter counted first, and nought rows stops it. The count is handed back as well, so whoever ran it can see that the number of held names is the number they expected.");
  ("A chapter already on the list is not an error and nothing is written. The question somebody is asking by running this twice is whether the box is recorded, and it is; a refusal would make them wonder which of the two runs took effect.");
  ("★ THERE IS DELIBERATELY NO COMPANION THAT TAKES A CHAPTER OFF THE LIST. Being on it means a name is out in the world, and that is not a thing a command can undo - archive.org can dark an item but the name it served is still the name it served, and anybody who downloaded it has it. A remover would therefore be a command whose only honest use is to lie about the past, and the one case where the truth really is that nothing went out is a hand editing a committed JSON file, which is loud, reviewable, and should be.");
  ("The list is kept sorted, so that adding a chapter shows as one line in a diff rather than as a reshuffling, and so that reading it tells a person in passage order which psalms are out.");
  ebible_chapter_code_padded_assert(chapter_code);
  let path_record = giveaway_psalms_record_path();
  let rows = await file_read_json(path_record);
  function row_here_is(row) {
    let chapter_of_row = giveaway_passage_code_chapter_code(row.passage_code);
    let here = equal(chapter_of_row, chapter_code);
    return here;
  }
  let rows_here = list_filter(rows, row_here_is);
  let names_frozen = list_size(rows_here);
  list_size_greater_than_assert_json(rows_here, 0, {
    chapter_code,
    hint: "the record holds no file for this chapter, so saying its box has gone out would freeze nothing",
  });
  let chapters = await giveaway_psalms_chapters_uploaded();
  let known = list_includes(chapters, chapter_code);
  if (known) {
    let already = {
      added: false,
      chapter_code,
      names_frozen,
      chapters,
    };
    return already;
  }
  list_add(chapters, chapter_code);
  list_sort_text(chapters);
  let path = giveaway_psalms_chapters_uploaded_path();
  await file_overwrite_json(path, chapters);
  let done = {
    added: true,
    chapter_code,
    names_frozen,
    chapters,
  };
  return done;
}

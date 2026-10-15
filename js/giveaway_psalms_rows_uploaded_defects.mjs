import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_passage_code_chapter_code } from "./giveaway_passage_code_chapter_code.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
export function giveaway_psalms_rows_uploaded_defects(
  rows_before,
  rows_after,
  chapters_uploaded,
) {
  arguments_assert(arguments, 3);
  ("$plain rows_before");
  ("$plain rows_after");
  ("$plain chapters_uploaded");
  ("Every given-away name inside a box that has already gone up which a rewriting of the record would move onto a different file, or drop altogether.");
  ("★ THE WHOLE OF THE DANGER IS THAT THE WRITER WORKS THE TAKE NUMBER OUT AFRESH EVERY TIME, FROM WHERE A FILE STANDS IN THE WALK OF THE DOWNLOADS FOLDER. Which singing of a psalm is take nought is not written on any file; it is that file's place in its own passage's list, and the list is whatever order the folder was read in. So one new recording landing ahead of an old one in that order renames every take after it. While nothing is public that is free - the record is rewritten, the names shuffle, and the names are only names. The moment one box is public, each of those names is an address somebody bookmarked, the name of every derivative the host made from it, and the only words a music player will ever show a listener; and archive.org never lets a name change. A refresh after the first upload is therefore the one ordinary act in this whole system that can do permanent harm, and it can do it silently.");
  ("★ IT JUDGES THE RECORD AGAINST ITS OWN EARLIER SELF, NOT AGAINST ARCHIVE.ORG, AND THAT IS ON PURPOSE RATHER THAN FOR WANT OF A WAY TO ASK. The host could be asked what a box holds, over the network, and a check that asked would fail open on exactly the machine that most needs it: no network, no answer, nothing refused, record rewritten. The committed record is a stronger witness anyway, because it is what the upload was built from - for a chapter named as uploaded, the rows standing in the record are the names that went up, and git is holding them.");
  ("★ ONLY THE CHAPTERS NAMED AS UPLOADED ARE HELD STILL, AND THAT IS WHAT KEEPS THE FREEZE FROM BEING A WALL. Eighty-nine boxes are not public yet, and every one of them must stay free to be renamed, so that takes can be added and a wrongly-spelled passage repaired right up to the minute it is handed over. A freeze over the whole record would have stopped the ordinary work to protect boxes nobody can reach. The list of uploaded chapters is therefore the only thing that switches this on, which is why it is a kept list rather than a judgment made here.");
  ("A name that appears inside a frozen box having not been there before is not reported. A box may receive another singing later - that is adding to what is published, not changing it - and the host will serve the new file beside the old ones. Only a name that now points at a different file, or that has stopped being in the record at all, says something already public has been undone.");
  ("The two faults are kept apart because the repairs are opposite. A name that moved means two files traded places and the record must be put back; a name gone means the file it stood for is no longer being found at all, and whether that is a deleted recording or a folder nobody mounted is a question about the disk and not about the record.");
  ("The rows are handed in rather than read, for the same reason the sibling check gives: a version that opened the record could only ever be run against what the record happens to say, and what the record says today is a clean sheet - so every branch here would sit unexercised and read as working whether it worked or not. The reading belongs to the caller that knows where the record is kept.");
  ("The chapter a row belongs to is asked of its passage code, which insists on being a chapter code spelled the way this bible spells one. A row whose passage code is malformed therefore stops this rather than being judged by it, and that is right: such a row is already named by the check on the record's own rows, and a freeze that quietly skipped the rows it could not read would be a freeze with a hole in exactly the shape of a bad row.");
  ("Where two rows of the rewriting share one given-away name the first is the one compared against. That collision is refused by the writer and reported by the check on the record's rows, so naming it a third time here would say one fault three ways.");
  function row_chapter_uploaded_is(row) {
    let chapter_code = giveaway_passage_code_chapter_code(row.passage_code);
    let uploaded = list_includes(chapters_uploaded, chapter_code);
    return uploaded;
  }
  function row_name(row) {
    let name = row.name_published;
    return name;
  }
  function row_file(row) {
    let file_name = row.file_name;
    return file_name;
  }
  let after_by_name = list_to_dictionary(rows_after, row_name, row_file);
  let rows_frozen = list_filter(rows_before, row_chapter_uploaded_is);
  function defect_or_null(row) {
    let name = row.name_published;
    let missing = property_exists_not(after_by_name, name);
    if (missing) {
      let gone = {
        fault: "name_gone",
        name_published: name,
        file_name: row.file_name,
        file_name_after: "",
      };
      return gone;
    }
    let file_after = property_get(after_by_name, name);
    let same = equal(file_after, row.file_name);
    if (same) {
      return null;
    }
    let moved = {
      fault: "name_moved",
      name_published: name,
      file_name: row.file_name,
      file_name_after: file_after,
    };
    return moved;
  }
  let defects = list_map_filter_null_not_is(rows_frozen, defect_or_null);
  return defects;
}

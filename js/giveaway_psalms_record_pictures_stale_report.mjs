import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_paintings_rows } from "./giveaway_psalms_paintings_rows.mjs";
import { giveaway_record_row_picture_is } from "./giveaway_record_row_picture_is.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
export async function giveaway_psalms_record_pictures_stale_report() {
  arguments_assert(arguments, 0);
  ("Asks whether the written giveaway record still agrees with the timing documents about which pictures are being given away, and names every picture the two of them disagree about.");
  ("★ THE CHECK THAT ALREADY EXISTED ONLY LOOKS ONE WAY, AND THE FAILURE THAT ACTUALLY HAPPENED WAS THE OTHER WAY. The repo check walks the record's picture rows and says which of their files this disk no longer holds. That reads clean while a picture sits on the disk, named by a live timing document, and has no row at all - and on 2026-10-14 twenty-nine of Psalm 68's fifty crops were in exactly that state, because the record had been written two hours before the crops were given to the part songs. A file with no row is not given away, and nothing said so.");
  ("★ IT COMPARES THE RECORD AGAINST THE DOCUMENTS AND NOT AGAINST THE FOLDERS ON THE DISK, BECAUSE A CROP NOBODY HAS CHOSEN IS NOT A FAULT. The picture folders also hold crops that were tried and not used; those have no document naming them, and they are not meant to be given away. What is meant to be given away is what a timing document names, and that is the same list the record is built from - so a difference between the two can only mean the record has fallen behind, which is a thing somebody can fix.");
  ("★ IT REPORTS AND NEVER REFUSES, BECAUSE ONLY THE HUMAN CAN CLEAR IT. The record is rewritten by a command that is handed to a person to paste, since it reads a folder outside the repo. So any agent adding a crop leaves this disagreeing until that person runs the write - and a gate that an agent cannot clear would sit red as the normal state of the repo and stop meaning anything.");
  ("A picture the record has and no document names any more is reported beside the other direction. That one matters differently: the name in the record is the address a published file keeps, so a crop swapped out from under it is how a name already given to somebody stops pointing at anything.");
  ("Which rows are pictures is asked of the named test for it rather than spelled here, because the record holds four kinds now and the spelling of the word is the record's own business.");
  let file_path = giveaway_psalms_record_path();
  let rows = await file_read_json(file_path);
  let held = await giveaway_psalms_paintings_rows();
  let recorded = {};
  let recorded_count = 0;
  for (let row of rows) {
    let picture_is = giveaway_record_row_picture_is(row);
    if (not(picture_is)) {
      continue;
    }
    property_set(recorded, row.name_published, true);
    recorded_count = recorded_count + 1;
  }
  let wanted = {};
  for (let row of held.rows) {
    property_set(wanted, row.name_published, true);
  }
  let missing_from_record = [];
  for (let row of held.rows) {
    let known = property_exists(recorded, row.name_published);
    if (known) {
      continue;
    }
    list_add(missing_from_record, row.path_in_repo);
  }
  let gone_from_documents = [];
  for (let row of rows) {
    let picture_is = giveaway_record_row_picture_is(row);
    if (not(picture_is)) {
      continue;
    }
    let still = property_exists(wanted, row.name_published);
    if (still) {
      continue;
    }
    list_add(gone_from_documents, row.name_published);
  }
  let none_missing = list_empty_is(missing_from_record);
  let none_gone = list_empty_is(gone_from_documents);
  let agrees = none_missing && none_gone;
  let report = {
    agrees: agrees,
    documents: held.documents,
    pictures_in_record: recorded_count,
    pictures_the_documents_name: list_size(held.rows),
    missing_from_record: missing_from_record,
    gone_from_documents: gone_from_documents,
  };
  return report;
}

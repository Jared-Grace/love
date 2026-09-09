import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_book_typos } from "./bible_usfm_book_typos.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_version_book_path } from "./bible_usfm_version_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { json_to } from "./json_to.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
export async function bible_usfm_book_typos_gate_run() {
  arguments_assert(arguments, 0);
  ("Fails when a place this repo mends in a published bible is no longer where the list says it is - gone from the file, or standing in more than one place.");
  ("★ A MEND NOBODY CHECKS IS A MEND THAT STOPS WORKING WITHOUT SAYING SO. The file it lands in is a download; it is replaced whole whenever it is fetched again. If the publisher puts one of these right, the entry mends nothing from that day on and every run goes on passing, because a replacement that finds nothing hands back exactly what it was given. If a repackaging makes the run appear twice, the mend lands in both places, and the second one is somewhere nobody read.");
  ("SO WHAT IS ASKED IS NOT DID IT WORK BUT IS THERE STILL EXACTLY ONE PLACE FOR IT. That is the claim the list makes about the shelf, and it is the only claim that can be checked without knowing what the words ought to say. An entry down to none is an entry to delete, and an entry up to two is a run to spell out longer.");
  ("A BOOK THE BIBLE DOES NOT CARRY FAILS HERE TOO, because an entry naming a book that is not on the shelf is an entry that has never once been applied.");
  let typos = bible_usfm_book_typos();
  let faults = [];
  for (let typo of typos) {
    let version = property_get(typo, "version");
    let book_code = property_get(typo, "book_code");
    let from = property_get(typo, "from");
    let file_path = await bible_usfm_version_book_path(version, book_code);
    let usfm = await file_read(file_path);
    let count = text_occurrences_count(usfm, from);
    let once = equal(count, 1);
    if (once) {
      continue;
    }
    list_add(faults, {
      version,
      book_code,
      from,
      count,
    });
  }
  let fault_count = faults.length;
  for (let fault of faults) {
    let json = json_to(fault);
    console.log(json);
  }
  console.log(
    "bible typos listed: " + typos.length + "   places wrong: " + fault_count,
  );
  let clean = equal(fault_count, 0);
  if (not(clean)) {
    error_json({
      hint: text_combine_multiple([
        "a mend in ",
        fn_name("bible_usfm_book_typos"),
        " names a run of the publisher's file that is not there exactly once. None means the publisher has put it right and the entry should be deleted; more than one means the run must be spelled out longer to name the single place",
      ]),
      faults,
    });
  }
  let r = {
    listed: typos.length,
    faults: fault_count,
  };
  return r;
}

import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { giveaway_record_row_song_is } from "./giveaway_record_row_song_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function giveaway_psalms_songs_disk_defects(rows, file_names_disk) {
  arguments_assert(arguments, 2);
  ("$plain rows");
  ("$plain file_names_disk");
  ("Where the frozen giveaway record and the recordings actually sitting on this disk have come apart: a row naming a file that is no longer there, and a recording nobody wrote a row for.");
  ("★ THIS IS THE ONE QUESTION THE GIVEAWAY GATE IS FORBIDDEN TO ASK, AND IT IS ALSO THE ONE THAT DECIDES WHETHER AN UPLOAD IS SAFE. That gate must give the same answer on a machine that has never held the recordings, so it may not reach for the folder; everything it checks is the record against itself. But the record's whole purpose is to pair a name on this disk with a name it will be published under, and a pairing can rot from the disk side without a single row changing. So the check exists, and it lives outside the gate on purpose rather than by oversight.");
  ("★ THE TWO FAULTS PULL IN OPPOSITE DIRECTIONS, AND WHICHEVER WAY YOU GO ONE OF THEM BITES. The mark at the end of a published name says which singing of a psalm this is, and it comes from where the recording stands in its passage's own list - so marking one raw recording as superseded shortens that list and moves every later take down a place. Refresh the record after that and three published addresses land on three different songs. Do not refresh it, and the record goes on naming files that were renamed away. The first failure is silent and permanent; the second is loud and fixable. That is the whole reason this is asked before an upload and the reason the answer to it is to refresh now rather than later.");
  ("★ A ROW WHOSE FILE IS GONE IS THE DANGEROUS ONE, BECAUSE NOTHING ABOUT IT LOOKS WRONG. The published name is still spelled correctly, the record is still complete, and the gate is still green - the only thing missing is the recording the name was built from. Two of these were found by hand the day the record was written, after the owner marked two raws superseded that afternoon.");
  ("A recording nobody wrote a row for is the opposite case and costs nothing but absence: the singing exists and is simply not being given away. It is still worth saying, because absence is silent and a record that looks complete is exactly what stops anybody looking.");
  ("Only the recordings a reader could place are handed in here. A download folder holds far more than songs, and a walk over it has already passed over everything it could not read as a psalm - so a name absent from this list is not a fault, it is a holiday snap.");
  ("★ BOTH QUESTIONS ARE PUT TO THE SONG ROWS ALONE, BECAUSE BOTH ARE ABOUT A FOLDER THAT ONLY EVER HELD RECORDINGS. The record held nothing but singing until the paintings joined it, and one thousand eight hundred and thirteen picture rows would every one of them have been reported as a row whose file is gone - a crop lives in this repo and was never in anybody's download folder. That is the worst possible shape for this particular report: it is the one asked immediately before an upload, and the answer it gave would have been eighteen hundred faults none of which were faults, hiding the two that were.");
  ("★ THE SAME QUESTION IS ALREADY ASKED OF THE CROPS NEXT DOOR, WHICH IS WHY NARROWING THIS ONE GIVES NOTHING UP. ",
    fn_name("giveaway_psalms_paintings_files_missing"),
    " walks the timing documents, opens the path each one gives its picture, and names both the absent file and the document that asked for it - seven absent files across eight documents, measured. It asks from the documents' side rather than the record's, so it reports a crop that was never made as well as one that has been deleted, which this function could not do from a row that only exists because the crop was named. Bending this one to take two folders instead would make a caller that handed in the wrong pair agree with itself the whole time.");
  let song_rows = list_filter(rows, giveaway_record_row_song_is);
  let names_recorded = list_map_property(song_rows, "file_name");
  let defects = [];
  for (let row of song_rows) {
    let on_disk = list_includes(file_names_disk, row.file_name);
    if (not(on_disk)) {
      let gone = {
        fault: "record_file_absent",
        file_name: row.file_name,
        name_published: row.name_published,
      };
      list_add(defects, gone);
    }
  }
  for (let file_name of file_names_disk) {
    let recorded = list_includes(names_recorded, file_name);
    if (not(recorded)) {
      let unrecorded = {
        fault: "disk_file_unrecorded",
        file_name: file_name,
        name_published: "",
      };
      list_add(defects, unrecorded);
    }
  }
  return defects;
}

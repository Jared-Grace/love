import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { file_modified_ms } from "./file_modified_ms.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_min } from "./list_min.mjs";
import { date_local_iso } from "./date_local_iso.mjs";
export async function giveaway_psalms_files_date_or_null(files) {
  arguments_assert(arguments, 1);
  ("$plain files");
  ("The day one psalm's work was made, read off the oldest singing in its box, or nothing at all where there is no singing in it.");
  ("★ THE DAY COMES FROM THE SINGING AND FROM NOTHING ELSE IN THE BOX, BECAUSE THE SINGING IS THE WORK AND THE REST IS OLDER OR NEWER FOR REASONS THAT HAVE NOTHING TO DO WITH IT. The paintings are centuries old and the files holding them were cropped whenever somebody happened to crop them; the words of the psalm are made fresh every time they are asked for, so they carry today's date whatever day that is; and a video is a rendering of the singing rather than a thing made on its own. Taking the oldest file of any kind would mean a box dated by when a crop was saved.");
  ("★ THE OLDEST SINGING IS TAKEN RATHER THAN THE NEWEST, BECAUSE THE QUESTION IS WHEN THIS PSALM WAS MADE AND NOT WHEN IT WAS LAST ADDED TO. A psalm sung five times over three months was made on the first of those days; the later takes are the same work done again. The newest would also mean a box's date moved every time another take was rendered, which would be a date that cannot be cited.");
  ("★ THIS IS WORTH DOING AT ALL BECAUSE THE ALTERNATIVE WAS THE UPLOAD DATE, AND THE UPLOAD DATE WOULD BE WRONG IN A WAY A READER CAN SEE. The host already files when a box arrived, twice over, so a date field repeating it says nothing new. More than that: these boxes go out over days while their singing was made over months, so dated by upload the whole set would read as made in one week, and the psalms sung longest ago would be the ones claiming to be newest.");
  ("★ A BOX WITH NO SINGING IN IT ANSWERS NOTHING RATHER THAN TODAY, SO THE CALLER DECIDES WHAT TO DO ABOUT IT. Seven boxes hold a psalm's paintings and words with nothing sung in them. Today's date on one of those would be a claim that the work was made today, which is false and published; nothing handed back is a question the caller can answer by leaving the field off the page altogether, which is what it means.");
  ("The time of day is thrown away and the local day kept, because a day is what a reader of a download page is shown and an hour is noise. The local day is used rather than the day in London, since the hand that made the recording was in one place and that is the day it was made there.");
  ("A file named here that is not on the disk stops this. Every file in a plan has already had its size read off the disk by the time this is asked, so a missing one would have stopped the plan first - meaning a failure here is a file that went away in between, which is worth hearing about rather than working around.");
  let ms_list = [];
  for (let file of files) {
    let song_is = equal(file.kind, "song");
    if (song_is) {
      let ms = await file_modified_ms(file.path_on_disk);
      list_add(ms_list, ms);
    }
  }
  let none_is = list_empty_is(ms_list);
  if (none_is) {
    return null;
  }
  let earliest = list_min(ms_list);
  let d = new Date(earliest);
  let day = date_local_iso(d);
  return day;
}

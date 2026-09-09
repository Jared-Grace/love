import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_bible_document_name } from "./lyric_video_bible_document_name.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_bible_document_pictures_times_write(
  version,
  book_code,
  chapter_number,
  seconds_lead,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "$plain seconds_lead";
  "Works out, for every picture a passage asks for, the moment it comes up and the moment it gives way, and where it is drawn to - reading all three off the line each picture was authored against.";
  "★ THE AUTHORED FACT IS WHICH LINE A PICTURE COMES UP ON, AND EVERY OTHER NUMBER IS DERIVED FROM IT. Somebody reading a psalm decides that this picture belongs to that line; that is a judgment about the psalm and no command can make it. When it comes up, when it goes, and what its file is called are not judgments at all - they follow from that one choice and from the times already sung. So the choice is what is written down, and the rest is worked out here every time it is asked for.";
  "★ THAT IS WHY A RETIMED PSALM NO LONGER STRANDS ITS PICTURES. Before this, a picture carried the second it appeared at, copied off the line it was meant to follow. Move that line - and the lines get moved, because a line landing half a beat off the sung word is the ordinary correction here - and the picture stays behind at a number that now means nothing, silently, with nothing red anywhere. Running this again after a retiming puts every window back on its line, and running it when nothing has moved changes nothing at all.";
  "★ THE LEAD IS ASKED FOR RATHER THAN ASSUMED, AND FINDING THAT OUT IS WHY. Psalm 148 was drawn with every picture arriving four tenths of a second before the words it belongs to, twelve times out of twelve; Psalm 121 was drawn with the picture and the line changing together. A pass that snapped every picture to its line would have moved all twelve of 148's without a word, which is the exact silent damage this family exists to prevent. Which of the two is right is a judgment about how a video reads and belongs to whoever watches it, so it is a number handed in rather than one decided here.";
  "★ THE PICTURE AFTER THIS ONE IS REACHED INSIDE THE BRANCH THAT KNOWS IT EXISTS, AND THAT IS NOT A STYLE CHOICE. Written as a choice between two values, the canonicalizing pass lifts both sides out above the choice and works them out whichever way it falls - so the last picture, which has nothing after it, read a line number off nothing and threw. The guard has to be a branch the lookup sits inside, never a condition the lookup sits beside.";
  "★ IT REFUSES THE WHOLE DOCUMENT RATHER THAN HALF WRITING IT. A picture with no line authored against it, or a line number pointing past the end of the psalm, is a passage somebody is still in the middle of - and a pass that filled in the pictures it understood would leave a document that looks finished and has a hole in the middle of it. So the unauthored ones are named back to the caller and nothing is written, which makes the answer a list of what is left to do rather than a fault.";
  "THE FIRST PICTURE COMES UP AT NOTHING RATHER THAN AT ITS OWN LINE, because a psalm opens on silence more often than not - the singing starts a fraction in, and a video that begins on black for a quarter of a second reads as a fault in the file. Every later picture starts exactly where the one before it ended, so the set covers the whole song with no seam and no gap.";
  "THE LAST PICTURE RUNS TO THE END OF THE SONG AND NOT TO THE END OF ITS LAST LINE, for the same reason from the other side. The music carries on after the final word - often for many seconds - and the picture that was up when the singing stopped is the one that should still be there.";
  "EVERY DERIVED SECOND IS ROUNDED TO THREE PLACES, because taking a lead off a line's start is a subtraction between two numbers held in binary and the answer comes out a millionth of a second wide. Left alone that difference is invisible in the video and fatal to any check that asks whether this pass changed anything, which is the check the whole design rests on.";
  "NOTHING IS DRAWN AND NOTHING ON DISK IS TOUCHED BUT THE DOCUMENT. Where a picture's file name changes because its name was rewritten, the painting already made keeps its old address and is left alone; the drawing pass sees a path with nothing at it and draws that one, which is the same rule it always follows.";
  arguments_assert(arguments, 4);
  let lead = Number(seconds_lead);
  let path_document = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let there = await file_exists(path_document);
  if (not(there)) {
    let undrafted = {
      path_document,
      pictures: 0,
      written: false,
      unauthored: [],
      why: "this passage has no lyric video document yet",
    };
    return undrafted;
  }
  let document = await file_read_json(path_document);
  let pictures = lyric_video_document_pictures(document);
  let none = list_empty_is(pictures);
  if (none) {
    let bare = {
      path_document,
      pictures: 0,
      written: false,
      unauthored: [],
      why: "this document asks for no pictures",
    };
    return bare;
  }
  let lines = document.lines;
  let unauthored = [];
  for (let picture of pictures) {
    let named = equal(typeof picture.name, "string");
    let numbered = equal(typeof picture.line, "number");
    let inside =
      numbered &&
      greater_than_equal(picture.line, 0) &&
      less_than(picture.line, lines.length);
    let ready = named && inside;
    if (not(ready)) {
      list_add(unauthored, picture);
    }
  }
  let b = list_empty_is(unauthored);
  let missing = not(b);
  if (missing) {
    let unfinished = {
      path_document,
      pictures: pictures.length,
      written: false,
      unauthored,
      why: "every picture needs a name and the number of the line it comes up on",
    };
    return unfinished;
  }
  let folder_name = lyric_video_bible_document_name(
    version,
    book_code,
    chapter_number,
  );
  let count = pictures.length;
  for (let index = 0; less_than(index, count); index += 1) {
    let picture = pictures[index];
    let opening = 0;
    let start = opening;
    let first = equal(index, 0);
    if (not(first)) {
      let value = subtract(lines[picture.line].start, lead);
      start = number_round_places(value, 3);
    }
    picture.start = start;
    let after = index + 1;
    let last = equal(after, count);
    let end = document.duration;
    if (not(last)) {
      let picture_after = pictures[after];
      let value_after = subtract(lines[picture_after.line].start, lead);
      end = number_round_places(value_after, 3);
    }
    picture.end = end;
    let file_name = picture.name + ".png";
    picture.path = path_join([
      "gitignore/lyric_video_pictures",
      folder_name,
      file_name,
    ]);
  }
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    pictures: pictures.length,
    written: true,
    seconds_lead: lead,
    unauthored,
    why: null,
  };
  return r;
}

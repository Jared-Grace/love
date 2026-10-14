import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_chapter_plans } from "./lyric_video_chapter_plans.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_document_pictures_copy_part_write } from "./lyric_video_document_pictures_copy_part_write.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_psalm_chapter_part_documents_pictures_write(
  chapter,
) {
  arguments_assert(arguments, 1);
  ("$plain chapter");
  ("Gives every part singing of one psalm the pictures the whole psalm's plan already holds, and says which parts were left as they were and why.");
  ("★ THE WHOLE CHAPTER'S PLAN IS WHERE THE PICTURE WORK ACTUALLY IS, AND UNTIL NOW IT HAD NO WAY OUT OF THERE. A psalm sung in four parts has four plans that render and one that never will, and when the painting was chosen for the whole chapter the choosing was done once, in the plan nobody plays. Psalm 68 held fifty crops that way and sang in four parts holding none, so the crops sat on this machine with nothing able to show them.");
  ("★ A PART THAT ALREADY HAS PICTURES IS STEPPED OVER, BECAUSE WHAT IS IN IT MAY BE SOMEBODY'S CHOOSING. The copy underneath replaces a part's whole list of pictures, which is the right thing to do to an empty one and the wrong thing to do to one a person has arranged. The protection has to be here rather than there: that copy is also how a person deliberately re-copies one part, and refusing there would take that away.");
  ("★ THE CHAPTER IS THE SCOPE BECAUSE THE PLAN BEING COPIED FROM IS THE CHAPTER'S. A command over the whole psalter would have to decide, for each of seventy odd chapters, whether a plan holding pictures and no recording is work waiting or work abandoned, and that is a judgment nobody has made. Named by its chapter it is one word out of the log somebody can run again for the next psalm.");
  ("★ EACH PART IS COMMITTED AS IT LANDS, UNDER ITS OWN NAME AND ITS TWO REAL PATHS. Four documents rewritten and committed once at the end is one entry no command can be named after, and this folder has several hands in it, so a peer's sweep takes the files first and files them under a bare word. What is already noted is swept before the loop starts, or the first part's commit claims somebody else's work under its own name.");
  ("A part whose lines cannot be found inside the whole chapter's lines is reported rather than guessed at, which is the copy's own refusal passed straight through. It means the two were laid out by different rules, and a picture moved by a guessed distance lands on the wrong line.");
  ("Only the plain singing of each part is written to, never a superseded take, because the reading of the folder this asks leaves takes out. A take is finished business - the video it timed is already made - so a picture put into one is work nobody will ever see.");
  let chapters = await lyric_video_chapter_plans();
  let number = Number(chapter);
  let found = list_find_property_or_null(chapters, "chapter_number", number);
  if (null_is(found)) {
    let unplanned = {
      chapter: number,
      whole_plan: null,
      written: [],
      had_pictures: [],
      refused: [],
    };
    return unplanned;
  }
  let whole = found.whole;
  if (null_is(whole)) {
    let no_whole = {
      chapter: number,
      whole_plan: null,
      written: [],
      had_pictures: [],
      refused: [],
    };
    return no_whole;
  }
  await ai_git_noted();
  let written = [];
  let had_pictures = [];
  let refused = [];
  for (let part of found.parts) {
    let pictures = lyric_video_document_pictures(part.document);
    let empty = list_empty_is(pictures);
    if (not(empty)) {
      list_add(had_pictures, part.name);
      continue;
    }
    let args = [whole.path, part.path];
    let one = await function_call_commit(
      lyric_video_document_pictures_copy_part_write,
      args,
    );
    if (not(one.written)) {
      list_add(refused, part.name);
      continue;
    }
    let how = {
      part: part.name,
      offset: one.offset,
      kept: one.kept,
      dropped: one.dropped,
    };
    list_add(written, how);
  }
  let list = lyric_video_document_pictures(whole.document);
  let r = {
    chapter: number,
    whole_plan: whole.name,
    pictures: list_size(list),
    written,
    had_pictures,
    refused,
  };
  return r;
}

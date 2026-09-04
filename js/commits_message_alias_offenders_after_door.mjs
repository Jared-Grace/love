import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_alias_door_commit } from "./commits_message_alias_door_commit.mjs";
import { git_commits_subjects_since } from "./git_commits_subjects_since.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
export async function commits_message_alias_offenders_after_door(offenders) {
  "Which of the commits messaged with an alias key were made after the spelling out was put in, and so cannot be answered for as history.";
  "AN OFFENDER FOUND UNDER THE DOOR AND ONE FOUND OVER IT ARE TWO DIFFERENT FACTS WEARING ONE SHAPE, and telling them apart is what lets the record be written at all. Under it, a short word was typed at a keyboard where short words are what the seam is for, and the message belongs to a commit already in the history; recording it is the only thing left to do about it. Over it, every commit is worded by a place that spells such a word out, so one appearing says that place was gone round - a way in to find and shut, never a line to add to a record.";
  "The two were refused together before, and refusing them together is what left the gate red with nobody able to answer it: the only remedy the record offered was closed against the only offenders the record was for.";
  "Which side a commit falls on is asked of the history rather than worked out from a date. A date is not what the door is, and two commits made in the same minute can sit on either side of it.";
  arguments_assert(arguments, 1);
  let door = await commits_message_alias_door_commit();
  let commits = await git_commits_subjects_since(door);
  let shas = [];
  for (let commit of commits) {
    let id = property_get(commit, "commit");
    list_add(shas, id);
  }
  let after = [];
  for (let offender of offenders) {
    let words = text_split(offender, " ");
    let id2 = list_first(words);
    let later = list_includes(shas, id2);
    if (later) {
      list_add(after, offender);
    }
  }
  return after;
}

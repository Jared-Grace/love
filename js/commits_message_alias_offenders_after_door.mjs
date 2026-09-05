import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_alias_door_commit } from "./commits_message_alias_door_commit.mjs";
import { git_commits_subjects_since } from "./git_commits_subjects_since.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { commits_message_alias_answered_for } from "./commits_message_alias_answered_for.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function commits_message_alias_offenders_after_door(rows) {
  "$plain rows";
  "Which of the commits messaged with an alias key were made after the spelling out was put in, and so cannot be answered for as history.";
  "AN OFFENDER FOUND UNDER THE DOOR AND ONE FOUND OVER IT ARE TWO DIFFERENT FACTS WEARING ONE SHAPE, and telling them apart is what lets the record be written at all. Under it, a short word was typed at a keyboard where short words are what the seam is for, and the message belongs to a commit already in the history; recording it is the only thing left to do about it. Over it, every commit is worded by a place that spells such a word out, so one appearing says that place was gone round - a way in to find and shut, never a line to add to a record.";
  "The two were refused together before, and refusing them together is what left the gate red with nobody able to answer it: the only remedy the record offered was closed against the only offenders the record was for.";
  "Which side a commit falls on is asked of the history rather than worked out from a date. A date is not what the door is, and two commits made in the same minute can sit on either side of it. That is why an offender arrives here as a row and not as its written-down name: the name is made of the second, which cannot answer this question, and the row carries the commit as well, which can.";
  "★ A THIRD ANSWER WAS MISSING AND IS ADDED HERE: A COMMIT OVER THE DOOR THAT HAS BEEN LOOKED AT ONE AT A TIME. The refusal above says to find the way in and shut it, and shutting it does nothing whatever to the commit that already came through - so with only two answers the gate stayed red forever after the fault was fixed, which taught a reader that a red gate here means nothing. The commits looked at are named one by one and the reason is written beside them; a commit not among them still comes back as a way in, so nothing is loosened by this except the one thing that was actually examined.";
  "IT IS THE SECOND A COMMIT WAS MADE AT THAT IS MATCHED ON, NEVER ITS NAME, because this history is rewritten on purpose and a rewrite renames every commit it touches - so an accounting written as a name would stop matching and the gate would go red again with no way to see why. The second is asked of git and never kept by hand beside the accounting, so that there is one fact and not two that can come apart; it arrives on the row from the one reading of the history that was happening anyway, where it used to cost a program for each commit over the door.";
  arguments_assert(arguments, 1);
  let door = await commits_message_alias_door_commit();
  let commits = await git_commits_subjects_since(door);
  let shas = [];
  for (let commit of commits) {
    let id = property_get(commit, "commit");
    list_add(shas, id);
  }
  let answered = commits_message_alias_answered_for();
  let after = [];
  for (let row of rows) {
    let id2 = property_get(row, "commit");
    let word = property_get(row, "word");
    let second = property_get(row, "second");
    let said = property_get(row, "said");
    let later = list_includes(shas, id2);
    if (later) {
      let known = false;
      for (let entry of answered) {
        let entry_second = property_get(entry, "second");
        let entry_word = property_get(entry, "word");
        let second_same = equal(entry_second, second);
        let word_same = equal(entry_word, word);
        if (second_same) {
          if (word_same) {
            known = true;
          }
        }
      }
      let unknown = not(known);
      if (unknown) {
        list_add(after, said);
      }
    }
  }
  return after;
}

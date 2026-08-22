import { not } from "./not.mjs";
import { bible_gathered_events_all } from "./bible_gathered_events_all.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function bible_gathered_events_by_chapter() {
  "The other way round: every gathered chapter, and for each one the events that point into it and the verses of it that each event takes.";
  "★ IT IS DERIVED AND THERE IS DELIBERATELY NO SECOND FILE. Both directions are wanted - an event wants its passages, a chapter wants its events - and the obvious way to have both is to write both down, which is the same facts kept twice. Two copies do not break when they disagree; they simply drift, and nobody finds out until somebody reads the wrong one. So the events are the one source, this is a reading of them, and correcting a verse range in the gathering corrects both directions at once.";
  "★ THE VERSES COME BACK WITH THE EVENT, WHICH IS WHAT MAKES THIS ANSWER THE QUESTION PEOPLE ACTUALLY ASK. A bare list of titles per chapter says which events are near each other and nothing else. With the verses beside them a reader can see what of a chapter has been gathered and what has not - and a chapter with verses nobody points at is a hole in the corpus that no error will ever report, because gathering too little looks exactly like gathering.";
  "A chapter appearing under several events is normal and not a fault. A scene told by four books puts one event under four chapters, and a chapter long enough to hold six scenes lists six.";
  let events = await bible_gathered_events_all();
  let by_chapter = {};
  function each_event(event) {
    function each_passage(passage) {
      let code = passage.chapter_code;
      let held = by_chapter[code];
      if (not(held)) {
        held = [];
        by_chapter[code] = held;
      }
      let taken = {
        title: event.title,
        verses: passage.verses,
      };
      list_add(held, taken);
    }
    each(event.passages, each_passage);
  }
  each(events, each_event);
  return by_chapter;
}

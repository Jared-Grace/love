import { property_get } from "./property_get.mjs";
import { add_1 } from "./add_1.mjs";
import { list_add } from "./list_add.mjs";
export function g_arc_turns_numbered(arc) {
  "Every turn of one arc paired with the number a reviewer sees against it - counted straight through the whole arc rather than restarting at each conversation, starting at one.";
  "IT IS THE ONE PLACE THE NUMBERING IS DONE, and that is the point of it existing rather than each caller counting for itself. The number is an ADDRESS: a reader says turn six is unclear, a note is filed against turn six, and a revision goes and finds turn six. Two callers counting separately can disagree - one restarts at each conversation, one skips a turn with no answer - and nothing goes red, because both hand back a number and only a person comparing two screens would ever see that they point at different lines.";
  "THE CONVERSATION TRAVELS WITH THE TURN because a caller often needs both. Reading the arc out wants the conversation's catch-up printed above its turns, and a check faulting a catch-up needs a number to file it under - the number of the first turn beneath it, since a catch-up is not a turn and has none of its own.";
  let numbered = [];
  let conversations = property_get(arc, "conversations");
  let number = 0;
  let conversation_number = 0;
  for (let conversation of conversations) {
    conversation_number = add_1(conversation_number);
    let turns = property_get(conversation, "turns");
    let first = true;
    for (let turn of turns) {
      number = add_1(number);
      list_add(numbered, {
        number,
        turn,
        conversation,
        conversation_number,
        conversation_first: first,
      });
      first = false;
    }
  }
  return numbered;
}

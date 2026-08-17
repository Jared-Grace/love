import { app_code_expression_replace_word_say } from "./app_code_expression_replace_word_say.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_replace_button(parent, press) {
  arguments_assert(arguments, 2);
  ("the button that makes the swap happen, with the one word saying what it does written in the very colour the swap is wearing");
  ("Everything about to move on the line is blue - the block chosen, the words naming it, and the value on its way down into its room. So the word for the thing that starts all that is blue too, and a learner who has been watching the blue reads what the button does before reading the sentence on it.");
  ("The rest of the sentence stays as it was. It says where to press and nothing more, and a whole button in the colour would have said that the pressing is the thing the colour is about rather than the swap.");
  ("Weighted a little heavier as well as coloured, because the colour alone is asked to be legible on the button's own grey - and a word carrying the meaning of the button ought to be the word the eye lands on first whatever it is standing on.");
  ("the same wide grey button every other button on this screen is, filling the line it has to itself rather than standing in the middle of it");
  ("Wide because that is the shape of a button here: See another example, Next and Home all fill their line, and a smaller button among them reads as a different kind of thing to press rather than as the next one. Grey for the same reason - green is what this app says well done in, and a button offering the swap is asking for it, not praising it.");
  ("the word is written from the one place that says how the word for the swap is written, because the lesson after this one tells the learner about this very press afterwards and has to say the word to them in the colour they pressed it in");
  let button = app_shared_button_wide(parent, "Click here to ", press);
  app_code_expression_replace_word_say(button, "replace");
  return button;
}

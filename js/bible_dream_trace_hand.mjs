import { arguments_assert } from "./arguments_assert.mjs";
export function bible_dream_trace_hand() {
  "Everything a page tracing a dream has to remember about the hand drawing on it - which stroke is being traced, whether the hand has been let off the button and is drawing anyway, where it was pressed down, and the furthest it has been from there since.";
  "THE FOUR ARE ONE THING BECAUSE THEY ARE ONLY EVER TRUE TOGETHER. Letting go of a stroke clears the latch in the same breath, and a press that begins a stroke sets where it began and how far it has gone at the same moment. Held as four separate words they could be set apart from one another, and a latch left standing over no stroke is a page that draws when nobody is drawing.";
  "IT IS A RECORD AND NOT FOUR CLOSED-OVER WORDS, which is what lets each thing a pointer does have a name and a file of its own. Four words held inside one function can only be shared by writing every watcher of the hand inside it too, and that is how the watching of a hand became a body nobody could read the whole of.";
  "THE FURTHEST IS KEPT RATHER THAN THE LAST, and that is the whole reason it is remembered at all: a hand that traces a cow and comes back to where it started has moved a great deal and ends a finger's width from the press. Read at the release alone that is a click, and the page would carry on drawing behind an unpressed hand.";
  arguments_assert(arguments, 0);
  let hand = {
    active: null,
    latched: false,
    pressed_at: null,
    travelled: 0,
  };
  return hand;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_color_ink } from "./app_shared_color_ink.mjs";
export function app_code_note_name_ink() {
  arguments_assert(arguments, 0);
  ("the one colour a name is written in once its own colour has moved behind it - the near-black that every coloured patch carries its letters in");
  ("THE COLOUR MOVED TO THE BACKGROUND SO THAT ONE LIST COULD SERVE EVERY SURFACE, and this is what that costs and what it buys. A letter drawn in a colour has to be readable against whatever is behind it, so a colour bright enough for a black code chip was hopeless on a pale card and the list had to be kept twice - two greens, which a reader said plainly did not look like one green. A patch brings its own background with it. What the patch must be read against is this ink, which does not change, so the patch itself is free to be the same colour wherever it is put.");
  "WHY THIS COLOUR IS NEAR-BLACK AND NEUTRAL IS WRITTEN WHERE THE VALUE IS, IN " +
    fn_name("app_shared_color_ink") +
    ", because it is a fact about the colour rather than about this app. What stays here is what this app wants it for. The palette rule is that a screen colour is spelled in one of the shared colour functions and asked for everywhere else, and this file used to spell its own.";
  ("It is also the patch's edge, and that matters most here. The three colours this app lends to names are light, so a patch is plain enough on a black chip and can be faint on a pale card - the green against the card is barely a fifth of a step of brightness. The edge ends that question for good: how well a patch's fill happens to stand out from the page behind it no longer decides whether it is seen at all.");
  let ink = app_shared_color_ink();
  return ink;
}

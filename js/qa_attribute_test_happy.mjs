import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_data } from "./qa_attribute_test_data.mjs";
import { text_combine } from "./text_combine.mjs";
export function qa_attribute_test_happy() {
  ("the attribute an app puts on the ONE control that carries somebody forward - the right answer, the next button, the way on");
  ("A happy-path walk needs no knowledge of the app it is walking. It looks for this, clicks it, and looks again, so a screen nobody has taught it about is still walked correctly as long as the screen says which of its controls is the way on. Every app that marks its controls this way can be walked by the same walker.");
  ("The app is the one that knows. Which choice is right is decided where the choice is built, and a test that worked it out separately would be a second answer key that can disagree with the first - so the marking rides along with the deciding rather than being kept beside it.");
  ("It is the test data attribute with a word after it, rather than a name of its own, because it IS that attribute in a particular role - and spelling it here from the one that is already spelled elsewhere means the two can never come apart.");
  arguments_assert(arguments, 0);
  let base = qa_attribute_test_data();
  let r = text_combine(base, "-happy");
  return r;
}

import { assert_message } from "./assert_message.mjs";
export function assert(b) {
  ("The caller reached for the twin that carries no message, so there is nothing");
  ("here to say about which check this was - only that one did not hold. The line");
  ("is named in the stack, and a caller with more to tell should reach for");
  ("assert_message instead of this.");
  assert_message(
    b,
    "something this code counted on turned out not to be true - the line named in the stack is the check that did not hold",
  );
}

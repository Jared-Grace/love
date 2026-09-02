import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function git_message_word_shorthand_cases() {
  "Words a commit message could begin with, and whether each one is shorthand.";
  "These are what makes the hook's gate say more than that a file is where it was put. A copy can sit in place, byte for byte the original, and still decide nothing at all - the door it asks could have been renamed out from under it, or come to answer everything the same way. A case that a real key is refused and a real command name is not is the only reading that catches either.";
  "The hand made word is here because it is registered as a key like any other, so the one message the convention asks for where nothing named made the change is the message most likely to be refused by mistake.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      word: "s",
      shorthand: true,
      why: "a registered key standing for a function, and not the name of one",
    },
    {
      word: "ai",
      shorthand: false,
      why: "the hand made word, which the door leaves alone by itself",
    },
    {
      word: fn_name("function_rename"),
      shorthand: false,
      why: "the full name of a live function, which is what a message should carry",
    },
  ];
  return cases;
}

import { arguments_assert } from "./arguments_assert.mjs";
export function reply_cases_no_reply_yet() {
  arguments_assert(arguments, 0);
  ("Messages that get no reply only because nobody has chosen one yet. Nobody has been seen sending them; they were written to show where a rule stops. The day somebody really says one, its reply should be chosen.");
  ("★ THIS IS NOT THE SAME AS A TEST THAT WANTS NO REPLY. A message with something beside the rule's words, such as a death in the family, stays silent on purpose so that a person reads it. These stay silent only for want of a sentence, so they are not approved as correct, and they are kept here rather than on a change, because a made-up case goes when its change goes in and this list has to outlast it.");
  let messages = [
    "I am from a poor family",
    "my children are hungry",
    "I am from a poor family, please help me",
  ];
  return messages;
}

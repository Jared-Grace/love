import { arguments_assert } from "./arguments_assert.mjs";
export function reply_cases_no_reply_yet() {
  arguments_assert(arguments, 0);
  ("Messages that get no reply only because nobody has chosen one yet. Nobody has been seen sending them; they were written to show where a rule stops. The day somebody really says one, its reply should be chosen.");
  ("★ A TEST WITH NO REPLY HAS NOTHING TO REVIEW, SO IT COMES HERE AND NOT ONTO A CARD. No words go out, so there is nothing for a person to judge until a reply exists. That holds for a message that should reach a person, such as a death in the family, as much as for one nobody has got to yet: both reach a person today, and either may be given a reply later.");
  ("They are kept here rather than on a change because a made-up case goes when its change goes in, and this list has to outlast it. A gate fails if a rule starts answering one, so going unreviewed does not mean going unwatched.");
  let messages = [
    "I am from a poor family",
    "my children are hungry",
    "I am from a poor family, please help me",
    "I am from a poor family, please help me, my wife died, my children are hungry",
    "I am from a poor family, please help me, my children are hungry and we are in Kenya",
    "I am from the hospital, my wife died, I need prayer, I am in Kenya",
    "am from Nairobi Kenya",
    "am from in Kenya",
    "am from Nairobi",
    "am from Zzyzxville in Kenya",
  ];
  return messages;
}

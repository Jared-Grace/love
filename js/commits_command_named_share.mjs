import { git_message_hand_made } from "./git_message_hand_made.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { commits_ai_js_numstat } from "./commits_ai_js_numstat.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
export async function commits_command_named_share(count_given) {
  "How much of the repo was built by named commands rather than by hand, which is the one measurement of whether the whole editing vocabulary is being used at all. Its neighbour asks which shape of hand edit dominates; this one asks the question before that, whether hand editing dominates.";
  "A commit carries the command that made it as its message, so the reading needs nothing but the messages: one named after a command was made by that command, and a bare one says nothing named could do it.";
  "Read the answer as a floor and never as a rate. A commit aimed at one command's files loses them to any peer sweeping the whole tree first, and the work then lands under a bare message with somebody else's changes - so real use of the vocabulary is always at least this and may be more. The same reading also flatters itself in the other direction: a sweep that commits every step of its own run puts dozens of commands in the log from a single decision to run one, which is why the commands are reported one by one and not only as a total.";
  let commits = await commits_ai_js_numstat(count_given);
  let commands = {};
  let commanded = 0;
  let hand = 0;
  for (let commit of commits) {
    let subject = property_get(commit, "subject");
    let bare = equal(subject, git_message_hand_made());
    if (bare) {
      hand = hand + 1;
      continue;
    }
    commanded = commanded + 1;
    let words = text_split(subject, " ");
    let word = list_first(words);
    property_count_add(commands, word, 1);
  }
  let total = list_size(commits);
  let share = divide(commanded, total);
  let r = {
    window: count_given,
    commits: total,
    hand_made: hand,
    command_named: commanded,
    command_named_share: share,
    commands,
  };
  return r;
}

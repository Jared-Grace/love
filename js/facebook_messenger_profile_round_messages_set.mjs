import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { facebook_messenger_profiles_file } from "./facebook_messenger_profiles_file.mjs";
import { file_json_transform_initialize_default } from "./file_json_transform_initialize_default.mjs";
export async function facebook_messenger_profile_round_messages_set(
  thread_id,
  messages,
) {
  "$plain thread_id";
  "$plain messages";
  "Keeps, with the ids of messenger conversation number thread_id in the private profiles file, the messages that came after your last one - the messages a reply is made from. Each reply has its own round, so every round answered stays for later.";
  "★ KEPT, NEVER REPLACED, ONCE ANSWERED: a later reply may need more than the newest messages to be right, so the rounds already answered are history and are never written over.";
  "★ THE ROUND STILL WAITING IS REPLACED: read again before any reply is sent, the messages after yours are the same messages plus any written since, so the waiting round takes the new reading rather than counting them twice.";
  "Nothing is kept when there is nothing after your last message, because a round with no messages answers nothing.";
  let file = facebook_messenger_profiles_file();
  let read_at = new Date().toISOString();
  function lambda(data) {
    if (equal(messages.length, 0)) {
      return;
    }
    let kept = data[thread_id] || {};
    let rounds = kept.rounds || [];
    let last = rounds[subtract(rounds.length, 1)];
    if (last && not(last.sent_at)) {
      last.read_at = read_at;
      last.messages = messages;
    } else {
      rounds.push({
        read_at,
        messages,
      });
    }
    data[thread_id] = {
      ...kept,
      rounds,
    };
  }
  await file_json_transform_initialize_default(file, lambda);
  let r = {
    thread_id,
    count: messages.length,
    file,
  };
  return r;
}

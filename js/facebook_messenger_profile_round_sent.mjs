import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { facebook_messenger_profiles_file } from "./facebook_messenger_profiles_file.mjs";
import { file_json_transform_initialize_default } from "./file_json_transform_initialize_default.mjs";
export async function facebook_messenger_profile_round_sent(
  thread_id,
  reply,
  sent_at,
) {
  "$plain thread_id";
  "$plain reply";
  "$plain sent_at";
  "Keeps, on the round still waiting in messenger conversation number thread_id, the reply that answered it and when it was sent. From then on that round is history and a new one starts with their next message.";
  "When no round is waiting the reply is still kept, as a round of its own with no messages, so nothing sent goes unrecorded.";
  let file = facebook_messenger_profiles_file();
  function lambda(data) {
    let kept = data[thread_id] || {};
    let rounds = kept.rounds || [];
    let last = rounds[subtract(rounds.length, 1)];
    if (not(last) || last.sent_at) {
      last = {
        messages: [],
      };
      rounds.push(last);
    }
    last.reply = reply;
    last.sent_at = sent_at;
    data[thread_id] = {
      ...kept,
      rounds,
    };
  }
  await file_json_transform_initialize_default(file, lambda);
  let r = {
    thread_id,
    sent_at,
    file,
  };
  return r;
}

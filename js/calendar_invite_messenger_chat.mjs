import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { facebook_messenger_profiles_file } from "./facebook_messenger_profiles_file.mjs";
import { calendar_db_remote } from "./calendar_db_remote.mjs";
import { calendar_db_invite } from "./calendar_db_invite.mjs";
import { calendar_db_session_create } from "./calendar_db_session_create.mjs";
import { file_json_transform_initialize_default } from "./file_json_transform_initialize_default.mjs";
export async function calendar_invite_messenger_chat(thread_id) {
  "$plain thread_id";
  arguments_assert(arguments, 1);
  ("Makes a booking link for the person in Messenger conversation number thread_id, already proven on Messenger with the Facebook profile the reply tool read off that conversation, and keeps it in the conversation's private file as calendar_link. Answers {ok, reason, thread_id, made} - never the link or the name, so nothing about the person reaches a log.");
  ('★ NOTHING IS TYPED (human, 2026-11-21: "automation is safer" and "automation opens the conversation, then opens the profile link"). The profile is the one Facebook\'s own page links the name at the top of the conversation to, read by ',
    fn_name("facebook_messenger_waiting_next"),
    " and kept by ",
    fn_name("facebook_messenger_profile_set"),
    ". A host typing a number or a link could type it wrong and the link would then prove the wrong person.");
  ("★ ONE LINK PER CONVERSATION: a link already kept is answered again, made false, rather than a second guest being written for the same person.");
  ("The name is the sender of their messages as the conversation names them. The host is the one host with a Messenger name saved, since only a host taking Messenger can be booked on it; any other count stops here rather than guessing whose link this is.");
  let since_file = messenger_since_mine_file(thread_id);
  let since = (await file_exists(since_file))
    ? await file_read_json(since_file)
    : null;
  function answered(ok, reason, made) {
    let r = {
      ok,
      reason,
      thread_id,
      made,
    };
    return r;
  }
  if (equal(since, null)) {
    let r2 = answered(false, "no_conversation_file", false);
    return r2;
  }
  let profiles_file = facebook_messenger_profiles_file();
  let profiles = (await file_exists(profiles_file))
    ? await file_read_json(profiles_file)
    : {};
  let kept = profiles[thread_id] || {};
  if (
    equal(typeof kept.calendar_link, "string") &&
    not_equal(kept.calendar_link, "")
  ) {
    let r3 = answered(true, null, false);
    return r3;
  }
  let profile = kept.profile || "";
  if (equal(profile, "")) {
    let r4 = answered(false, "no_profile", false);
    return r4;
  }
  let messages = since.messages || [];
  function lambda(m) {
    let r5 = m.from && not_equal(m.from, "You");
    return r5;
  }
  let theirs = messages.find(lambda);
  let name = theirs ? theirs.from : "";
  let db = await calendar_db_remote();
  let hosts = await db
    .prepare("SELECT uid FROM hosts WHERE messenger <> ?1")
    .bind("")
    .all();
  let rows = hosts.results;
  if (not_equal(rows.length, 1)) {
    let r6 = answered(false, "hosts_" + rows.length, false);
    return r6;
  }
  let host_uid = rows[0].uid;
  let now_iso = new Date().toISOString();
  let guest_uid = crypto.randomUUID();
  let invited = await calendar_db_invite(
    db,
    host_uid,
    guest_uid,
    name,
    "messenger",
    profile,
    now_iso,
  );
  if (not(invited.ok)) {
    let r7 = answered(false, invited.reason, false);
    return r7;
  }
  let key = await calendar_db_session_create(db, guest_uid, now_iso);
  let link =
    "https://christarose.org/calendar#host=" + invited.slug + ",key=" + key;
  ("Kept with the person rather than in the conversation's file, because the next reading of the conversation replaces that file, and a link lost there would have a second guest written next time.");
  function link_keep(data) {
    let person = data[thread_id] || {};
    data[thread_id] = {
      ...person,
      calendar_link: link,
      calendar_link_at: now_iso,
    };
  }
  await file_json_transform_initialize_default(profiles_file, link_keep);
  let r8 = answered(true, null, true);
  return r8;
}

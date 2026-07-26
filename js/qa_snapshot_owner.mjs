import { process_session_or_null } from "./process_session_or_null.mjs";
export function qa_snapshot_owner() {
  "Whose frozen copy this is";
  "Several of us ask the gate its questions in this one directory, and a copy is written from scratch every time it is asked for - so one shared copy means one of us rewriting the files another is in the middle of reading, which is the very thing freezing them was for";
  "A conversation keeps its name for as long as it lasts, so the copies stay few rather than one per command";
  let session = process_session_or_null();
  if (session) {
    return session;
  }
  let r = "keyboard";
  return r;
}

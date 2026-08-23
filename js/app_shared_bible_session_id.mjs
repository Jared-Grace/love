import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_session_id_key } from "./app_shared_bible_session_id_key.mjs";
import { storage_session_initialize_context } from "./storage_session_initialize_context.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
export function app_shared_bible_session_id(context) {
  "What this tab calls itself, minted the first time it is asked for and the same answer for as long as the tab is open.";
  "It is what lets the remembered readings hold one line per tab rather than one line per verse somebody stepped through: a tab writes its reading over its own line and over nobody else's.";
  "Kept where a tab keeps things, so a second tab reading a second passage mints its own. Closing a tab ends its identifier, which is right - a closed tab will never write that line again, and the line it left is exactly what somebody is coming back for.";
  arguments_assert(arguments, 1);
  let key = app_shared_bible_session_id_key();
  let minted = uuid_browser();
  let session = storage_session_initialize_context(context, key, minted);
  return session;
}

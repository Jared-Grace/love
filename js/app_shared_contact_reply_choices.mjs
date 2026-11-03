import { fn_name } from "./fn_name.mjs";
export async function app_shared_contact_reply_choices() {
  "The reply rules a contact panel answers with: none, until the message app's rules are approved for people to read.";
  "★ NONE, BECAUSE AN ANSWERED MESSAGE NEVER REACHES THE INBOX. A rule's answer is shown as though the developer wrote it, and the message it answers is not sent on. So rules no one has approved would speak for the developer and hide the message from them, in every app with a contact panel.";
  ("★ THE PANEL IS LINKED TO THE RULES HERE AND NOWHERE ELSE. Both things the panel does with rules - drawing the thread and deciding whether to send - ask this function. So turning them on is one change: answer with ",
    fn_name("app_shared_message_reply_choices_fetch_or_empty"),
    ", which still loads them only when asked. It is not called from here now because being reachable at all is what puts the rules in an app's build.");
  let none = [];
  return none;
}

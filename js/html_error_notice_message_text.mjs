export function html_error_notice_message_text() {
  "the one line a person is shown when the app could not start. it says what happened in their words, takes the fault off them, and asks nothing of them that the button beside it does not already offer. shared by every app, so the wording cannot drift between them.";
  "it deliberately carries no error text, no file and no line: those help whoever is fixing it and mean nothing to whoever is waiting, and the dev banner already shows them on a dev path.";
  let r = "Sorry — this didn't finish loading.";
  return r;
}

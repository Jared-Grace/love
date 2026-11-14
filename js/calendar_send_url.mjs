import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function calendar_send_url(via, whatsapp, messenger, code) {
  arguments_assert(arguments, 4);
  ("The link a guest presses to send their code to the host: via is whatsapp or messenger; whatsapp is the host's number, messenger the host's Messenger name (the part after m.me/). The code is typed into the message, so the guest only presses send.");
  ("Messenger keeps the typed message only on some accounts - Meta promises it for Pages - so the guest page also shows the code and a button that copies it.");
  let typed = "?text=" + encodeURIComponent(code);
  if (equal(via, "messenger")) {
    let r = "https://m.me/" + messenger + typed;
    return r;
  }
  let digits = String(whatsapp).replace(/[^0-9]/g, "");
  let r2 = "https://wa.me/" + digits + typed;
  return r2;
}

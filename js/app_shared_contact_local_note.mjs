import { host_local_network_is } from "./host_local_network_is.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_shared_contact_local_note(parent) {
  "Says on the page, where the box is, that writing here reaches nobody, on a page served from this network. Shown nowhere on the deployed site.";
  "It is the other half of the send refusing to go out from here. A send that quietly does nothing looks exactly like a send that worked, and the person testing would then believe a message had reached the inbox.";
  let local = host_local_network_is();
  if (local) {
    html_div_text(
      parent,
      "Local test page: this message is not sent to anyone.",
    );
  }
}

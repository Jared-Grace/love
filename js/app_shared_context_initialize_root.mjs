import { html_div } from "./html_div.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
export async function app_shared_context_initialize_root(root, fn) {
  "give the app its own content div and put ONE 'Contact the developer' button in the body beneath it — so every app gets the button from one place (DRY), never per app. It survives screen changes because screens clear the content div (html_clear_context), not the body.";
  let content = html_div(root);
  let context = {
    root: content,
  };
  await fn(context);
  app_shared_contact_button(root, fn);
}

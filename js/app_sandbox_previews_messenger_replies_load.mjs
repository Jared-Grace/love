export async function app_sandbox_previews_messenger_replies_load() {
  let m = await import("./app_messenger_replies_proposed_preview.mjs");
  let r = m.app_messenger_replies_proposed_preview;
  return r;
}

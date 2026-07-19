import { html_code_element } from "./html_code_element.mjs";
export function html_code_service_worker_register() {
  let attributes_none = {};
  let code =
    "if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/service-worker.js'); }";
  let r = html_code_element("script", attributes_none, code);
  return r;
}

import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { https_prefix } from "../../../love/public/src/https_prefix.mjs";
export function text_starts_with_https_prefix(url) {
  let prefix = https_prefix();
  let swHttps = text_starts_with(url, prefix);
  return swHttps;
}

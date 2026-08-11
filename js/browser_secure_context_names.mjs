import { arguments_assert } from "./arguments_assert.mjs";
export function browser_secure_context_names() {
  "The things a browser hands a page ONLY over https, or on localhost - written as the object and the word after the dot, because it is the pairing that is restricted and not either word on its own.";
  "A page reached any other way is not given them at all. Not a refusal, not an empty answer: the word after the dot is simply absent, so the call throws where it stands. That is the whole of what makes them worth a list - every other browser feature this repo touches is either there or fails in a way somebody can read.";
  "This is the browser's own vocabulary rather than this repo's, so nothing here may rename them, and a word appearing in this list is a claim about what a browser does rather than about what this repo wants.";
  arguments_assert(arguments, 0);
  let names = [
    "crypto.randomUUID",
    "crypto.subtle",
    "navigator.bluetooth",
    "navigator.clipboard",
    "navigator.credentials",
    "navigator.geolocation",
    "navigator.hid",
    "navigator.locks",
    "navigator.mediaDevices",
    "navigator.serial",
    "navigator.serviceWorker",
    "navigator.share",
    "navigator.storage",
    "navigator.usb",
    "navigator.wakeLock",
  ];
  return names;
}

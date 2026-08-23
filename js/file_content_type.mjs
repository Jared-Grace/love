import { not } from "./not.mjs";
import { path_extension } from "./path_extension.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function file_content_type(path) {
  "$plain path";
  "What a file is, said in the words a browser understands, worked out from the end of its name.";
  "STORAGE DOES NOT WORK THIS OUT FOR ITSELF. A picture written without being told what it is comes back described as a run of bytes, and a browser shown that offers to save it rather than drawing it - so the file arrives whole, and still nothing appears on the page.";
  let extension = path_extension(path);
  let lowered = text_lower_to(extension);
  let types = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".json": "application/json",
    ".txt": "text/plain",
    ".css": "text/css",
    ".html": "text/html",
    ".js": "text/javascript",
    ".mjs": "text/javascript",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".woff2": "font/woff2",
  };
  let type = types[lowered];
  let missing = not(type);
  if (missing) {
    "A name this does not recognise is described as plain bytes, which is what a browser assumes anyway - so an unknown file is no worse off than it would have been, and a known one is better off.";
    let fallback = "application/octet-stream";
    return fallback;
  }
  return type;
}

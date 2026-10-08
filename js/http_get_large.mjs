import { http_generic } from "./http_generic.mjs";
export async function http_get_large(url) {
  "Fetches a large file: the same fetch as any other, with three minutes before it gives up rather than eight seconds, and asked twice rather than three times.";
  "Eight seconds is right for a small answer and wrong for a big one. A whole bible in one file is two megabytes, which took thirty seconds on the connection it was measured on, so the eight-second ceiling cut it off every time and the save fell back to asking for every chapter on its own - more than a thousand requests, each one holding the loading screen up.";
  "Twice rather than three times, because each try can now take minutes, and a reader should not wait nine of them before being given the slower way that does work.";
  let options = {
    method: "GET",
    milliseconds_ceiling: 180000,
    tries: 2,
  };
  let buffer = await http_generic(url, options);
  return buffer;
}

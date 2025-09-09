import { log } from "./log.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { browser_is } from "./browser_is.mjs";
import { error } from "./error.mjs";
import { not } from "./not.mjs";
export async function http(url) {
  let b = browser_is();
  if (b) {
    const response = await fetch(url);
    if (not(response.ok)) {
      error("Failed to fetch file");
    }
    const text = await response.text();
    return text;
  }
  let h = null;
  let sw = string_starts_with(url, "https://");
  if (sw) {
    h = await import("https");
  }
  function lambda2(res) {
    let data = "";
    function lambda(chunk) {
      data += chunk;
    }
    res.on("data", lambda);
    function lambda4() {
      console.log("Result as string:");
      console.log(data);
    }
    res.on("end", lambda4);
  }
  function lambda3(err) {
    console.error("Error: ", err.message);
  }
  h.get(url, lambda2).on("error", lambda3);
}

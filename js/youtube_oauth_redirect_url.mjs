import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_redirect_port } from "./youtube_oauth_redirect_port.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function youtube_oauth_redirect_url() {
  "Where Google sends the browser once a person has said yes: back to this machine, on the door kept for it.";
  "The same words have to be spelled twice - once in the address the person opens, and once when the code they came back with is traded for a token - and Google refuses the trade if the two differ by so much as a slash. So they are said once here and read twice, which is the only way the two can never disagree.";
  arguments_assert(arguments, 0);
  let port = youtube_oauth_redirect_port();
  let url = text_combine_multiple(["http://localhost:", port]);
  return url;
}

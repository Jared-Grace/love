import { http_post_json_minutes } from "./http_post_json_minutes.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
export async function app_shared_api_named_minutes(f_name, args) {
  "$plain f_name";
  "$plain args";
  "Asks the machine serving the page to run a named function whose work takes minutes, and answers whatever it answered.";
  "THE CALLER SAYS HOW LONG ITS OWN WORK TAKES, because nothing else can. From here every request looks the same - a name and some arguments - and the difference between reading a file and rendering a video is not in the shape of the question but in what is on the other end of it.";
  "It is a different door rather than a further argument on the one door, so that the ordinary way of asking stays two things long and every page that uses it goes on saying nothing about ceilings. There are eleven callers of the ordinary one and one of this.";
  let a = {
    f_name,
    args,
    fn_http: http_post_json_minutes,
  };
  let result = await app_shared_api(a);
  return result;
}

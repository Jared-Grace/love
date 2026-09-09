import { less_than } from "./less_than.mjs";
export function domain_porkbun_cookies_update(session, response) {
  "Writes whatever cookies an answer set into the running conversation, including the security word Porkbun wants echoed back on the next question.";
  "PORKBUN CHANGES THE SECURITY WORD ON EVERY POST. It is only the csrf_pb cookie, and the page reads it back out of the jar each time; hold on to the one read before a post and every following question is refused with a security error.";
  let lines = response.headers.getSetCookie();
  for (let line of lines) {
    let pair = line.split(";")[0];
    let index = pair.indexOf("=");
    if (less_than(index, 1)) {
      continue;
    }
    let name = pair.slice(0, index).trim();
    let value = pair.slice(index + 1).trim();
    session.cookies[name] = value;
  }
  let word = session.cookies.csrf_pb;
  if (word) {
    session.csrf = word;
  }
}

import { object_property_names } from "./object_property_names.mjs";
export function domain_porkbun_cookie_header(session) {
  "The cookies a running conversation holds, written the way a request hands them back.";
  let pairs = [];
  for (let name of object_property_names(session.cookies)) {
    pairs.push(name + "=" + session.cookies[name]);
  }
  let header = pairs.join("; ");
  return header;
}

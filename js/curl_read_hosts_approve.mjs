import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { curl_read_hosts } from "./curl_read_hosts.mjs";
import { python_mirrors } from "./python_mirrors.mjs";
import { python_mirror_write } from "./python_mirror_write.mjs";
export async function curl_read_hosts_approve(hosts) {
  "$plain hosts";
  arguments_assert(arguments, 1);
  ("Lets the guard trust the websites named here, so a fetch from them stops asking. Each host is written in the command, so the person approving the prompt reads exactly what is being added.");
  ("This must stay ungranted: a grant would turn the approval into nothing. Any new host in the source that is not named here is still refused.");
  let names = text_split_comma(hosts);
  let listed = curl_read_hosts();
  function lambda(name) {
    let b = listed.includes(name);
    let n = not(b);
    return n;
  }
  let unknown = names.filter(lambda);
  if (greater_than(unknown.length, 0)) {
    throw new Error(
      text_combine_multiple([
        "not in ",
        fn_name("curl_read_hosts"),
        ", so there is nothing to approve: ",
      ]) + unknown.join(","),
    );
  }
  function lambda2(m) {
    let eq = equal(m.source, curl_read_hosts);
    return eq;
  }
  let mirror = python_mirrors().find(lambda2);
  let r = await python_mirror_write(mirror, names);
  return r;
}

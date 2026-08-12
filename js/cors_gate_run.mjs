import { fn_name } from "./fn_name.mjs";
import { list_includes_all_assert_json } from "./list_includes_all_assert_json.mjs";
import { cors_bucket_origins } from "./cors_bucket_origins.mjs";
import { cors_origins } from "./cors_origins.mjs";
export async function cors_gate_run() {
  "Every address this repo's pages are opened at is one the file store will let them read from.";
  "This is the whole of a bug that cost an afternoon and was invisible to everything else here. A page opened at an address the store does not know about downloads its file, gets a plain success back, and is then forbidden by the browser to look at what it downloaded - so nothing is thrown, nothing is missing, and the page simply stays empty. Every gate that reads code would have called that repo sound, because it was.";
  "It asks the store rather than the file that is written for uploading, because the file only says what somebody meant to send. Whether it was ever sent is a different claim, and it is the one that decides whether a page works.";
  "Only the addresses we work out are required to be there. The store may know others - a machine somebody else develops on - and those are none of this repo's business to remove.";
  let wanted = cors_origins();
  let live = await cors_bucket_origins();
  let repair = fn_name("cors_upload");
  list_includes_all_assert_json(wanted, live, repair);
  let r = {
    wanted,
    live,
  };
  return r;
}

import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
export async function cloudflare_pages_firebase_compare() {
  arguments_assert(arguments, 0);
  ("Asks both public addresses for every file the folder that goes live holds, and says which answers differ from each other or from that folder. It only reads.");
  ("A send can land on one address and fail on the other, and each one then looks fine when opened alone, so the only way to see the difference is to ask both for the same files and compare what came back rather than the status alone.");
  let fs = await import("fs");
  let crypto = await import("crypto");
  let folder = folder_public_absolute();
  let firebase = firebase_project_url_jg();
  let cloudflare = cloudflare_site_url();
  let entries = fs.readdirSync(folder, {
    recursive: true,
    withFileTypes: true,
  });
  let paths = [];
  for (let entry of entries) {
    let relative = entry.parentPath.slice(folder.length + 1);
    let path = equal(relative, "") ? entry.name : relative + "/" + entry.name;
    let b2 = path.startsWith("dev/");
    let sent = not(b2) && not(entry.name.startsWith("."));
    if (entry.isFile() && sent) {
      paths.push(path);
    }
  }
  function digest(bytes) {
    let hash = crypto.createHash("md5").update(bytes).digest("hex");
    return hash;
  }
  async function ask(site, path) {
    try {
      let response = await fetch(site + "/" + path, {
        signal: AbortSignal.timeout(60000),
      });
      let v = await response.arrayBuffer();
      let bytes = Buffer.from(v);
      let answer = {
        status: response.status,
        hash: digest(bytes),
      };
      return answer;
    } catch (e) {
      let failed = {
        status: null,
        hash: null,
        error: e.message,
      };
      return failed;
    }
  }
  async function compare(path) {
    let v2 = fs.readFileSync(folder + "/" + path);
    let disk = digest(v2);
    let v3 = ask(firebase, path);
    let v4 = ask(cloudflare, path);
    let [a, b] = await Promise.all([v3, v4]);
    let row = {
      path,
      firebase_status: a.status,
      cloudflare_status: b.status,
      firebase_matches_folder: equal(a.hash, disk),
      cloudflare_matches_folder: equal(b.hash, disk),
      both_same: equal(a.hash, b.hash),
    };
    return row;
  }
  let rows = [];
  let size = 8;
  for (let start = 0; less_than(start, paths.length); start += size) {
    let part = paths.slice(start, start + size);
    let v5 = part.map(compare);
    let answers = await Promise.all(v5);
    rows.push(...answers);
  }
  function differs(row) {
    let ok =
      equal(row.firebase_status, 200) &&
      equal(row.cloudflare_status, 200) &&
      row.firebase_matches_folder &&
      row.cloudflare_matches_folder;
    let n = not(ok);
    return n;
  }
  let different = rows.filter(differs);
  async function probe(site, path) {
    let response = await fetch(site + "/" + path, {
      redirect: "manual",
      signal: AbortSignal.timeout(60000),
    });
    let answer = {
      status: response.status,
      location: response.headers.get("location"),
      cache_control: response.headers.get("cache-control"),
    };
    return answer;
  }
  let probes = {};
  for (let path of [
    "privacy_policy",
    "alarms.apk",
    "no_such_page",
    "bible",
    "index.js",
  ]) {
    probes[path] = {
      firebase: await probe(firebase, path),
      cloudflare: await probe(cloudflare, path),
    };
  }
  let r = {
    files: rows.length,
    different_count: different.length,
    different,
    probes,
  };
  return r;
}

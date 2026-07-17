import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { examples_page_html } from "../js/examples_page_html.mjs";
import { file_overwrite } from "../js/file_overwrite.mjs";
import { folder_public_join } from "../js/folder_public_join.mjs";

// Reads the data/examples corpus and writes a static reading page.
// The corpus lives in .mjs files (node-only), so the page is generated
// build-time — no client-side fetch. Pure render lives in js/example_*_html.
let here = dirname(fileURLToPath(import.meta.url));
let root = dirname(here);
let dir = join(root, "data", "examples");
let names = readdirSync(dir).filter((n) => n.endsWith(".mjs"));
let examples = [];
for (let name of names) {
  let mod = await import(join(dir, name));
  examples.push(mod.example);
}
let html = examples_page_html(examples);
let out = folder_public_join("examples.html");
await file_overwrite(out, html);
console.log("wrote " + out + " (" + examples.length + " examples)");

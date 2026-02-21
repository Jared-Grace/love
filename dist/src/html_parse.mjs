import { import_install } from "../../../love/public/src/import_install.mjs";
export async function html_parse(contents) {
  let cheerio = await import_install("cheerio");
  let d = cheerio.load(contents);
  let root = d("html");
  let result = {
    d,
    root,
  };
  return result;
}

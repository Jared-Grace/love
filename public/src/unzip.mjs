import { import_install } from "./import_install.mjs";
import { log } from "./log.mjs";
export async function unzip(file_path, buffer) {
  await import_install(name);
  const zip = new AdmZip(buffer);
  zip.extractAllTo(file_path, true);
  log(`Extracted zip to folder: ${file_path}`);
}

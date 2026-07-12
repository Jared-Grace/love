import { import_install } from "./import_install.mjs";
export async function unzip(file_path_from, file_path_to) {
  let AdmZip = (await import_install("adm-zip")).default;
  let zip = new AdmZip(file_path_from);
  zip.extractAllTo(file_path_to, true);
}

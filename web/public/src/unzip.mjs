import { import_install } from "./import_install.mjs";
export async function unzip(file_path, buffer) {
  const AdmZip = (await import_install("adm-zip")).default;
  const zip = new AdmZip(buffer);
  zip.extractAllTo(file_path, true);
}

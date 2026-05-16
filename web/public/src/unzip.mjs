import { import_install } from "../../../love/public/src/import_install.mjs";
export async function unzip(file_path_to, file_path_from) {
  const AdmZip = (await import_install("adm-zip")).default;
  const zip = new AdmZip(file_path_from);
  zip.extractAllTo(file_path_to, true);
}

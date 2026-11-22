import { arguments_assert } from "./arguments_assert.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { machine_name_local } from "./machine_name_local.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
export async function server_https_certificate_ensure() {
  "The key and certificate the https half of this repo's own web server answers with, made on this machine the first time they are asked for and read back every time after.";
  "SIGNED BY NOBODY BUT THIS MACHINE, so a phone warns about it once and has to be told to go on. That is the price of needing nothing installed anywhere; a browser still counts the page as secure once it has been let through, which is all the camera asks.";
  "It names both the name a phone reaches this machine by and localhost, because a browser checks the address it typed against the names written inside, and refuses a certificate whose names do not include it.";
  "Kept under the ignored folder: a key is a secret even when it guards nothing more than a page on a home network, and it is this machine's own, so it must never be committed for another machine to answer with.";
  arguments_assert(arguments, 0);
  ("MARKED AS A SITE'S OWN CERTIFICATE, NOT AN AUTHORITY. openssl marks a self-made one as an authority unless told otherwise, and Firefox refuses an authority's certificate when a site answers with it - with no way to go on, so the warning never even offers the button. The first one made here was like that; the names below are new so that one is never read again.");
  ("Kept to 825 days, the longest a browser accepts for a site's certificate.");
  let key_path = folder_gitignore_join("https/site_key.pem");
  let cert_path = folder_gitignore_join("https/site_cert.pem");
  let have = await file_exists(cert_path);
  if (not(have)) {
    await file_parent_exists_ensure(cert_path);
    let host = machine_name_local();
    let command = text_combine_multiple([
      "openssl req -x509 -newkey rsa:2048 -nodes -days 825 -addext basicConstraints=critical,CA:FALSE -addext keyUsage=critical,digitalSignature,keyEncipherment -addext extendedKeyUsage=serverAuth -keyout ",
      key_path,
      " -out ",
      cert_path,
      " -subj /CN=",
      host,
      " -addext subjectAltName=DNS:",
      host,
      ",DNS:localhost",
    ]);
    await command_line(command);
  }
  let key = await file_read_buffer(key_path);
  let cert = await file_read_buffer(cert_path);
  let r = {
    key,
    cert,
  };
  return r;
}

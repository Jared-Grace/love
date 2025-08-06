export async function file_overwrite(file_path,contents) {
   let fs= await import('fs')
   await fs.promises.writeFile(file_path,contents,'utf-8')
}
export async function file_copy(file_path_old,file_path_new) {
   let fs= await import('fs')
   await fs.promises.copyFile(file_path_old,file_path_new)
   console.log('file_copy')
}
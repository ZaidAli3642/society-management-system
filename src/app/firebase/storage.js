import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './firebaseConfig'

export const uploadImage = async ({ collectionName, file }) => {
  const storageRef = ref(storage, `${collectionName}/` + file.name)

  try {
    const snapshot = await uploadBytes(storageRef, file)

    const downloadURL = await getDownloadURL(snapshot.ref)

    return downloadURL
  } catch (error) {
    console.log('Upload failed', error)
    throw error
  }
}

export const uploadImages = async (collectionName, files) => {
  const filePromises = Array.from(files, file => uploadImage(collectionName, file))

  const fileRes = await Promise.all(filePromises)
  return fileRes // list of url like ["https://..", ...]
}

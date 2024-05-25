import { call, put, takeEvery } from 'redux-saga/effects'
import { society } from '@/app/apiMethod/society'
import {
  addSocietyFailed,
  addSocietySuccess,
  getSocieties,
  getSocietiesFailed,
  getSocietiesSuccess,
  insertSociety,
  insertSocietyFailed,
  insertSocietySuccess,
  modifySociety,
  modifySocietyFailed,
  modifySocietySuccess,
  removeSociety,
  removeSocietyFailed,
  removeSocietySuccess,
  setSocietyValue,
} from '../reducers/society'
import toast from 'react-hot-toast'
import { uploadImage } from '@/app/firebase/storage'
import { firebaseStorage } from '@/app/apiMethod/storage'

function* fetchSocieties(action) {
  try {
    const response = yield call(society().getSocieties)

    yield put(getSocietiesSuccess({ societies: response.data.societies }))
  } catch (error) {
    yield put(getSocietiesFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* addSociety(action) {
  try {
    const { data, setInputFields } = action.payload

    const url = yield call(firebaseStorage().uploadImage, { collectionName: 'society', file: data.image })

    data.image = url

    const response = yield call(society().addSociety, data)

    console.log('error found in try')
    yield put(getSocieties())

    yield put(insertSocietySuccess({}))

    yield put(setSocietyValue({ key: 'isAddSociety', value: false }))

    setInputFields && setInputFields({})

    toast.success('Society added')
  } catch (error) {
    yield put(insertSocietyFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* editSociety(action) {
  try {
    const { data, setInputFields } = action.payload

    const response = yield call(society().editSociety, data)

    yield put(getSocieties())

    yield put(modifySocietySuccess({}))

    yield put(setSocietyValue({ key: 'isAddSociety', value: false }))
    yield put(setSocietyValue({ key: 'isEditSociety', value: false }))
    setInputFields && setInputFields({})
    toast.success('Society Edited')
  } catch (error) {
    yield put(modifySocietyFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* deleteSociety(action) {
  try {
    const { data, setInputFields } = action.payload

    yield call(society().deleteSociety, data)

    yield put(getSocieties())

    yield put(removeSocietySuccess({}))

    yield put(setSocietyValue({ key: 'isDeleteSociety', value: false }))
    setInputFields && setInputFields({})
    toast.success('Society Deleted')
  } catch (error) {
    yield put(removeSocietyFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

export function* societySaga() {
  yield takeEvery(getSocieties.type, fetchSocieties)
  yield takeEvery(insertSociety.type, addSociety)
  yield takeEvery(modifySociety.type, editSociety)
  yield takeEvery(removeSociety.type, deleteSociety)
}

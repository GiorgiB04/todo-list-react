import { takeEvery, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHendler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "coś nie tak!!!!");
  }
}

function* saveTasksInLocalStorageHendler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  console.log("helloooooooo");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler);
  yield takeEvery("*", saveTasksInLocalStorageHendler);
}

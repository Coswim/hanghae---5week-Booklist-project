// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import counter from "../modules/bookSlice";
import todos from "../modules/replySlice";


const store = configureStore({
  reducer: { counter: counter, todos: todos },
});

export default store;

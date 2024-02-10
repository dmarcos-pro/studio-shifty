import { combineReducers } from 'redux';
import { activeTaskReducer } from "./activeTaskReducer";
import { taskReducer } from "./taskReducer";
import { refReducer } from "./refReducer";
import { navReducer } from "./navReducer";
import { servicesReducer } from "./servicesReducer";


const rootReducer = combineReducers({
	activeTaskReducer: activeTaskReducer,
	taskReducer: taskReducer,
	refReducer: refReducer,
	navReducer: navReducer,
	servicesReducer: servicesReducer
});

export default rootReducer;
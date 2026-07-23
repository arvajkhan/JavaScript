import {getStudents} from './api.js';
import {renderStudents} from './ui.js';
(async()=>{const data=await getStudents();renderStudents(data);})();
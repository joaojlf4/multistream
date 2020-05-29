// import nodeConsole from 'console';
import terminal from 'console';

const Console = new terminal.Console(process.stdout, process.stderr);

export default function (state = [], action) {
  switch (action.type) {
    case "UPDATE_STATUS":
      const newArray = [...state, action.status.message] 
      return newArray.filter((item, index) => {
        return newArray.indexOf(item) === index
      })

    case "CLEAR_STATUS": 
      return [];
    case "REMOVE_PREVIEW": 
      return state.filter(item => {
        return item !== 'live!'
      })
    default: 
      return state;
  }
}
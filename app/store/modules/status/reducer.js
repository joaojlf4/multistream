const INITIAL_STATE = [{
  message: "Aguardando conexão do encoder..."
}];

// import nodeConsole from 'console';

export default function (state = [], action) {
  // const Console = new nodeConsole.Console(process.stdout, process.stderr);
  // Console.log(action)
  switch (action.type) {
    case "UPDATE_STATUS": 
      return [...state, action.status].filter((item, index) => {
        const previousItem = state[index - 1];
        if(previousItem) {
          if(previousItem.message === item.message) {
            return;
          }else {
            return item;
          }
        }else {
          return item;
        }
      });
    default: 
      return state;
  }
}
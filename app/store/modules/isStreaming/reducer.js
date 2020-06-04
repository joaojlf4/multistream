export default function (state = false, action) {
  switch (action.type) {
    case "UPDATE_IS_STREAMING":
      return action.isStreaming
  }
  return state;
}
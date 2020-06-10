export default function (state = false, action) {
  switch (action.type) {
    case "UPDATE_IS_PREVENT_VISIBLE":
      return action.isVisible;
  }
  return state;
}
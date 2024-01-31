import { store } from "@widgets/PostList/model/store"
import { Provider } from "react-redux"
import { RouterProvider } from "./RouterProvider"

export const Providers = () => {
  return (
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  )
}

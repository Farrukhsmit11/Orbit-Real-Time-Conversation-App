import { useDispatch, useSelector } from "react-redux"
import Public from "./routes/public/Public"
import LoadingScreen from "./components/loadingScreen/LoadingScreen"
import "./App.css"
import { useEffect } from "react"
import { getProfile } from "./store/features/actions/authActions"
import { TOKEN } from "./utils/constants"
import Protected from "./routes/protected/Protected"

const App = () => {

  const dispatch = useDispatch()

  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (token) {
      dispatch(getProfile())
    }
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  if (isAuthenticated) {
    return <Protected />
  }

  if (!isAuthenticated) {
    return <Public />
  }

  return (
    <div></div>
  )
}

export default App
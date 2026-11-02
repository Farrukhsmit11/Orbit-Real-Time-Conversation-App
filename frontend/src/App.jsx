import { useSelector } from "react-redux"
import Public from "./routes/public/Public"

const App = () => {

  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  if (loading) {
    return <LoadingScreen />
  }

  if (isAuthenticated) {
    return <Dashboard />
  }

  if (!isAuthenticated) {
    return <Public />
  }

  return (
    <div></div>
  )
}

export default App
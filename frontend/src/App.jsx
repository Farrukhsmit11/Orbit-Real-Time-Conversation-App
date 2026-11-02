import useSelector from "react-redux"

const App = () => {

  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div>App</div>
  )
}

export default App
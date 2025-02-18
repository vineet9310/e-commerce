import AuthLayout from "./components/auth/layout"

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path ="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
</div >
  )
}

export default App

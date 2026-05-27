import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className="parent">
      <Card user="Ubaid Raza" Age={18} img="https://plus.unsplash.com/premium_photo-1774271492663-a7d50adbed56?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Ahsan Raza" Age={19} img="https://plus.unsplash.com/premium_photo-1773861007414-869af2ea91b8?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Faizan Raza" Age={23} img="https://images.unsplash.com/photo-1775641487797-ee362ba3b600?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

    </div>
  )
}

export default App
import React from 'react'
import List from './components/List'
import Form from './components/Form'
import Footer from './components/Footer'
import { StoreProvider } from "easy-peasy"
import store from './store'

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <header className="App-header">
          <div className="Content">
            <List />
            <Form />
          </div>
          <Footer />
        </header>
      </div>
    </StoreProvider>
  )
}

export default App
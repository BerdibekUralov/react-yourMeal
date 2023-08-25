import { Cart, Categories, Footer, Header, Products } from "./components"

function App() {
  return (
    <div>
      <header>
        <Header />
        <div className="container">
          <Categories/>
        </div>
      </header>
      <main className="container">
        <div className="d-flex">
          <Cart />
          <Products />
        </div>
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  )
}

export default App

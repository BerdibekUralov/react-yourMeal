import { Cart, Categories, Footer, Header, Products } from "./components"

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container">
        <Categories/>
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

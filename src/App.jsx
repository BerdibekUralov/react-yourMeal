import { Cart, Categories, Footer, Header, Products } from "./components"

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Categories />
        <div className="d-flex">
          <Cart />
          <Products />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

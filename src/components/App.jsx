import Posts from './Posts';
import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
      </main>
      <Posts />
    </>
  )
}

export default App;
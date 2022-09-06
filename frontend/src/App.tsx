import Header from './components/Header/header.index';
import SalesCard from './components/SalesCard/sales-card.index';


function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard></SalesCard>
          </div>
        </section>
      </main>
    </>)
}

export default App

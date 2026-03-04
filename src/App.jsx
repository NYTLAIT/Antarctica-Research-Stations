import './App.css'

import Header from './components/persistant/Header/Header'
import Footer from './components/persistant/Footer/Footer'
import Hero from './components/layout/Hero/Hero'
import Explorer from './components/layout/Explorer/Explorer'

function App() {

    return (
        <div className='App'>
            <Header />
            <Hero />
            <Explorer />
            <Footer />
        </div>
    )
}

export default App

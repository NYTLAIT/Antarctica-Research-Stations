import './App.css'

import Header from './components/persistant/Header/Header'
import Footer from './components/persistant/Footer/Footer'
import Hero from './components/layout/Hero/Hero'
import StationsGrid from './components/layout/StationsGrid/StationsGrid'

function App() {

    return (
        <div className='App'>
            <Header />
            <Hero />
            <StationsGrid />
            <Footer />
        </div>
    )
}

export default App

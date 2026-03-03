import './App.css'

import Header from './components/persistant/Header/Header'
import Footer from './components/persistant/Footer/Footer'
import Hero from './components/layout/Hero/Hero'
import StationsGrid from './components/layout/StationsGrid/StationsGrid'
import SearchFilter from './components/layout/SearchFilter/SearchFilter'

function App() {

    return (
        <div className='App'>
            <Header />
            <Hero />
            <div className="explorer">
                <SearchFilter />
                <StationsGrid />
            </div>
            <Footer />
        </div>
    )
}

export default App

import React from 'react';

import Navibar from "./component/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import CarouselFadeExample from "./component/Carousel/Carousel";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navibar/>


            </header>
            <CarouselFadeExample/>

            <Footer/>
        </div>
    );
}

export default App;

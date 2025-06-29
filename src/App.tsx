import './App.css'
import {Header} from "./layouts/header/Header.tsx";
import {Main} from "./layouts/sections/main/Main.tsx";
import {Gallery} from "./layouts/sections/gallery/Gallery.tsx";
import {Service} from "./layouts/sections/service/Service.tsx";
import {Catalog} from "./layouts/sections/catalog/Catalog.tsx";
import {Contacts} from "./layouts/sections/contacts/Contacts.tsx";
import {Footer} from "./layouts/footer/Footer.tsx";
import {useEffect, useState} from "react";

function App() {

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="App">
            <Header />
            <Main />
            <Gallery screenWidth={screenWidth}/>
            <Service />
            <Catalog screenWidth={screenWidth}/>
            <Contacts />
            <Footer />
        </div>
    )
}

export default App
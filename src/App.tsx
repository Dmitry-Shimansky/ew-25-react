import './App.css'
import {Header} from "./layouts/header/Header.tsx";
import {Main} from "./layouts/sections/main/Main.tsx";
import {Gallery} from "./layouts/sections/gallery/Gallery.tsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Gallery />
        </div>
    )
}

export default App
import "./App.css";
import { Hero1 } from "./components/hero1";
import { Navbar1 } from "./components/navbar1";
import Strand from "./assets/Strand.jpg";
import { Footer2 } from "./components/footer2";

function App() {
    return (
        <>
            <Navbar1 />
            <main>
                <section>
                    <Hero1
                        heading={"Hei! Jeg er Just"}
                        description={
                            "Begeistringsjeger og datastudent. For tiden på utveksling i Brisbane, Australia. Alltid åpen for en kaffe. "
                        }
                        image={{
                            src: Strand,
                            alt: "Photo of me at the beach",
                        }}
                    />
                </section>
            </main>
            <Footer2 />
        </>
    );
}

export default App;

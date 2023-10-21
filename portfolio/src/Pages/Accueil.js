import React from "react";
import "../Styles/Accueil.scss";

const Accueil = () => {

    return (
        <div id="App">
            <section id="presentation">
                <div id="center-box">
                    <h1 id="hand-agitment">👋</h1>
                    <h1 id="name">Legrand Enzo</h1>
                    <h2 id="junior">Junior Web Developer</h2>
                </div>
            </section>
            <section id="skills">
                <div id="code">
                    <div class="title">
                        <img id="code-img" src={require("../Assets/Images/code.png")}></img>
                        <h1>Languages</h1>
                    </div>
                </div>

                <div id="softwares">
                <div class="title">
                        <img id="code-img" src={require("../Assets/Images/code.png")}></img>
                        <h1>Softwares</h1>
                    </div>
                </div>
            </section>
            <section id="works">

            </section>
        </div>
    );
}

export default Accueil;

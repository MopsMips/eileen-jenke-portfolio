import "./Proficiency.css";

function Proficiency() {
    return (
        <section className="proficiency-section">
            <h2>Proficiency</h2>

            <div className="skill">
                <p>Frontend/Design</p>
                <div className="progress">
                    <div className="bar" style={{ width: "90%" }}></div>
                </div>
            </div>

            <div className="skill">
                <p>Backend</p>
                <div className="progress">
                    <div className="bar" style={{ width: "70%" }}></div>
                </div>
            </div>

            <div className="skill">
                <p>Programming</p>
                <div className="progress">
                    <div className="bar" style={{ width: "60%" }}></div>
                </div>
            </div>
        </section>
    );
}

export default Proficiency;

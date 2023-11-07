import Accordion from 'react-bootstrap/Accordion';
const AboutPage = () =>{
    return(
        <>
        <div>
            <h1>About Warhammer Characters and Figurine Painting</h1>
        </div>
        <div>
            <h2>Introduction</h2>
                <p>Welcome to our dedicated page about Warhammer characters and the intricate art of figurine painting. Whether you're a seasoned hobbyist or a curious newcomer, we aim to provide you with comprehensive insights into the captivating world of Warhammer.
                </p>
        </div>
        <div>
            <h2>What are Warhammer Characters?</h2>
                <p>
                Warhammer is a tabletop wargame created by Games Workshop, set in a rich, fictional universe where various factions vie for supremacy. The game revolves around strategically maneuvering armies of meticulously crafted miniature figurines on intricately designed battlefield terrains. Each figurine represents a unique character, troop, or vehicle, collectively forming your army.
                </p>
        </div>
        <div>
            <h2>The Lore of Warhammer</h2>
                <p>
                The Warhammer universe is a tapestry of lore and history, featuring diverse races, civilizations, and epic battles. From the noble Space Marines of Warhammer 40,000 to the fantastical realms of Warhammer Age of Sigmar, every faction has its own distinct identity, ethos, and narrative.
                </p>
        </div>
        <div>
            <h2>The Art of Figurine Painting</h2>
        </div>
    <div>
    <Accordion >
      <Accordion.Item eventKey="1">
        <Accordion.Header>1. Priming and Base Coating</Accordion.Header>
        <Accordion.Body>
        The journey of bringing a Warhammer figurine to life begins with priming. A thin, even coat of primer is applied to the model to provide an ideal surface for paint adherence. Next comes base coating, where the primary colors are applied to define the overall scheme.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>2. Detailing and Layering</Accordion.Header>
        <Accordion.Body>
        This stage involves the meticulous application of layers to build depth and contrast. Shadows and highlights are carefully crafted to emphasize contours, expressions, and features.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>3. Washes and Inking</Accordion.Header>
        <Accordion.Body>
        Washes are thin, diluted paints that settle into the recesses of the model, creating natural shadows and enhancing details. Inking is used to add depth to specific areas, providing a weathered or dramatic effect.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>4. Highlighting and Dry Brushing</Accordion.Header>
        <Accordion.Body>
        Highlights add the finishing touch to your figurine, emphasizing edges and raised surfaces. Dry brushing is a technique that lightly applies paint to the raised areas, creating a worn or textured effect.
        </Accordion.Body>
      </Accordion.Item><Accordion.Item eventKey="5">
        <Accordion.Header>5. Basing and Detail Work</Accordion.Header>
        <Accordion.Body>
        Basing involves creating a thematic setting for your figurine. This can range from realistic terrain to fantastical landscapes. Additionally, fine details like insignias, weathering, and embellishments bring character and narrative to life.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

    <h2>Join the Warhammer Community</h2>
<p>We encourage you to explore the rich tapestry of Warhammer, from assembling armies to engaging in epic battles on the tabletop. The process of painting figurines is not just a hobby, but an art form that allows you to truly make the universe your own.</p>

    <h3>Get Started</h3>
    <p>
    Ready to embark on your Warhammer painting journey? Check out tutorials here:
    </p>
        </>
    );
}

export default AboutPage
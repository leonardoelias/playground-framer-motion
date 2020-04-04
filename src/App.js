import React from "react";

import Container from "./components/container/container.component";
import PlaygroundItem from "./components/playground-item/playground-item.component";

import Framer from "./components/framer/framer-component";

const TOP_FILMS_2019 = [
  "Parasite (Gisaengchung)",
  "Avengers: Endgame",
  "Us",
  "Knives Out",
  "Toy Story 4",
  "The Irishman",
  "Little Women",
  "Booksmart",
  "The Farewell",
  "Marriage Story",
];

function App() {

  const classTitle = "text-3xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-9 mb-4";

  return (
    <div className="p-6 min-h-screen bg-white">
      <Container>
        <h2 class={classTitle}>
          Framer Motion + TailwindUI
        </h2>
        <PlaygroundItem
          title="Spinning Loader"
          subtitle="spins indefinittely..."
        >
          <Framer.Spinner />
        </PlaygroundItem>

        <PlaygroundItem
          title="Properties animation"
          subtitle="scale, position, radius animation"
        >
          <Framer.Properties />
        </PlaygroundItem>

        <PlaygroundItem title="Show list" subtitle="animation list">
          <Framer.List data={TOP_FILMS_2019} />
        </PlaygroundItem>
      </Container>
    </div>
  );
}

export default App;

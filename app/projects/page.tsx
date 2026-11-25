import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Your Name",
};

const projects = [
  {
    id: 1,
    name: "The Batman",
    description: "A thrilling superhero adventure.",
  },
  {
    id: 2,
    name: "Dune",
    description: "A science fiction epic.",
  },
  {
    id: 3,
    name: "It",
    description: "A psychological horror novel.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <h1>My Projects</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  );
}
import type { Project } from "@/types";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Image
        src={`/projects/${project.image}`}
        alt={project.title}
        width={192}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-600 my-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tech) => (
            <span key={tech} className="bg-blue-100 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
              Демо
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
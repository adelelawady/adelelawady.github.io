import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="outline" size="sm" onClick={() => window.open(githubUrl, "_blank")}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" onClick={() => window.open(liveUrl, "_blank")}>
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
export interface Project {
  imgSrc: string;
  title: string;
  description: string;
  techStack: string[];
  repositoryUrl: string;
  apiRepositoryUrl?: string;
  apiDeployUrl?: string;
  deployUrl: string;
}

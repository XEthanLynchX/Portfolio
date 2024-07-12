import pokemonthumbnail from '../media/pokemonthumbnail.png';
import thumbnail from '../media/thumbnail.png';
import work from '../media/work.gif';


export const ProjectData = [
  {
    id: 1,
    title: "Ethan Lynch Coaching",
    description: "An intuitive and interactive coaching platform designed to empower users to enhance their skills and achieve personal growth through tailored coaching sessions and resources",
    technologies: ['React', 'Django', 'Tailwind'],
    imageUrl: work,
    githubUrl: "https://github.com/XEthanLynchX/ethan-lynch",
    liveDemoUrl: "https://ethan-lynch-coaching.web.app/",
  },
  {
    id: 2,
    title: "Pokemon Handheld",
    description: "A user-friendly and intuitive Pokemon management application allowing users to organize and interact with their collection of captured Pokemon effectively.",
    technologies: ['React', 'Axios', 'Flask', 'MySQL'],
    imageUrl: pokemonthumbnail,
    githubUrl: "https://github.com/Skylarsj/Dojo-Group",
    liveDemoUrl: "https://www.youtube.com/watch?v=YjYFz6mf0vU&t=3s",
  },
  {
    id: 3,
    title: "MoveMetrics",
    description: "An Application that allows users to log and track their workouts. In order to keep track of progression throughout their fitness journey.",
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: thumbnail,
    githubUrl: "https://github.com/XEthanLynchX/MoveMetrics",
    liveDemoUrl: "https://www.youtube.com/watch?v=Bx8snIJxfA0",
  },
];

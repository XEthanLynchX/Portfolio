import pokemonthumbnail from '../media/pokemonthumbnail.png';
import thumbnail from '../media/thumbnail.png';
import puddleJumpersvid from '../media/puddle.gif'
import pokemonImg from '../media/pokemonthumbnail.png';
import coachingImg from '../media/thumbnail.png';


export const ProjectData = [
  {
    id: 1,
    title: "Pokemon Mini",
    type: "Full-Stack",
    description: "A user-friendly and intuitive Pokemon management application allowing users to organize and interact with their collection of captured Pokemon effectively.",
    technologies: ['React', 'Axios', 'Flask', 'MySQL'],
    imageUrl: pokemonImg,
    githubUrl: "https://github.com/yourusername/pokemon-handheld",
    liveDemoUrl: "https://www.youtube.com/watch?v=YjYFz6mf0vU&t=3s",
    features: [
      {
        title: "React-Powered Frontend",
        description: "Leveraged the React framework to create a user-friendly front end, using context to efficiently share components throughout the application, ensuring a seamless and consistent user experience."
      },
      {
        title: "Optimized API Integration",
        description: "Implemented Axios for efficient front-end HTTP requests, optimizing client-server communication and speeding up data transmission processes, resulting in a 30% improvement in application responsiveness."
      },
      {
        title: "Real-Time Pokemon Data",
        description: "Developed seamless integration with the Pokémon API, enabling real-time data retrieval and updates, achieving a 50% decrease in data retrieval latency."
      }
    ],
    metrics: [
      "30% improvement in application responsiveness",
      "50% decrease in data retrieval latency",
      "Seamless integration with Pokemon API"
    ]
  },
  {
    id: 2,
    title: "MoveMetrics",
    type: "Full-Stack",
    description: "An Application that allows users to log and track their workouts. In order to keep track of progression throughout their fitness journey.",
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: thumbnail,
    githubUrl: "https://github.com/XEthanLynchX/MoveMetrics",
    liveDemoUrl: "https://www.youtube.com/watch?v=Bx8snIJxfA0",
    metrics: [
      "90% user workout completion rate",
      "Real-time progress tracking & analytics"
    ]
  },
  {
    id: 3,
    title: "PuddleJumpers",
    type: "E-commerce",
    description: "Puddle Jumpers is an adorable children's store in downtown Exeter, New Hampshire, offering unique and stylish baby clothes and kids' apparel since 1989.",
    technologies: ['Figma', 'Liquid', 'Shopify'],
    imageUrl: puddleJumpersvid,
    liveDemoUrl: "https://puddlejumpersnh.com/",
    metrics: [
      "Generated $500,000+ in annual revenue",
      "Improved site performance and SEO optimization"
    ]
  },
 
];

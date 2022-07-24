import './ExploreContainer.css';

// interface ContainerProps {
//   name: string;
// }

export default function ExploreContainer({ name }) {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

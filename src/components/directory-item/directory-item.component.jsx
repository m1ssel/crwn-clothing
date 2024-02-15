import './directory-item.styles.scss';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title } = category;

  const goToCategoryHandler = (title) => {
    navigate(`./shop/${title}`);
  };

  const handler = () => goToCategoryHandler(title);

  return (
    <div className="directory-item-container" onClick={handler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;

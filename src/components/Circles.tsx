import React from 'react';

interface CircleProps {
  item: { 
    attributes: {
      categoryImage: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
    text: string; 
  };
}

const Circle: React.FC<CircleProps> = ({ item }) => {
  return (
    <div className="circle-container">
      <div className="circle">{item.attributes.categoryImage.data.attributes.url}</div>
      <p className="circle-text">{item.text}</p>
    </div>
  );
};

export default Circle;


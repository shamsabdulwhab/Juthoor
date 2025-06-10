import React from 'react';

interface LogoProps {
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ height }) => {
  return (
    <img src="/src/assets/logo_.png" alt="Juthoor_logo" style={height ? { height } : {}} />
  );
};

export default Logo; 
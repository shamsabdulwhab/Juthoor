import React from 'react';
import logoImage from '../../assets/logo_.png';

interface LogoProps {
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ height }) => {
  return (
    <img 
      src={logoImage} 
      alt="Juthoor Logo" 
      style={height ? { height } : {}} 
    />
  );
};

export default Logo; 
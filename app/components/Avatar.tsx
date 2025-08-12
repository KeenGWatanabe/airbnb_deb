'use client';
import React from 'react';

interface AvatarProps {
  src?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({src}) => {
  return (
    <img className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.png"}
    />
  );
};

export default Avatar;
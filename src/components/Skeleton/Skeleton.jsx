import React from 'react'
import ContentLoader from 'react-content-loader';

const Skeleton = ({ args }) => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={185}
        height={250}
        viewBox="0 0 185 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...args}
      >
        <rect x="0" y="190" rx="4" ry="4" width="185" height="12" />
        <rect x="195" y="115" rx="3" ry="3" width="52" height="6" />
        <circle cx="218" cy="125" r="20" />
        <rect x="0" y="211" rx="4" ry="4" width="185" height="13" />
        <rect x="0" y="123" rx="4" ry="4" width="185" height="22" />
        <rect x="0" y="168" rx="4" ry="4" width="185" height="12" />
        <rect x="0" y="0" rx="0" ry="0" width="185" height="106" />
      </ContentLoader>
    </div>
  );
};

export default Skeleton

import React from 'react';
import Projects from './Projects';
import Writing from './Writing';

// This is the "Overview" tab content - essentially a preview of other sections
const Overview: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Latest Work Preview */}
      <Projects previewMode />
      
      {/* Latest Writing Preview */}
      <Writing previewMode />
    </div>
  );
};

export default Overview;
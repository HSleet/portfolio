import React from 'react';

const Project = ({ imageSrc, description, githubLink, livePreviewLink }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={imageSrc} alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-gray-800 text-base">{description}</p>
                <div className="mt-4 flex justify-between">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub</a>
                    <a href={livePreviewLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Live Preview</a>
                </div>
            </div>
        </div>
    );
};

export default Project;

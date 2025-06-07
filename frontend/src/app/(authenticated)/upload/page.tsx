'use client';

import { useState } from 'react';
import UploadForm from '@/components/UploadForm';

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = (files: File[]) => {
    const file = files[0];
    if (file) {
      setSelectedFile(file);
      // TODO: Implement file upload to backend
      console.log('Selected file:', file.name);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Upload Meeting Recording</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <UploadForm onUpload={handleUpload} />
          
          {selectedFile && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Selected File</h2>
              <div className="text-sm text-gray-600">
                <p>Name: {selectedFile.name}</p>
                <p>Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                <p>Type: {selectedFile.type}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
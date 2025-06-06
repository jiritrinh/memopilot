'use client';

import UploadForm from '@/components/UploadForm';

export default function UploadPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Upload Meeting</h1>
      <UploadForm onUpload={(files) => {
        console.log('Uploaded files:', files);
      }} />
    </div>
  );
} 
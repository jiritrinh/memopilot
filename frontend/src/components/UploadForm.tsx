'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';

export default function UploadForm({ onUpload }: { onUpload: (files: File[]) => void }) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onUpload(acceptedFiles);
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'audio/*': ['.mp3', '.m4a', '.wav'],
            'video/*': ['.mp4'],
        },
        multiple: false,
        maxSize: 200 * 1024 * 1024, // Max 200 MB
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all
        ${isDragActive ? 'border-rose-500 bg-rose-50' : 'border-rose-300'}`}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-4">
                    <UploadCloud className="text-rose-400 w-8 h-8" />
                    <h2 className="text-lg font-semibold text-gray-900">Upload a file to generate your notes</h2>
                    <p className="text-sm text-gray-500">
                        Browse or drag and drop <strong>MP3, M4A, WAV</strong> files.
                        <br />
                        
                    </p>
                    <div className="mt-4">
                        <span className="inline-block bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
                            Browse Files
                        </span>
                    </div>
                </div>
            </div>

        </div>

    );
}
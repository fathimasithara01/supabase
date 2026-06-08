"use client";

import { useState } from "react";
import { FolderHeart, Image, FileText, Video, Music, Plus, Trash2 } from "lucide-react";

interface StorageItem {
  id: string;
  name: string;
  type: "image" | "document" | "video" | "audio";
  size: string;
}

export function StorageCard() {
  const [files, setFiles] = useState<StorageItem[]>([
    { id: "1", name: "avatar.png", type: "image", size: "244 KB" },
    { id: "2", name: "invoice.pdf", type: "document", size: "1.2 MB" },
    { id: "3", name: "promo.mp4", type: "video", size: "28.4 MB" },
    { id: "4", name: "intro.mp3", type: "audio", size: "4.5 MB" },
  ]);

  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const simulateUpload = () => {
    if (uploadProgress !== null) return;
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null) return 0;
        if (prev >= 100) {
          clearInterval(interval);
          // Add new mock file
          const newFile: StorageItem = {
            id: Date.now().toString(),
            name: `asset_${Math.floor(Math.random() * 1000)}.png`,
            type: "image",
            size: "720 KB",
          };
          setFiles((f) => [...f, newFile]);
          setTimeout(() => setUploadProgress(null), 1000);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  const deleteFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div
      id="storage"
      className="group relative overflow-hidden rounded-xl border border-panel-border bg-card-bg/40 p-6 flex flex-col justify-between hover:border-card-border transition-all duration-300 min-h-[380px]"
    >
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/5 blur-[80px] pointer-events-none" />

      {/* Info Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-brand/10 text-brand">
            <FolderHeart className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight">Storage</h3>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
          Store, organize, and serve large files, <span className="text-white font-semibold">from videos to images</span>.
        </p>
      </div>

      {/* Visual File Listing */}
      <div className="relative flex-1 flex flex-col justify-center gap-2.5 select-none">
        <div className="flex items-center justify-between border-b border-panel-border pb-2 mb-1">
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Bucket: public-assets</span>
          <button
            onClick={simulateUpload}
            className="flex items-center gap-1 text-[9px] text-brand hover:text-white font-bold cursor-pointer"
          >
            <Plus className="h-3 w-3" />
            Upload File
          </button>
        </div>

        {uploadProgress !== null && (
          <div className="rounded-lg border border-brand/20 bg-brand/5 p-2 text-[10px] font-mono">
            <div className="flex justify-between text-brand mb-1 font-semibold">
              <span>Uploading asset...</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="w-full bg-zinc-900 h-1 rounded overflow-hidden">
              <div
                className="bg-brand h-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="group/file flex items-center justify-between rounded-lg border border-panel-border bg-black/60 p-2 hover:border-card-border hover:bg-panel-bg/40 transition-colors"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="p-1.5 rounded bg-zinc-900 text-zinc-400 group-hover/file:text-brand shrink-0">
                  {file.type === "image" && <Image className="h-3.5 w-3.5" />}
                  {file.type === "document" && <FileText className="h-3.5 w-3.5" />}
                  {file.type === "video" && <Video className="h-3.5 w-3.5" />}
                  {file.type === "audio" && <Music className="h-3.5 w-3.5" />}
                </span>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] text-zinc-300 font-medium truncate">{file.name}</span>
                  <span className="text-[8px] text-zinc-500 font-mono">{file.size}</span>
                </div>
              </div>
              <button
                onClick={() => deleteFile(file.id)}
                className="text-zinc-600 hover:text-red-400 opacity-0 group-hover/file:opacity-100 transition-opacity p-1 cursor-pointer"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

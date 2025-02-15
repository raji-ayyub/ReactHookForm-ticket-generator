import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

interface CloudinaryUploadResult {
  secure_url: string;
  // Add other properties you might need from the Cloudinary response
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type. Only JPEG, PNG, and GIF are allowed." }, { status: 400 });
    }

    // Validate file size (limit to 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File size exceeds the limit of 5MB." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Check if the buffer is empty
    if (buffer.length === 0) {
      return NextResponse.json({ error: "File is empty" }, { status: 400 });
    }

    const uploadResult = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "conference_avatars" },
        (error, result) => (error ? reject(error) : resolve(result as CloudinaryUploadResult))
      ).end(buffer);
    });

    return NextResponse.json({ url: uploadResult.secure_url }, { status: 200 });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 });
  }
}
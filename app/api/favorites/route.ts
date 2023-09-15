import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    
  } catch (error) {
    console.log(error);
    return new Response("Errror deleting the photo", { status: 500 });
  }
}

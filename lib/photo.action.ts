"use server";

import { redirectToSignIn } from "@clerk/nextjs";
import { initialProfile } from "./initial-profile";
import { db } from "./db";
import { NextResponse } from "next/server";

export async function addPhoto(imageUrl: any) {
  const profile = await initialProfile();
  if (!profile) {
    return redirectToSignIn();
  }

  const createdPhoto = await db.photo.create({
    data: {
      url: imageUrl,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!createdPhoto) {
    return new Response("Error while uploading", { status: 500 });
  }
  return NextResponse.json(createdPhoto);
}

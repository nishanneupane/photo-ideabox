import BottomBar from "@/components/bottom-bar";
import Home from "@/components/home";
import SideNav from "@/components/side-nav";
import { initialProfile } from "@/lib/initial-profile"
import { redirectToSignIn } from "@clerk/nextjs";

export default async function HomePage() {
  const profile = await initialProfile();
  if (!profile) {
    redirectToSignIn();
  }

  return (
    <div className="flex">
      <div className="">
        <SideNav />
        <BottomBar />
        
      </div>
      <Home profile={profile} />
    </div>
  )
}

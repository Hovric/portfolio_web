import Link from "next/link";
import { Button } from "./ui/button";
import { Mail, MapPin } from "lucide-react";
import Navbar from "./navbar";
import { sanityImageUrl } from "@/lib/utils";

interface HeroProps {
  profile: any;
}

const Hero = ({ profile }: HeroProps) => {
  const getSocialLink = (links: string[], platform: string) =>
    links.find((link) => link.toLowerCase().includes(platform));
  return (
    <section className="max-w-6xl mx-auto flex flex-col min-h-screen px-4">
      <Navbar profile={profile} />
      <div className="py-8 md:py-0 md:gap-24 md:flex md:items-center md:flex-1">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            {profile.name}
          </h1>
          <h3 className="text-xl md:text-2xl font-medium mb-4">
            {profile.static_headline}{" "}
            <span className="text-2xl md:text-4xl font-semibold text-primary">
              {profile.headline}
            </span>
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            {profile.short_bio}
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
            {getSocialLink(profile.social_links, "github") && (
              <a
                href={getSocialLink(profile.social_links, "github")}
                target="_blank"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Github
                </Button>
              </a>
            )}
            {getSocialLink(profile.social_links, "twitter") && (
              <a
                href={getSocialLink(profile.social_links, "twitter")}
                target="_blank"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Twitter
                </Button>
              </a>
            )}
            {getSocialLink(profile.social_links, "linkedin") && (
              <a
                href={getSocialLink(profile.social_links, "linkedin")}
                target="_blank"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Linkedin
                </Button>
              </a>
            )}
            {getSocialLink(profile.social_links, "instagram") && (
              <a
                href={getSocialLink(profile.social_links, "instagram")}
                target="_blank"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Instagram
                </Button>
              </a>
            )}
          </div>
          <div className="flex gap-4 mb-12 text-muted-foreground text-xs">
            <div className="flex gap-1 items-center">
              <Mail size={18} />
              <p>{profile.email}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MapPin size={18} />
              <p>{profile.location}</p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={sanityImageUrl(profile.profile_image)?.url()}
            alt="avatar"
            className="h-[350px] md:h-[450px] md:w-[450px] w-full object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

interface ContactProps {
  contact: any;
}

const Contact = ({ contact }: ContactProps) => {
  const getSocialLink = (links: string[], platform: string) =>
    links.find((link) => link.toLowerCase().includes(platform));
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 py-16 ">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Get In Touch
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Feel free to reach out.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="space-y-4 flex-1">
          <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
          <div className="flex items-center gap-4">
            <Mail className="w-8 h-8 text-muted-foreground" />
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground">{contact.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-8 h-8 text-muted-foreground" />
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Phone</p>
              <p className="text-muted-foreground">{contact.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-muted-foreground" />
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Location</p>
              <p className="text-muted-foreground">{contact.location}</p>
            </div>
          </div>
        </div>
        {contact.social_links.length > 0 && (
          <div className="space-y-4 flex-2">
            <h3 className="font-semibold mb-4 text-lg">Follow Me</h3>
            <div className="flex gap-4">
              {getSocialLink(contact.social_links, "github") && (
                <a
                  href={getSocialLink(contact.social_links, "github")}
                  target="_blank"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    Github
                  </Button>
                </a>
              )}
              {getSocialLink(contact.social_links, "twitter") && (
                <a
                  href={getSocialLink(contact.social_links, "twitter")}
                  target="_blank"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    Twitter
                  </Button>
                </a>
              )}
              {getSocialLink(contact.social_links, "linkedin") && (
                <a
                  href={getSocialLink(contact.social_links, "linkedin")}
                  target="_blank"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    Linkedin
                  </Button>
                </a>
              )}
              {getSocialLink(contact.social_links, "instagram") && (
                <a
                  href={getSocialLink(contact.social_links, "instagram")}
                  target="_blank"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    Instagram
                  </Button>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

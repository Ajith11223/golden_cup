import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/ui/magicui/lens";

const members = [
  {
    name: "Premium Kunthan Chocker",
    role: "",
    avatar: "11.jpeg",
    link: "#",
  },
  {
    name: "Palakka mala ",
    role: "",
    avatar: "12.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace",
    role: "",
    avatar: "13.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace ",
    role: "",
    avatar: "14.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Chocker",
    role: "",
    avatar: "15.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace",
    role: "",
    avatar: "16.jpeg",
    link: "#",
  },
  // {
  //     name: 'Premium Temple Necklace',
  //     role: '',
  //     avatar: '18.jpeg',
  //     link: '#',
  // },
  // {
  //     name: 'Premium Victorian Necklace',
  //     role: '',
  //     avatar: '17.jpeg',
  //     link: '#',
  // },
  // {
  //     name: 'Premium Victorian Necklace',
  //     role: '',
  //     avatar: '17.jpeg',
  //     link: '#',
  // },
];

export default function CardSection() {
  return (
    <section className=" py-12 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-6xl border-t px-6">
        {/* <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Models</span> */}
        <div className="mt-5 gap-4 sm:grid sm:grid-cols-2 md:mt-15">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Collections</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              During the working process, we perform regular fitting with the
              client because he is the only person who can feel whether a new
              suit fits or not.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-3">
            {members.map((member, index) => (
              <>
                <Card  key={index} className="relative max-w-5xl shadow-none">
                  <CardHeader>
                    <Lens
                      zoomFactor={1.4}
                      lensSize={90}
                      isStatic={false}
                      ariaLabel="Zoom Area"
                    >
                      <img
                        src={member?.avatar}
                        alt="image placeholder"
                        width={600}
                        height={500}
                      />
                    </Lens>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl">{member?.name}</CardTitle>
                    {/* <CardDescription>
                      See our latest and best camp destinations all across the
                    </CardDescription> */}
                  </CardContent>
                  <CardFooter className="space-x-4">
                    {/* <Button>Let&apos;s go</Button> */}
                    <Button variant="secondary">Connect</Button>
                  </CardFooter>
                </Card>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

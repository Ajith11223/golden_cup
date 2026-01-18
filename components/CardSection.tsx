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
  {
    name: "Premium Victorian Necklace",
    role: "",
    avatar: "16.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace",
    role: "",
    avatar: "16.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace",
    role: "",
    avatar: "16.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace",
    role: "",
    avatar: "16.jpeg",
    link: "#",
  },
];

export default function CardSection() {
  return (
    <section className="max-w-8xl  dark:bg-transparent bg-muted ">
      <div className="">
      <div className="
         py-4 md:py-4 lg:py-6 xl:py-[0px]  sm:px-5 md:px-[20px]  lg:px-[60px] xl:px-[110px] flex flex-col
          items-center justify-between gap-7 lg:gap-[30px] md:flex-row gap-[30px] items-center 
               backdrop-blur-[18%] rounded-[16px]">
      
        {/* <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Models</span> */}
       
        <div className="mt-1 md:mt-4 p-4">
          <div className="grid gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
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
                  {/* <CardFooter className="space-x-4">
                    <Button variant="secondary">Connect</Button>
                  </CardFooter> */}
                </Card>
              </>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Tehila",
    avatar: "A",
    joinedDate: "June 2020",
    description: "This is the best ai application I've used!",
  },
  {
    name: "Dor",
    avatar: "J",
    joinedDate: "August 2021",
    description: "I'm addicted to the Photo Generation.",
  },
  {
    name: "Liraz",
    avatar: "B",
    joinedDate: "July 2019",
    description: "Great app! I recommended.",
  },
  {
    name: "Gal",
    avatar: "M",
    joinedDate: "October 2023",
    description: "I wish i found this app earlier.",
  },
];
export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] 
                border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>

                  <p className="text-zinc-400 text-sm">{item.joinedDate}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

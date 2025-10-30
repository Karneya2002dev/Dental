import React from "react";
import { Star, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/Card"; // ✅ Fixed path

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Dentist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJz1wU4BJSy-ioRd_TvWFF7JLN3omSXjp19A&s",
    rating: 4.9,
    phone: "+91 98765 43210",
    email: "sarah@denttyclinic.com",
  },
  {
    name: "Dr. Rahul Mehta",
    role: "Orthodontist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjP8I5Zi3UTy2EfaCjOsLk5CvTubQaxmAJf56rVmdzMIYLJyF6DDK1I99LxK9p0CSL6ZI&usqp=CAU",
    rating: 4.8,
    phone: "+91 99887 66554",
    email: "rahul@denttyclinic.com",
  },
  {
    name: "Dr. Lisa Fernandes",
    role: "Cosmetic Dentist",
    image: "https://t4.ftcdn.net/jpg/03/20/74/45/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg",
    rating: 5.0,
    phone: "+91 90909 88877",
    email: "lisa@denttyclinic.com",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Experts</h2>
        <p className="text-gray-600 text-lg">
          Our experienced dental professionals are here to give you the best care.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <Card key={index} className="overflow-hidden group">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <CardContent className="text-center space-y-3">
              <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <div className="flex justify-center items-center text-yellow-500">
                <Star className="w-5 h-5 mr-1 fill-current" /> {member.rating}
              </div>
              <div className="flex justify-center gap-4 text-gray-500 mt-2">
                <a href={`mailto:${member.email}`} className="hover:text-primary">
                  <Mail />
                </a>
                <a href={`tel:${member.phone}`} className="hover:text-primary">
                  <Phone />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Team;

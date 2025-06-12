import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Testimonial data
const testimonials = [
  {
    name: "John Doe",
    testimonial:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities",
    tagline: "Edusity, USA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    testimonial:
      "I couldn't be happier with my choice to study at Edusity. The professors are incredibly knowledgeable, and the campus environment is so welcoming.",
    tagline: "Edusity, India",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Samuel Lee",
    testimonial:
      "Edusity has provided me with the best learning experience. The resources and tools available for students are exceptional, and I feel well-prepared for my career.",
    tagline: "Edusity, KSA",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Anna Garcia",
    testimonial:
      "'Studying at Edusity has opened so many doors for me. The networking opportunities and the global community have helped me grow both professionally '",
    tagline: "Edusity, Spain",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Mark Wilson",
    testimonial:
      "'I was impressed by the level of support I received at Edusity. From academic guidance to career counseling, the staff is always there to help. The campus is vibrant and full of life.'",
    tagline: "Edusity, UK",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Sophia Zhang",
    testimonial:
      "'At Edusity, I’ve found a balance between academics and extracurricular activities that has helped me develop into a well-rounded individual.",
    tagline: "Edusity, China",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Liam Brown",
    testimonial:
      "'I was hesitant at first, but Edusity has completely changed my perspective. The cutting-edge technology used in my courses, along with the collaborative atmosphere, has made learning enjoyable.'",
    tagline: "Edusity, Canada",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Emily Davis",
    testimonial:
      "'Edusity has not only given me an excellent education but has also empowered me to explore my passions. The support from faculty and peers is what makes this place so unique.'",
    tagline: "Edusity, Australia",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
  },
  {
    name: "Javier leads",
    testimonial:
      "'The best decision I made was choosing Edusity. The diverse student body and international perspective have made my learning experience truly enriching and invaluable.'",
    tagline: "Edusity, Mexico",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Maria Gonzalez",
    testimonial:
      "'Edusity has given me the tools and knowledge to pursue my career dreams. I’m grateful for the rigorous academic environment and the lifelong friendships I've made here.",
    tagline: "Edusity, Argentina'",
    image: "https://randomuser.me/api/portraits/women/92.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonial" className="w-full md:h-[80vh] h-[60vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[80vh] flex justify-center items-center mb-4">
      <div className="w-[90%] md:w-4/5 h-full  flex flex-col justify-between items-center md:p-8">
        {/* Title */}
        <div className="w-full gap-2 h-1/5 flex flex-col justify-center items-center text-xl font-semibold text-black">
          <h2 className="text-base">TESTIMONIALS</h2>
          <h2 className="text-3xl text-center 2xl:text-5xl">What Student Says</h2>
        </div>
        {/* Slider */}
        <div className="w-full h-4/5 md:h-4/5 flex justify-between items-center text-center text-white">
          <div className="left-arrow">
            <button
              className=" w-[40px] h-[40px] bg-blue-900 flex justify-center items-center rounded-full"
              onClick={prevTestimonial}
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="1 Testimonial hidden w-[40%] h-[70%] lg:h-[70%] xl:h-[60%] 2xl:h-[50%] bg-white md:flex flex-col justify-start gap-10 px-4 py-4 rounded-md shadow-lg">
            <div className="hidden md:flex ">
              <img
                src={
                  testimonials[(currentIndex + 1) % testimonials.length].image
                }
                alt=""
                className="h-[80px] w-[80px] rounded-full border-blue-900 border-[5px]"
              />
              <div className="w-[80%] flex flex-col justify-center items-start px-4 md:pl-3 md:px-1">
                <h2 className="text-blue-900 font-extrabold text-xl md:text-lg">
                  {testimonials[(currentIndex + 1) % testimonials.length].name}
                </h2>
                <h2 className="text-black text-sm md:text-xs">
                  {
                    testimonials[(currentIndex + 1) % testimonials.length]
                      .tagline
                  }
                </h2>
              </div>
            </div>
            <p className="text-black text-[15px] 2xl:text-[17px]">
              {
                testimonials[(currentIndex + 1) % testimonials.length]
                  .testimonial
              }
            </p>
          </div>
          <div id="testimonialParent" className=" 2 Testimonial w-[80%]  md:w-[40%] h-[70%] lg:h-[70%] xl:h-[60%] 2xl:h-[50%] bg-white flex flex-col justify-start gap-10 px-4 py-4 rounded-md shadow-lg">
            <div className="flex ">
              <img
                src={testimonials[currentIndex].image}
                alt=""
                className="h-[70px]  md:h-[80px] md:w-[80px] rounded-full border-blue-900 border-[5px]"
              />
              <div className=" w-[80%] flex flex-col justify-center items-start px-3 md:pl-3 md:px-1">
                <h2 className="text-blue-900 font-extrabold text-xl md:text-lg">
                  {testimonials[currentIndex].name}
                </h2>
                <h2 className="text-black text-sm md:text-xs">
                  {testimonials[currentIndex].tagline}
                </h2>
              </div>
            </div>
            <p id="testimonialPara" className="text-black text-[15px] 2xl:text-[17px]">
              {testimonials[currentIndex].testimonial}
            </p>
          </div>
          <div className="left-arrow">
            <button
              className=" w-[40px] h-[40px] bg-blue-900 flex justify-center items-center rounded-full"
              onClick={nextTestimonial}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

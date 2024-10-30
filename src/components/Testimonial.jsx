import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Pagination, Autoplay, Scrollbar } from "swiper/modules";

const Testimonial = () => {
  const ServiceData = [
    {
      name: "Allen Joseph",
      designation: "Working at Zoho",
      review:
        "Within minutes, I listed my property on Rentals and other top sites. The benefit of listing my property with ease over multiple platforms through one site is reason enough to use Rentals.",
    },
    {
      name: "Philipe",
      designation: "Working at JP Morgan",
      review:
        "Rentals' step-by-step listing process is quick, easy, and free. Less than 12 hours after listing my property, I had multiple showings and offers. I've never seen such fast results!",
    },
    {
      name: "Salt",
      designation: "Working at KIA",
      review:
        "I love that all my communication with potential applicants is archived in my Rentals account. I don't have to worry about checking my email. It's so easy to stay connected!",
    },{
        name: "Gabrew",
        designation: "Working at NASA",
        review:
          "Within minutes, I listed my property on Rentals and other top sites. The benefit of listing my property with ease over multiple platforms through one site is reason enough to use Rentals.",
      },
      {
        name: "Richard",
        designation: "Working at ISRO",
        review:
          "Rentals' step-by-step listing process is quick, easy, and free. Less than 12 hours after listing my property, I had multiple showings and offers. I've never seen such fast results!",
      },
      {
        name: "Mettley",
        designation: "Working at LLC",
        review:
          "I love that all my communication with potential applicants is archived in my Rentals account. I don't have to worry about checking my email. It's so easy to stay connected!",
      }
  ];

  return (
    <div className="pt-12 max-w-[1400px] lg:mx-auto mx-[10px]" id="testimonial">
      <p className="text-center lg:text-[55px] text-[35px] font-bold text-blue-900 leading-tight mb-6">
        What Our Users Are Saying
      </p>

      <Swiper
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 15 },
          1000: { slidesPerView: 3, spaceBetween: 18 },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Autoplay, FreeMode, Scrollbar]}
        className="max-w-[90%] mx-auto"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="p-6 rounded-lg shadow-sm text-center h-[250px] flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.designation}</p>
                <p className="text-gray-800">{item.review}</p>
              </div>

              {/* Rating stars using SVG icons */}
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;

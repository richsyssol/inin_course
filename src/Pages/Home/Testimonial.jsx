import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rate } from "antd";
import { ChevronUp, ChevronDown } from "lucide-react";
import CTA from "./CTA";
const testimonials = [
  {
    id: 1,
    name: "आदित्य जाधव",
    city: "Pune",
    text: "मैंने कभी सोचा नहीं था कि एक डिजिटल कोर्स से मैं मोबाइल रिपेयरिंग सीख पाऊंगा। लेकिन कोर्स ने मेरी सोच बदल दी। अब मैं अपने मोहल्ले में सर्विस दे रहा हूँ और रोज़ 500-700 रुपए कमा रहा हूँ।",
    rating: 5,
  },
  {
    id: 2,
    name: "Ravi Shinde",
    city: "Nashik",
    text: "I started this course during my free time. Within 20 days, I repaired my first dead phone. Now I handle 3–4 phones per week. This course made it easy to start without any technical background.",
    rating: 5,
  },
  {
    id: 3,
    name: "Noman Shaikh",
    city: "Aurangabad",
    text: "Mujhe YouTube videos se kuch bhi clear nahi hota tha. Lekin yeh course simple step-by-step samjhata hai. Ab main charging aur speaker problems easily fix karta hoon.",
    rating: 5,
  },
  {
    id: 4,
    name: "महेश गावडे",
    city: "Solapur",
    text: "ही पीडीएफ खरंच उपयोगी आहे. प्रत्येक प्रोब्लेमसाठी सॉल्यूशन आहे. आता माझं छोटंसं रिपेअरिंग सेंटर सुरू आहे आणि दिवसाला ४-५ ग्राहक येतात.",
    rating: 5,
  },
  {
    id: 5,
    name: "Shraddha Borkar",
    city: "Nagpur",
    text: "I had zero knowledge of electronics, but this course explained every part — from tools to IC testing. I'm now earning extra income as a part-time repair tech.",
    rating: 5,
  },
  {
    id: 6,
    name: "Pratik Patil",
    city: "Kolhapur",
    text: "Mere liye yeh course ek life-changer bana. Main ab ghar se hi phone repair karke ₹10,000+ kama raha hoon monthly. Tools ke setup guide ne bahut madad ki.",
    rating: 5,
  },
  {
    id: 7,
    name: "स्नेहा पाटील",
    city: "Thane",
    text: "या कोर्समध्ये दिलेल्या वर्कशीट्समुळे माझं लक्ष शिकण्याकडे केंद्रित झालं. हे सरळ आणि स्पष्ट स्वरूपात समजतं.",
    rating: 5,
  },
  {
    id: 8,
    name: "आशीष यादव",
    city: "Ahmednagar",
    text: "मुझे Dead phone repair करना बहुत मुश्किल लगता था। लेकिन इस कोर्स की फ्लो चार्ट बुकलेट से मैं आसानी से diagnose कर पाता हूँ।",
    rating: 5,
  },
  {
    id: 9,
    name: "Wasim Khan",
    city: "Jalgaon",
    text: "Course ke baad maine apna chhota service point start kiya. FRP aur PIN unlock requests regular aati hai. Sab kuch PDF se sikha.",
    rating: 5,
  },
  {
    id: 10,
    name: "प्रमोद देशमुख",
    city: "Amravati",
    text: "मी साधारण मोबाईलची फ्लॅशिंग शिकली आणि आता माझ्या गावात मी एकटाच ही सर्विस देतोय. हे शिकणं खूप सोपं आहे या कोर्समुळे.",
    rating: 5,
  },
  {
    id: 11,
    name: "Jayesh Kadam",
    city: "Latur",
    text: "This course not only taught me repairing but also gave me the confidence to handle tools like UFI and UMT. I'm now training two more students under me.",
    rating: 5,
  },
  {
    id: 12,
    name: "Harshad Desai",
    city: "Satara",
    text: "Microscope, DC machine aur multimeter kaise use karte hai, yeh sab course me step-by-step hai. Mujhe ab market me clients mil rahe hai.",
    rating: 5,
  },
  {
    id: 13,
    name: "संदीप राऊत",
    city: "Beed",
    text: "कोर्समध्ये दिलेली एरर फिक्स गाइड खूपच उपयोगी पडली. मला FRP unlock मध्ये खूप प्रॉब्लेम यायचा, आता सहज होते.",
    rating: 5,
  },
  {
    id: 14,
    name: "Priya Naik",
    city: "Mumbai",
    text: "Being from Mumbai, I wanted to upgrade my freelancing skills. This digital course gave me knowledge and practical tools that even YouTube didn't.",
    rating: 5,
  },
  {
    id: 15,
    name: "राजू मेश्राम",
    city: "Chandrapur",
    text: "मैंने ये कोर्स दो बार पढ़ा, और हर बार कुछ नया सीखने को मिला। अब मैं confidently unlocking, flashing और battery replacement करता हूँ।",
    rating: 5,
  },
  {
    id: 16,
    name: "विनोद पगारे",
    city: "Dhule",
    text: "मैं पहले एक मोबाइल शॉप पर हेल्पर था। अब इस कोर्स से खुद की दुकान खोल ली है। लोग Dead phone और network issue fix कराने आते हैं।",
    rating: 5,
  },
  {
    id: 17,
    name: "निलेश साळुंखे",
    city: "Sangli",
    text: "माझ्या गावात रिपेअरिंग सेंटर नव्हतं. आता मी एकटा Dead phone, Display आणि Battery बदलत आहे. कोर्स खूप उपयोगी आहे!",
    rating: 5,
  },
  {
    id: 18,
    name: "Saif Qureshi",
    city: "Akola",
    text: "Mobile kaise repair karte hai, yeh pehle sirf sochta tha. Aaj YouTube se jyada clear iss course ne samjhaya. Mic aur Touch ka kaam ab easy lagta hai.",
    rating: 5,
  },
  {
    id: 19,
    name: "Sameer More",
    city: "Nanded",
    text: "I used this course to upgrade my skills as a part-time technician. Now I get more referrals from customers because I can solve problems faster using the flowcharts.",
    rating: 5,
  },
  {
    id: 20,
    name: "योगेश पाटील",
    city: "Wardha",
    text: "कोर्स घेतल्यानंतर मी टूल्स खरेदी केली आणि डायग्नोसिस सुरू केलं. आता लोक माझ्याकडे FRP आणि Flashing साठी येतात.",
    rating: 5,
  },
  {
    id: 21,
    name: "राजेश माने",
    city: "Yavatmal",
    text: "अब किसी भी फोन का speaker, mic ya charging problem fix करने में डर नहीं लगता। कोर्स ने समझाया कि कौनसे टेस्ट कैसे करने हैं।",
    rating: 5,
  },
  {
    id: 22,
    name: "Rupesh Jagtap",
    city: "Ratnagiri",
    text: "Main ek chhoti dukaan chala raha hoon jahan repair ka kaam bhi suru kiya hai. Display aur battery ka margin achha milta hai — sab kuch is course ki wajah se possible hua.",
    rating: 5,
  },
  {
    id: 23,
    name: "Imran Shaikh",
    city: "Bhiwandi",
    text: "The Tool Setup Guide was a blessing. I had issues with UMT dongle and COM ports, but the guide solved it in minutes. Saved me hours of struggle!",
    rating: 5,
  },
  {
    id: 24,
    name: "दत्तात्रय लोखंडे",
    city: "Parbhani",
    text: "मी आधी YouTube वर खूप शिकण्याचा प्रयत्न केला पण गोंधळ झाला. कोर्स structured आहे आणि खूप उपयोगी पडतो.",
    rating: 5,
  },
  {
    id: 25,
    name: "Tushar Mhatre",
    city: "Navi Mumbai",
    text: "Course ke baad mujhe internship mil gayi ek repair shop mein. Ab main unlock, flashing aur software repair ka expert ban gaya hoon!",
    rating: 5,
  },
];
export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize with first 10 testimonials
    setVisibleTestimonials(testimonials.slice(0, 10));
  }, []);

  const scrollTestimonials = (direction) => {
    if (direction === "up" && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setVisibleTestimonials(testimonials.slice(newIndex, newIndex + 10));
    } else if (
      direction === "down" &&
      currentIndex < testimonials.length - 10
    ) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setVisibleTestimonials(testimonials.slice(newIndex, newIndex + 10));
    }
  };

  return (
    <section className="relative pb-20 w-full flex flex-col items-center text-white bg-black overflow-hidden pt-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Student <span className="text-yellow-400 font-bold">Success </span>{" "}
        Stories
      </h2>
      <p className="text-blue-400 text-sm md:text-base text-center mb-6">
        Real people from across Maharashtra achieving real results!
      </p>
      <Rate
        allowHalf
        defaultValue={5}
        className="text-yellow-400 text-xl mb-2"
      />
      <p className="text-gray-300 text-lg font-semibold mb-4">5 Out of 5</p>
      <p className="text-gray-400 text-sm mb-6">(25+ Verified Reviews)</p>
      <p className="text-gray-300 text-center max-w-3xl mb-8">
        Our students from cities across Maharashtra are transforming their lives
        with mobile repair skills. From complete beginners to earning ₹500-1000
        daily, these stories prove what's possible with the right training.
      </p>

      <div className="relative w-full max-w-4xl">
        <button
          onClick={() => scrollTestimonials("up")}
          disabled={currentIndex === 0}
          className={`absolute -top-8 left-1/2 -translate-x-1/2 z-10 bg-yellow-500 ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-600"
          } text-white p-2 rounded-full shadow-md transition-transform hover:scale-110`}
          aria-label="Scroll up"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <div className="space-y-4 h-[1440px] overflow-y-auto scrollbar-hide">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-full"
            >
              <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-yellow-400 font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.city}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>
                            {i < testimonial.rating ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-yellow-500"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 text-yellow-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mt-2 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scrollTestimonials("down")}
          disabled={currentIndex >= testimonials.length - 10}
          className={`absolute -bottom-8 left-1/2 -translate-x-1/2 z-10 bg-yellow-500 ${
            currentIndex >= testimonials.length - 10
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-600"
          } text-white p-2 rounded-full shadow-md transition-transform hover:scale-110`}
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-8 text-gray-400 text-sm">
        Showing {currentIndex + 1}-
        {Math.min(currentIndex + 10, testimonials.length)} of{" "}
        {testimonials.length} testimonials
      </div>

      <CTA />
      <p className="bg-yellow-400 text-black font-bold text-lg px-6 py-3 rounded-lg text-center mt-8">
        Enroll today to start your mobile repair journey
      </p>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { book1, book2 } from "../../assets";
const BookSlider = () => {
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);

  const books = [
    {
      id: "1",
      title: "Mobile Repairing Course ",
      author: "Basic To Advanced",
      coverImage: book1,
      description: "Learn To Repair All SmartPhones - Hardware & Softwares",
    },
    {
      id: "2",
      title: "Mobile Repairing Course ",
      author: "Basic To Advanced",
      coverImage: book2,
      description: "Learn To Repair All SmartPhones - Hardware & Softwares",
    },
  ];

  const nextBook = () => {
    setSelectedBookIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  const prevBook = () => {
    setSelectedBookIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const selectBook = (index) => {
    setSelectedBookIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-white-50 p-4">
      <div className="w-full max-w-4xl">
        {/* Main Book Display */}
        <div className="relative h-96 mb-8 rounded-xl overflow-hidden  bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={books[selectedBookIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex p-6"
            >
              <div className="w-3/2 h-full flex items-center justify-center">
                <img
                  src={books[selectedBookIndex].coverImage}
                  alt={books[selectedBookIndex].title}
                  className="h-full object-contain shadow-md"
                />
              </div>
              <div className="hidden w-2/3 p-6 md:flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {books[selectedBookIndex].title}
                </h2>
                <p className="text-xl text-gray-600 mb-4 font-semibold">
                  {books[selectedBookIndex].author}
                </p>
                <p className="text-gray-700 font-semibold">
                  {books[selectedBookIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevBook}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextBook}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-5 md:gap-20">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              onClick={() => selectBook(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-70 h-50 cursor-pointer rounded-md overflow-hidden shadow-md transition-all ${
                selectedBookIndex === index ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSlider;

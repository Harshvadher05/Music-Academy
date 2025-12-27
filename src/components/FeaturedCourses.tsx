"use client";
import Link from "next/link";
import Image from "next/image";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  //for datatype check at mapping
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      {/* 1 */}
      <div className="pb-6">
        <div className=" text-center">
          <h2 className="my-4 text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm transition-transform duration-300 hover:-translate-y-1">
                {/* Image section */}
                <div className="relative w-full h-36 sm:h-40">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover rounded-t-[22px]"
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>

                {/* Content section */}
                <div className="p-4 sm:p-6 flex flex-col items-center text-center grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* 3 */}
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;

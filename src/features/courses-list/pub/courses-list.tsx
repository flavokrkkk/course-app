import React from "react";
import { coursesRepository } from "../courses.repository";
import CoursesItem from "../ui/courses-item";
import { revalidatePath } from "next/cache";

const CoursesList = async ({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) => {
  const coursesList = await coursesRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";
    await coursesRepository.deleteCourseElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col space-y-3">
      {coursesList.map((course) => (
        <CoursesItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
};

export default CoursesList;

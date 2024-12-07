"use server";

import { revalidatePath } from "next/cache";
import { CreateCourseListElementCommand } from "./model/types";
import { coursesRepository } from "./courses.repository";

export const createCoursesAction = async (
  revalidatePagePath: string,
  command: CreateCourseListElementCommand,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};

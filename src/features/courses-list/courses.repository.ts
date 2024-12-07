import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import {
  CourseListElement,
  CreateCourseListElementCommand,
  DeleteCourseListElementCommand,
} from "./model/types";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<Array<CourseListElement>> => dbClient.course.findMany(),
  );

  createCourseElement = (
    command: CreateCourseListElementCommand,
  ): Promise<CourseListElement> =>
    dbClient.course.create({
      data: command,
    });
  deleteCourseElement = (command: DeleteCourseListElementCommand) =>
    dbClient.course.delete({
      where: { id: command.id },
    });
}

export const coursesRepository = new CoursesRepository();

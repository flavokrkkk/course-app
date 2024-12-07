export type CourseListElement = {
  id: string;
  name: string;
  description: string;
};

export type CreateCourseListElementCommand = {
  name: string;
  description: string;
};

export type DeleteCourseListElementCommand = {
  id: string;
};

"use client";

import React, { FC, useTransition } from "react";
import { CourseListElement } from "../model/types";
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared";

interface ICoursesItem {
  course: CourseListElement;
  onDelete: () => Promise<void>;
}
const CoursesItem: FC<ICoursesItem> = ({ course, onDelete }) => {
  const [isLoadingDelete, startDeleteTransition] = useTransition();

  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button
          disabled={isLoadingDelete}
          variant="outline"
          onClick={handleDelete}
        >
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CoursesItem;

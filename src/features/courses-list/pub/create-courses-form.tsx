"use client";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared";
import { Textarea } from "@/shared/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateCourseListElementCommand } from "../model/types";
import { createCoursesAction } from "../actions";
import { cn } from "@/shared/ui/lib/utils";

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

interface ICreateCoursesForm {
  className: string;
  revalidatePagePath: string;
}

const CreateCoursesForm: FC<ICreateCoursesForm> = ({
  revalidatePagePath,
  className,
}) => {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onFormSubmit = (data: CreateCourseListElementCommand) => {
    startCreateTransition(async () => {
      await createCoursesAction(revalidatePagePath, data);
    });
  };

  return (
    <Form {...form}>
      <form
        className={cn(className, "space-y-8")}
        onSubmit={form.handleSubmit(onFormSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="Название..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder="Описание..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreateTransition}>
          Добавить
        </Button>
      </form>
    </Form>
  );
};

export default CreateCoursesForm;

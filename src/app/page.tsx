import CoursesList from "@/features/courses-list/pub/courses-list";
import CreateCoursesForm from "@/features/courses-list/pub/create-courses-form";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8">
      <h1>Courses</h1>
      <CreateCoursesForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}

import { render, screen } from "@testing-library/react";
import CoursesItem from "./courses-item";
import userEvent from "@testing-library/user-event";

describe("course item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <CoursesItem
        course={{
          id: "1",
          name: "Test Course",
          description: "Test Course Description",
        }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Удалить"));

    expect(onDelete).toHaveBeenCalled();
  });
});

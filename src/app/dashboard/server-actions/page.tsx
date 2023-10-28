export const dynamic = "foce-dynamic";

import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: "Server Actions",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  return (
    <div>
      <div className="w-full p-5 mx-5 mb-1">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}

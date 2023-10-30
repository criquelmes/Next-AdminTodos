export const dynamic = "foce-dynamic";

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: "Listado de todos",
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

"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  await sleep(1);
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    throw new Error(`Todo with id ${id} not found`);
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-actions");
  return updatedTodo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const todo = await prisma.todo.create({ data: { description } });

  revalidatePath("/dashboard/server-actions");
  return todo;
};

// Todo: Add deleteTodo action
export const deleteCompleted = async (): Promise<boolean> => {
  await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath("/dashboard/server-actions");
  return true;
};

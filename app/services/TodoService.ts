import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const TODO_FILE_PATH = "/data/todos.json";

export const getTodos = async () => {
    //TODO: API URL設定
    const url = API_URL + "/app/api/todo/get";
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    //TODO: API URL設定
    const url = API_URL + "/app/api/todo/add";
    const data = JSON.stringify(todos);

    try {
        // APIで保存
        const postResponse = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "/data/todos.json",
            },
            body: data,
        });

        if (postResponse.ok) {
            return await postResponse.json();
        }
    } catch (error) {
        console.error(error);
    }
}

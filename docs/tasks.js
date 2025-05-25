module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          Users: "Create a task",
        },
        description: "Create Task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/id/{_id}": {
      put: {
        tags: {
          Tasks: "Update a Task",
        },
        description: "Update Task",
        operationId: "updateTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of Task to be updated",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Task" },
            },
          },
        },
        responses: {
          200: { description: "Task updated successfully" },
          500: { description: "Server error" },
        },
      },
    },
    "/": {
      get: {
        tags: {
          Tasks: "Get all Tasks",
        },
        description: "get all Tasks",
        operationId: "getTasks",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Get all Tasks",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Task" },
            },
          },
        },
        responses: {
          200: { description: "Get all Tasks" },
          500: { description: "Server error" },
        },
      },
    },
    "/id/{_id}": {
      delete: {
        tags: {
          Tasks: "Delete a Task",
        },
        description: "Delete a Task",
        operationId: "deleteTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Delete a Task by ID",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Task" },
            },
          },
        },
        responses: {
          200: { description: "Delete a Task by ID" },
          500: { description: "Server error" },
        },
      },
    },
  },
};

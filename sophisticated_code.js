/*
** Filename: sophisticated_code.js
** Description: This code demonstrates a complex implementation of a task scheduler.
**              It allows users to create, schedule, and manage tasks with various properties.
*/

class Task {
  constructor(name, priority, duration) {
    this.name = name;
    this.priority = priority;
    this.duration = duration;
  }

  execute() {
    console.log(`Executing task: ${this.name}`);
    // Perform task execution logic here
    // ...
    console.log(`Task ${this.name} completed!`);
  }
}

class Scheduler {
  constructor() {
    this.tasks = []; // Store the scheduled tasks
  }

  schedule(task) {
    this.tasks.push(task);
    this.sortTasksByPriority();
  }

  sortTasksByPriority() {
    this.tasks.sort((a, b) => b.priority - a.priority);
  }

  runTasks() {
    console.log('Running tasks...');
    this.tasks.forEach((task) => {
      console.log(`Running task: ${task.name}`);
      task.execute();
      console.log(`Task ${task.name} finished!`);
    });
    console.log('All tasks completed!');
  }
}

// Create tasks
const task1 = new Task('Task 1', 3, 2000);
const task2 = new Task('Task 2', 1, 3000);
const task3 = new Task('Task 3', 2, 1000);
const task4 = new Task('Task 4', 4, 5000);

// Create scheduler
const scheduler = new Scheduler();

// Schedule tasks
scheduler.schedule(task1);
scheduler.schedule(task2);
scheduler.schedule(task3);
scheduler.schedule(task4);

// Run tasks
scheduler.runTasks();

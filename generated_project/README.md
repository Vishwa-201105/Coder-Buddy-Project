# Simple To‑Do List

A lightweight web application that lets you manage a personal to‑do list directly in the browser.  Tasks are stored in **localStorage**, so they persist across page reloads without any server or build step.

---

## Tech Stack
- **HTML** – Markup for the UI.
- **CSS** – Styling and responsive layout.
- **JavaScript** – Task management, DOM manipulation, and persistence.

---

## Features
- **Add tasks** – Type a task description and click **Add**.
- **Delete tasks** – Remove a task with the *Delete* button.
- **Toggle completion** – Click the checkbox next to a task to mark it as completed or not.
- **Clear completed** – Remove all completed tasks with a single button.
- **Persistence** – All tasks are saved in `localStorage` and re‑loaded when the page is opened again.
- **Responsive design** – The layout adapts to mobile screens (single‑column view, stacked controls).

---

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your‑username/simple-todo-list.git
   cd simple-todo-list
   ```
2. Open `index.html` in any modern web browser (no build step, no server required).

---

## Usage
1. **Add a task** – Enter text in the input field at the top and press the **Add** button.
2. **Mark as completed** – Click the checkbox next to a task; completed tasks are shown with a strikethrough style.
3. **Delete a task** – Press the **Delete** button that appears on the right side of each task.
4. **Clear completed tasks** – Click the **Clear Completed** button below the list to remove all tasks that are marked completed.
5. All changes are saved automatically to `localStorage`; reopening the page will show the same list.

---

## Responsive Design
The app uses a simple CSS media query (`max-width: 600px`) to switch the input section to a vertical stack on narrow screens. Buttons and inputs expand to full width, ensuring a comfortable experience on mobile devices.

---

## Development
- **`index.html`** – The main HTML file that defines the structure of the page.
- **`styles.css`** – Contains all styling, variables, and responsive rules.
- **`app.js`** – JavaScript logic for task CRUD operations, rendering, and persistence.

To modify the app, edit the corresponding file and refresh the browser to see changes. No build tools or bundlers are required.

---

## License
[Insert license information here] (e.g., MIT, Apache 2.0, etc.).

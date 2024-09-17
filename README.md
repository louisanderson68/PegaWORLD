
# PegaWORLD Conference Application

This project is a React application designed to display and manage the agenda and day views for the PegaWORLD conference. It includes views for the overall agenda and individual days, along with filters for categories and tracks. The application is built using React, React Bootstrap, and FontAwesome for UI elements and interactivity.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [File Descriptions](#file-descriptions)

## Features

- **Agenda View**: Displays events for the entire conference, with filtering by event category.
- **Day View**: Displays events for a specific day, with additional track filtering (specific to Wednesday).
- **Responsive Design**: Mobile and desktop views are fully supported.
- **Dynamic Routing**: Uses React Router to navigate between the agenda and individual day views.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/louisanderson68/pegaWORLD.git
   cd pegaWORLD
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

## Folder Structure

The main structure of the project is as follows:

```
src/
├── components/
│   ├── Agenda.js
│   ├── DayView.js
│   ├── Event.js
│   ├── EventList.js
│   ├── Header.js
├── data/
│   └── agendaData.js
├── styles/
│   ├── Agenda.css
│   ├── DayView.css
│   ├── Event.css
│   ├── global.css
│   └── Header.css
├── App.js
└── index.js
```

## Usage

### Agenda View

The Agenda view displays the schedule for all the days of the conference. You can filter events by category (e.g., **Customer Centricity**, **User-Centered Design**, etc.). The events are displayed in a list format, and you can click on a day to view its detailed schedule.

### Day View

Each day in the conference has its own view. The Wednesday view has a unique track filtering feature, allowing the user to filter between the **Mobile Track** and **User-Centered Design Track**.

- **Category Filter**: Available for all events in both desktop and mobile views.
- **Track Filter**: Only available on Wednesday's events for the mobile view.

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in the development mode.
- **`npm run build`**: Builds the app for production to the `build` folder.

## File Descriptions

### Components

- **`App.js`**: The root of the application. It includes routing logic for navigating between the agenda view and day views.
- **`Header.js`**: Displays the navigation bar and PegaWorld branding.
- **`Agenda.js`**: Displays the full agenda of the conference, with filters for categories and tracks. Integrates with the `EventList` component to show event details.
- **`DayView.js`**: Displays events for a specific day. Supports filtering by track on Wednesday.
- **`Event.js`**: Represents individual event details such as time, title, category, and location.
- **`EventList.js`**: A list wrapper for the `Event` component, used in both agenda and day views.

### Data

- **`agendaData.js`**: Contains all the event data for the conference. The data is structured by day, with categories and track information.

### Styles

- **`Agenda.css`**: Styles specific to the agenda view.
- **`DayView.css`**: Styles specific to the day view.
- **`Event.css`**: Styles for individual events.
- **`Header.css`**: Styles for the navigation header.
- **`global.css`**: Global styles applied across the application.

## License

This project is licensed under the MIT License.

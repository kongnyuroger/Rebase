# Rebase — React Landing Site

A responsive React marketing site for the Rebase program. Built with Create React App, the site showcases program sections and a Log In page. A live demo is available.

## Live Demo

Visit the deployed site to see the app in action:
https://rebase4.netlify.app/

## About

This repository is a single-page React site assembled from reusable components. It uses client-side routing and per-component CSS for styling. The HomePage component composes the main sections.

## Features

- Bootstrapped with Create React App
- React Router for client-side routing
- Modular components for sections and small UI elements

## Quick Start

Install dependencies and run locally:

npm install
npm start

Build for production:

npm run build

Scripts and dependencies are defined in package.json.

## Project Structure

- public/ — Static HTML and meta files (public/index.html)
- src/ — React source code and components
- src/index.js — App entry point
- src/App.js — Router with routes for HomePage and LogIn
- src/components/homepage/HomePage.js — Assembles main site sections
- src/components/login/LogIn.js — Sign up / login page

## Development Notes

- Images are imported via require(...) inside components
- Styles are plain .css files imported per component
- Uses react-icons and Font Awesome for icons

## Deployment

Run:

npm run build

This creates the production bundle in the build/ directory.

The project includes a Netlify cache plugin in devDependencies for Netlify deployments.

## Contributing

- Fork the repo
- Create a feature branch
- Implement your changes
- Open a pull request

Keep components modular and styles scoped to their component folders.

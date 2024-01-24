<h1 align="center">NEVION - Interview Case</h1>
<p align="center"><em><strong>SPACE X</strong> - Launch Database Browser</em></p>
<p align="center">By <a href="https://github.com/GJRTSN">Jostein Gjertsen</a></p>

# Case

## Purpose & form

In order to get a better understanding of how you approach the task of developing
applications, it’s useful to see how you go about solving a specific case.

We like you to spend the time before the interview on a specific case. The presentation
should take no more than 10 minutes, and we will spend some time after to discuss the case.


## The case
Develop an application using the SpaceX API (https://docs.spacexdata.com).

### Minimum requirements:
- Use the endpoint https://api.spacexdata.com/v3/launches to display all launches.
- This launches must be searchable by mission name
- Selecting a launch will display more detailed information using the endpoint https://api.spacexdata.com/v3/launches/{{flight_number}} 

You are free to use a javascript framework you are comfortable with, but React is encouraged. 
Other than this you are free to do anything you like with your application.

## Criterias
- Quality of code written
- Technical knowledge of the chosen stack
- Architecture
- Ability to communicate
- Methodologies, design pattern mastered
- Best practices knowhow
- Look and feel

# Delivery
### Frontend-stack
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">TypeScript</a>
- <a href="https://react.dev/">React</a>
- <a href="https://nextjs.org/">Next</a>
- <a href="https://tailwindcss.com/">Tailwind CSS</a>
- <a href="https://vercel.com/">Vercel</a>

## Usage

First clone the repository to your machine.

Then, run the development server in your chosen IDE:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Demo

The application is available at <a href="https://nevion-intervjuoppgave.vercel.app/">nevion-intervjuoppgave.vercel.app</a>

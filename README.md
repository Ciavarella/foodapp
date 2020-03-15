# Food react map

## Deploy
Deployed [https://elegant-chandrasekhar-6cd7e9.netlify.com/](https://elegant-chandrasekhar-6cd7e9.netlify.com/)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start

Starts on http://localhost:3000/
```

## Directory Layout
```bash
./
├── /public/                     # Public directory, ready to be served by a web server
├── /src/                        # Directory for the app code
│   ├── /components/             # Directory for components
│   ├── /models/                 # Contains models, for now just restaurantmodel
│   ├── /services/               # Restaurant service
│   ├── /types/                  # Directory with TypeScript interfaces
│   ├── hooks.tsx                # Hooks for store
│   ├── store.tsx                # Global store
│   ├── index.css                # Global styles
│   └── index.tsx                # Mounts the app
│
└── README.md                    # The file you are reading right now
```

## Tech Stack

* React.js
* TypeScript
* easy-peasy (state-management)
* react-map-gl (map)
* Yelp api (searching and getting coordinates)
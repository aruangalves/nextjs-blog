# Servidor

Comandos para iniciar o site do zero:

```sh
# Install dependencies
npm install
# Configure .env.local
# Use .env.local-example as reference
touch .env.local
#Generate database
npm run migrate
#OPTIONAL: seed posts to database
npm run seed
#Create your production build
npm run build
#OPTIONAL: run test
npm start
```

Deploy requirements:

- Linux server with valid, static IP
- SSH access
- A domain where you can set your DNS registry (type A register is fine)

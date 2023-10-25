# Development

Pasos para levantar la app en desarrollo

1. Levantar la base de datos

```
docker componse up -d
```

2. Crear una copia de el .env.template, y renombrarlo a .env

3. Reemplazar las variables de entorno en el .env

4. Instalar dependencias

```
npm install
```

5. Levantar el servidor

```
npm run dev
```

6. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stage

```

```

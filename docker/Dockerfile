FROM node:22-alpine as build
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN ["npm", "install"]
COPY [".", "./"]
RUN ["npm", "run", "build"]

# move builds to nginx and run the front-end
FROM nginx:alpine
COPY --from=build ["/app/dist", "/usr/share/nginx/html"]
RUN ["rm", "/etc/nginx/conf.d/default.conf"]
COPY ["./nginx/nginx.conf", "/etc/nginx/conf.d"]
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]




#Stage-1: Build Stage
FROM maven:eclipse-temurin AS build

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline

COPY /src .

RUN mvn clean package -DskipTest

#Stage-2: Run Stage

FROM eclipse-temurin:25

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT [ "java","jar","app.jar" ]






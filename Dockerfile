# ---- Base Node ----
FROM node:18.4.0 AS build
WORKDIR /app

# Copy the project files from the host
COPY . .

# Install frontend dependencies and build
WORKDIR /app/frontend/frontend
RUN npm install
RUN npm run build

# ---- Final ----
FROM python:3.12
WORKDIR /app

# Define build arguments
ARG DJANGO_SECRET_KEY
ARG DEBUG
ARG DATABASE_URL
ARG AWSPersonalAdminKey
ARG AWSPersonalAdminSecret
ARG AWSPortfolioBucket

# Define environment variables
ENV DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY
ENV DEBUG=$DEBUG
ENV DATABASE_URL=$DATABASE_URL
ENV AWSPersonalAdminKey=$AWSPersonalAdminKey
ENV AWSPersonalAdminSecret=$AWSPersonalAdminSecret
ENV AWSPortfolioBucket=$AWSPortfolioBucket

# Copy the project files from the build stage
COPY --from=build /app .

# Install backend dependencies
WORKDIR /app/backend
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the built frontend from the build stage
COPY --from=build /app/frontend/frontend/build /app/frontend/frontend/build

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose the port the app runs in
EXPOSE 8000

# Define the command to run the app
CMD ["gunicorn", "portfolio.wsgi:application", "--bind", "0.0.0.0:8000"]
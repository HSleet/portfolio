# ---- Base Node ----
FROM node:18.4.0 AS build
WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Clone the repository
RUN git clone https://github.com/HSleet/portfolio.git .

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
# Define environment variables
ENV DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY
ENV DEBUG=$DEBUG
ENV DATABASE_URL=$DATABASE_URL

# Copy the cloned repository
COPY --from=build /app .

# Install backend dependencies
WORKDIR /app/backend
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the built frontend from the build stage
COPY --from=build /app/frontend/frontend/build /app/frontend/frontend/build

# Create the staticfiles directory
RUN mkdir -p staticfiles

# Collect static files
RUN python manage.py collectstatic --noinput

RUN which gunicorn || echo gunicorn not found

# Expose the port the app runs in
EXPOSE 8000

# Define the command to run the app
CMD ["gunicorn", "portfolio.wsgi:application", "--bind", "0.0.0.0:8000"]
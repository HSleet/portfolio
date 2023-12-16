release: cd frontend/frontend && npm install && npm run build && cd ../../backend && python manage.py collectstatic --noinput
web: gunicorn backend.portfolio.wsgi:application --log-file -
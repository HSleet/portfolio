from rest_framework import generics
from .models import User, Project, JobExperience, Education
from .serializers import UserSerializer, ProjectSerializer, JobExperienceSerializer, EducationSerializer
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator

@method_decorator(ensure_csrf_cookie, name='dispatch')
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@method_decorator(ensure_csrf_cookie, name='dispatch')
class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

@method_decorator(ensure_csrf_cookie, name='dispatch')
class JobExperienceList(generics.ListAPIView):
    queryset = JobExperience.objects.all()
    serializer_class = JobExperienceSerializer

@method_decorator(ensure_csrf_cookie, name='dispatch')
class EducationList(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

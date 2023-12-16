from rest_framework import generics
from .models import User, Project, JobExperience, Education
from .serializers import UserSerializer, ProjectSerializer, JobExperienceSerializer, EducationSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class JobExperienceList(generics.ListAPIView):
    queryset = JobExperience.objects.all()
    serializer_class = JobExperienceSerializer

class EducationList(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
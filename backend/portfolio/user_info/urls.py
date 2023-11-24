from django.urls import path
from .views import UserList, ProjectList, JobExperienceList, EducationList

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('job-experiences/', JobExperienceList.as_view(), name='jobexperience-list'),
    path('educations/', EducationList.as_view(), name='education-list'),
]
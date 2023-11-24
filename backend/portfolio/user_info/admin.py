from django.contrib import admin
from .models import User, Education, JobExperience, Skill, Project

# Register your models here.
admin.site.register(User)
admin.site.register(Education)
admin.site.register(JobExperience)
admin.site.register(Skill)
admin.site.register(Project)

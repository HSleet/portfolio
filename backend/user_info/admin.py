from django.contrib import admin
from .models import User, Education, JobExperience, Skill, Project, ProjectImage


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'email')


class EducationAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'institution', 'graduation_date')


class SkillAdmin(admin.ModelAdmin):
    list_display = ('id', 'skill', 'skill_level')


class JobExperienceAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'company')


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1


class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]
    list_display = ('id', 'project_title', 'skills')

    def skills(self, obj):
        return ", ".join([skill.skill for skill in obj.skill.all()])
    

class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'project', 'image')


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Education, EducationAdmin)
admin.site.register(JobExperience, JobExperienceAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage, ProjectImageAdmin)
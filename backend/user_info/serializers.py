from rest_framework import serializers
from .models import User, Education, JobExperience, Skill, Project, ProjectImage

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'title', 'institution', 'graduation_date']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'skill', 'skill_level']

class JobExperienceSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = JobExperience
        fields = ['id', 'title', 'company', 'description', 'skills', 'start_date', 'end_date']
        ordering = ['-start_date']

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image']

class ProjectSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    images = ProjectImageSerializer(source='projectimage_set', many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'project_title', 'skills', 'short_description', 'long_description', 'url', 'github_repo', 'images']

class UserSerializer(serializers.ModelSerializer):
    education = EducationSerializer(source='education_set', many=True, read_only=True)
    job_experience = JobExperienceSerializer(source='jobexperience_set', many=True, read_only=True)
    projects = ProjectSerializer(source='project_set', many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'full_name', 'email', 'phone_number', 'linkedin', 'github', 'website', 'small_bio', 'extended_bio', 'image', 'education', 'job_experience', 'projects', 'resume']

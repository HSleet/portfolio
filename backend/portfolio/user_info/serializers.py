from rest_framework import serializers
from .models import User, Education, JobExperience, Skill, Project, ProjectImage

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['title', 'institution']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['skill', 'skill_level']

class JobExperienceSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = JobExperience
        fields = ['title', 'description', 'skills', 'start_date', 'end_date']

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['image']

class ProjectSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    images = ProjectImageSerializer(source='projectimage_set', many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['skills', 'short_description', 'long_description', 'url', 'github_repo', 'images']

class UserSerializer(serializers.ModelSerializer):
    education = EducationSerializer(many=True, read_only=True)
    job_experience = JobExperienceSerializer(many=True, read_only=True)
    projects = ProjectSerializer(source='project_set', many=True, read_only=True)

    class Meta:
        model = User
        fields = ['email', 'phone_number', 'linkedin', 'github', 'website', 'small_bio', 'extended_bio', 'image', 'education', 'job_experience', 'projects']

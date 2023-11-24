from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=15, blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    website = models.URLField(blank=True)
    small_bio = models.TextField(max_length=500)
    extended_bio = models.TextField()
    image = models.ImageField(upload_to='profile_images/', null=True, blank=True)

class Education(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)

class Skill(models.Model):
    skill = models.CharField(max_length=200)
    skill_level = models.IntegerField()

class JobExperience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    skills = models.ManyToManyField(Skill)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skills = models.ManyToManyField(Skill)
    short_description = models.CharField(max_length=200)
    long_description = models.TextField()
    url = models.URLField(blank=True)
    github_repo = models.URLField(blank=True)

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='project_images/')

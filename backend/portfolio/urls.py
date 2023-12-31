"""
URL configuration for portfolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import re_path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('user_info.urls')),
    path('api/', include('user_messaging.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static('/project_images/', document_root=os.path.join(settings.STATIC_ROOT, 'project_images'))
    urlpatterns += static('/skill_images/', document_root=os.path.join(settings.STATIC_ROOT, 'skill_images'))
else: 
    urlpatterns += staticfiles_urlpatterns()

urlpatterns += [re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))]
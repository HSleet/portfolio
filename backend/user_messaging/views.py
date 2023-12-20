from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Message
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .serializers import MessageSerializer
from django.core.mail import send_mail
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

class MessageView(APIView):
    def post(self, request, format=None):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # TODO: send email integration
            # send_mail(
            #     serializer.validated_data['subject'],
            #     serializer.validated_data['body'],
            #     serializer.validated_data['email'],
            #     ['your-email@example.com'],
            #     fail_silently=False,
            # )
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
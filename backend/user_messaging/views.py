from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Message
from .serializers import MessageSerializer
from django.core.mail import send_mail


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
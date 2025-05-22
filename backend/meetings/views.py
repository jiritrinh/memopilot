from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Meeting
from .serializers import MeetingSerializer

# Create your views here.

class MeetingViewSet(viewsets.ModelViewSet):
    serializer_class = MeetingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Only return meetings for the current user
        return Meeting.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Automatically set the user when creating a meeting
        serializer.save(user=self.request.user)

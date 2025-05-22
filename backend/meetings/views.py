from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Meeting
from .serializers import MeetingSerializer


class MeetingViewSet(viewsets.ModelViewSet):
    serializer_class = MeetingSerializer
    permission_classes = [IsAuthenticated]  # noqa: RUF012

    def get_queryset(self):
        return Meeting.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

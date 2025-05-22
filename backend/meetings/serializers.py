from rest_framework import serializers
from .models import Meeting

class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ['id', 'title', 'date', 'transcript', 'summary', 'user', 'created_at', 'updated_at']
        read_only_fields = ['user']  # User will be set automatically 
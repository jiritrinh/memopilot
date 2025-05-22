from django.contrib import admin

from .models import Meeting


@admin.register(Meeting)
class MeetingAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'user', 'created_at')
    list_filter = ('date', 'user')
    search_fields = ('title', 'transcript')

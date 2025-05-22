from django.db import models
from django.contrib.auth.models import User

class Meeting(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)  
    
    transcript = models.TextField()  
    summary = models.TextField(blank=True) 
    
    # Relationship to user
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Each meeting belongs to a user
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  # Automatically updated when the model is saved
    
    def __str__(self):
        return self.title  # This is what will be shown in the admin interface

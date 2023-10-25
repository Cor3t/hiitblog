from django.db import models
from django.contrib.auth.models import User

PRIORITIES = (('L', 'Low'), ('M', 'Mid'), ('H', 'High'))

class Category(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Todo(models.Model):
    title = models.CharField(max_length=255)
    completed = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    priority = models.CharField(choices=PRIORITIES,max_length=20, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE) 
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title 

class Comment(models.Model):
    comment = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    todo = models.ForeignKey(Todo, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment
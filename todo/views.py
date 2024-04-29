from django.shortcuts import render
from rest_framework import viewsets
from .models import Task
from .serializer import TaskS

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskS
    queryset = Task.objects.all()

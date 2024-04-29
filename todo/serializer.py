from rest_framework import serializers
from .models import *

class TaskS(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields = ('id', 'title', 'description', 'endend')
        fields = '__all__'
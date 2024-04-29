from django.db import models

# Create your models here.


class Task(models.Model):
    title = models.CharField(max_length=155)
    description = models.TextField(blank=True)
    endend = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f'{self.title} - {self.description} - {self.endend}'
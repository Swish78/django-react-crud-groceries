from django.db import models


class GroceryItem(models.Model):
    name = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.IntegerField()

    def __str__(self):
        return self.name


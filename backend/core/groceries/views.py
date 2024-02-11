from django.shortcuts import render, HttpResponse
from rest_framework import generics
from .models import GroceryItem
from .serializers import GroceryItemSerializer

# Create your views here.


class GroceryListCreateView(generics.ListCreateAPIView):
    queryset = GroceryItem.objects.all()
    serializer_class = GroceryItemSerializer


class GroceryItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = GroceryItem.objects.all()
    serializer_class = GroceryItemSerializer




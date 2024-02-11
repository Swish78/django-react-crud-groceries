from django.urls import path
from .views import GroceryListCreateView, GroceryItemRetrieveUpdateDestroyView

urlpatterns = [
    path('groceryitems/', GroceryListCreateView.as_view(), name='groceryitem-list-create'),
    path('groceryitems/<int:pk>/', GroceryItemRetrieveUpdateDestroyView.as_view(), name='groceryitem-retrieve-update-destroy'),
]

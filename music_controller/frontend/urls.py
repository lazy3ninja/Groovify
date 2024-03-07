from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index),
<<<<<<< HEAD
    path('room/<str:roomCode>',index),
=======
    path('room/<str:roomCode>', index),
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
]
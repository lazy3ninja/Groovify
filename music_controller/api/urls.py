from django.urls import path
<<<<<<< HEAD
from .views import RoomView
from .views import CreateRoomView, GetRoom, JoinRoom, UserInRoom, LeaveRoom, UpdateView

urlpatterns = [ 
=======
from .views import RoomView,CreateRoomView, GetRoom, JoinRoom, UserInRoom, LeaveRoom

urlpatterns = [
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('user-in-room', UserInRoom.as_view()),
<<<<<<< HEAD
    path('leave-room', LeaveRoom.as_view()),
    path('update-room', UpdateView.as_view()),


]
=======
    path('leave-room', LeaveRoom.as_view())
]

>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e

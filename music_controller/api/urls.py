#stores urls local to this app
from django.urls import path
from .views import RoomView
from .views import CreateRoomView, GetRoom, JoinRoom, UserInRoom, LeaveRoom, UpdateView

urlpatterns = [ 
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('user-in-room', UserInRoom.as_view()),
    path('leave-room', LeaveRoom.as_view()),
    path('update-room', UpdateView.as_view()),


]

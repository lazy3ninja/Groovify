from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause',
                  'votes_to_skip', 'created_at')
        
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
<<<<<<< HEAD
        fields = ('guest_can_pause', 'votes_to_skip')

class UpdateRoomSerializer(serializers.ModelSerializer):
    code = serializers.CharField(validators=[])
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip', 'code')
=======
        fields = ('guest_can_pause', 'votes_to_skip')
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e

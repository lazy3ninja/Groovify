# this will change the model which was written in python to json format

from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')

        #id is the primary key of a model. unique to easch model. created on making a new model


#this serializer will make sure that our post request is valid and that it caorresponds to the information we need to make a new room
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')

 
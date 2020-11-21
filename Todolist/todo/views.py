
# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Todo
from .serializers import TodoSerializers


class TodoList(ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializers


class TodoDeleteList(DestroyAPIView):
    queryset = Todo.objects.all()
    lookup_field = 'pk'
    serializer_class = TodoSerializers

class TodoCreateList(CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializers
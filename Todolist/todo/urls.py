from django.urls import path, include
from .views import TodoList,TodoDeleteList,TodoCreateList
from rest_framework import routers

appname='student'

urlpatterns = [
    path('todo/',TodoList.as_view(),name='todolist'),
     path('todo/delete/<int:pk>/',TodoDeleteList.as_view(),name='Tododelete'),
      path('todo/post',TodoCreateList.as_view(),name='todopost'),
   

]
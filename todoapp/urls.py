from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signUp, name='signup'),
    path('login', views.loginUser, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('home/', views.home, name='homepage'),
    path('completedtodo/', views.completed_todo, name='completedtodo'),
    path('createtodo/', views.createTodo, name='createtodo'),
    path('todo/<int:pk>/', views.display_todo, name='displaytodo'),
    path('todo/delete/<int:pk>', views.delete_todo, name='deletetodo'),
    path('todo/complete/<int:pk>', views.complete_todo, name='completetodo')
]
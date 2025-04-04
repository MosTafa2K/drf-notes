from django.urls import path
from . import views


urlpatterns = [
    path("user/register/", views.CreateUserView.as_view(), name="register"),
]

urlpatterns += [
    path("notes/", views.NoteListCreateView.as_view(), name="note-list-create"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]
